//Moviecard we keep as class based component
import {Component} from "react";
import Moviecard from "./Moviecard";

  //you can also import directly component class because component is object of react
class MovieList extends Component{
  
    constructor(){
        super();
        this.state = { //state is use to store data of our app just fetching data from object
            movies : [

                {
                    id:1,

                    title: 'The Avengers',
            
                    plot:
                        "Earth's mightiest heroes must come together and stop the mischievous Loki and his alien",
            
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdisOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg/>',
            
                    imdbRating: '8.9',
            
                    price: 100,
            
                    stars: 0,
            
                    fav: false,

                    isInCart:false
                },

                {
                    id:2,

                    title:'The Dark Knight',

                    plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",

                    poster:'https://images4.alphacoders.com/573/57394.jpg',

                    imdbRating:'8.5',

                    price:199,

                    stars:0,

                    fav:false,

                    isInCart:false
                },

                {
                    id:3,

                    title:'Batman VS Superman',

                    plot:"n a flashback to his childhood, Bruce Wayne runs from his parents' funeral. He falls into a cave, where a circling vortex of bats elevates him back to the surface. ",

                    poster:'https://upload.wikimedia.org/wikipedia/en/3/31/Batman_v_Superman_Dawn_of_Justice_poster.jpg',

                    imdbRating:'8.6',

                    price:199,

                    stars:0,
                    
                    fav:false,

                    isInCart:false
                },

                {
                    id:4,

                    title:'Spiderman',
            
                    plot:"After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy. ",
            
                    poster:'https://images.unsplash.com/photo-1642456074142-92f75cb84533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80.jpg',
            
                    imdbRating:'8.6',
            
                    price:199,
            
                    stars:0,
                    
                    fav:false,

                    isInCart:false

                },

                {
                    id:5,

                    title:'Venom',
            
                    plot:"After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy. ",
            
                    poster:'https://images.squarespace-cdn.com/content/v1/511eea22e4b06642027a9a99/1545379008906-JGN047M896SFRV3NQIIK/Venom+2018.jpg',
            
                    imdbRating:'8.6',
            
                    price:199,
            
                    stars:0,
                    
                    fav:false,
            
                    isInCart:false
                },

                {
                    id:6,
                    title:'Pirates of the',
            
                    plot:"Her speed is derived from several factors such as the large number of sails she carries and being partly supernatural. As stated in Dead Man's Chest and At World's End, the Black Pearl is the only ship that can outrun the Dutchman and this is evidenced in the maelstrom battle between the two ships in the movies.",

                    poster:'https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg',
            
                    imdbRating:'8.6',
            
                    price:199,
            
                    stars:0,
                    
                    fav:false,
            
                    isInCart:false
                }
            ]
        }
    }

       
    addStar = () => {
        // form1
        //  this.setState({
        //     stars: this.state.stars +0.5
        //  });

        //form2
        this.setState((prevState) =>{
            if(this.state.stars >= 5){
                return;
            }
            return {
                
                stars: prevState.stars+0.5
            }
        });

       this.state.stars += 0.5;
        //console.log("this.state.stars ", this.state.stars); //we can update state without rerendering manually by using setState function . 
     }

     handleIncStar = (movie) => {
        const {movies} = this.state;


        const mid = movies.indexOf(movie);

        if(movies[mid].stars >= 5){
            return;
        }

        movies[mid].stars += 0.5

         this.setState({
                movies
         })
     }

     handleDecStar = (movie) => {
        const {movies} = this.state;
        const mid = movies.indexOf(movie);

        if(movies[mid].stars <= 0){
            return;
        }
        movies[mid].stars -= 0.5;

        this.setState({
            movies:movies
        })
     }

     handleToggleFav = (movie) => {
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].fav = !movies[mid].fav;

        this.setState({
            movies
        })
     }

     handleToggleCart = (movie) => {
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].isInCart = !movies[mid].isInCart;
        console.log(movies[mid].isInCart)

        this.setState({
            movies
        })
     }

     

    render(){
      //const {title,plot,price,rating,stars,fav,isInCart,poster} = this.state.movies;
        const {movies} = this.state;
        return(
            <>
                {movies.map((movie) => <Moviecard movies = {movie}  
                            addStar={this.handleIncStar}
                            decStar={this.handleDecStar}
                            toggleFav={this.handleToggleFav}
                            toggleCart={this.handleToggleCart}
                            key = {movie.id}/>)}
                           </>
        )
    }
}


export default MovieList;
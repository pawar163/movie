//Moviecard we keep as class based component
import {Component} from "react";

class Moviecard extends Component{//you can also import directly component class because component is object of react
    
    render(){
       // console.log(this.props);
       const{movies,addStar,decStar,toggleFav,toggleCart} = this.props;
        // const {movies : data} = this.props; //rename movie to data
       // console.log(data);
        const {title,plot,price,rating,stars,fav, isInCart} = this.props.movies;
        
        return(
            <div className="main">
                <div className="movie-card">
                    
                    <div className="left">
                        <img alt="Poster" src="https://m.media-amazon.com/images/I/81KJ-sK0YpS._AC_UL400_.jpg"/>
                    </div>
                    
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn" 
                                alt="decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                onClick={() => {decStar(movies)}}/>

                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>

                                <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                                //while calling function when passing the reference we can bind 
                                onClick={() => {addStar(movies)}}/>    {/**without binding this it will give undefined  */}

                                <span className="starCount">{stars}</span>
                            </div>

                            {/* {fav?  <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> : 
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                            
                                {/*Another way to use*/}

                           <button className= {fav?"unfavourite-btn" : "favourite-btn"} 
                           onClick={() => {toggleFav(movies)}}>{fav?"unfavourite":"favourite"}</button>

                            <button className={isInCart?"notaddcart-btn" : "cart-btn"} 
                            onClick={() => {toggleCart(movies)}}>{isInCart? "Remove from Cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Moviecard;
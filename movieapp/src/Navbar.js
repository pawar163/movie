import React,{Component} from "react";

import styled from "styled-components";


//Used Nav as a component so we don't need div
const Nav = styled.div` 
    height: 70px;
    background: linear-gradient(170deg, #1bc059, #0d47a1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight:600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left:20px;
    &:hover{color: #0f0}
`;

const CartImg = styled.img`
    height:48px;
    margin-right:20px;
`;

const CartIconContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

// //using props we can change dynamically coloue
const CartCount = styled.div`
   
    background-color: ${(props) => props.color}; 
    border-radius: 50%;
    padding:  4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    fontSize:12px;
    visibility: ${(props) => props.show? "visible" : "hidden"};
`;

class Navbar extends Component{
    render(){
        return(
           <>
           {/* use directly nav instead of div */}
             <Nav>
                                
              <Title>Movie-App</Title>
                   
          <CartIconContainer>
                     <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" style={styles.cartIcon}></CartImg> 

                    <CartCount color="yellow" show = {false}> 6</CartCount>
          </CartIconContainer>

      </Nav>
           </>
        )
    }
}
export default Navbar;



//created object instead of passing all style in div because code will look messy
const styles = {
    nav:{
        height: 70,       
        background:"blue", 
        display:"flex", 
        justifyContent:"space-between",
        alignItems: "center",
        position: "relative"
    },

    title : {
        fontSize: 30,
        color: "#fff",
        fontWeight:600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform:"uppercase",
        marginLeft:20

    },

    cartContainer:{
        position:"relative",
        cursor:"pointer",
    },

    cartIcon:{
        height:48,
        marginRight:20
    },

    cartCount:{
        background:"orange",
        borderRadius:"50",
        padding:"4px 8px",
        position:"absolute",
        right:10,
        top:-5,
        fontSize:12
    }
}




import React from "react";
import { skin } from "./data";
import "./Skin.css";
import { Grid, Box, Flex } from "@chakra-ui/react"
const Skin = () => {
  return (
    <>
    <div style={{display:"grid", gridTemplateColumns:"repeat(10,1fr)",gridTemplateRows:"repeat(1,auto)",  gap:"250px", overflowX:"scroll", marginTop:"40px"}}>
      {skin.map((e) => (
        
        <div className="add_main">

          <div className="add__services">
            <div className="add__box">
                <img src={e.productimage} alt="img" style={{width:"200%", height:"250px"}} />
                
                    <h1 style={{ fontWeigth: "600px", }}>{e.title}</h1>
                    <p>{e.description}</p>
                    <p>{e.retailprice}</p>
                    <p>RetailPrice</p>
                    <p>★★★★★4.5</p>
                    <button className="btn" >Add To Cart</button>  
                </div>
            </div>
        </div>
          
       
      ))}
    </div>
    </>
  );
};

export default Skin;

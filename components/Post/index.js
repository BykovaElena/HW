import React from "react";
import { Card } from 'antd';
import { postData } from "../../posts";
import "./style.css";
import { Grid } from "@mui/material";




export const Post = () => {
  

    return (
       
        
        
        <div className="site-card-border-less-wrapper">
            
            {
                postData.map (card =>{
                    return (
                          
                        <Card title={card.title} key = {card._id} bordered={false} style={{ width: 300 }}>
                            <img src={card.image} alt='not this time' className="card__image" />
                            <p>{card.text}</p>
                            <p>{card.likes}</p>
                            <p>{card.isPublished}</p>
                            
                        </Card> 
                        
                    )
                })
            }
            
        </div>
        
    );

};

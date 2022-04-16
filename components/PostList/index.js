import React from "react";
import { Card } from 'antd';
import "./style.css";
import { postData } from "../../posts";



export const _Card = () => {
   
    return (

        
            <div className="card">
            <div className="site-card-border-less-wrapper">
                {
                    postData.map((card) => {
                      return (
                          <Card key = {card._id} title={card.title} bordered={false} style={{ width: 300 }}>
                              <img src={card.image} alt='not this time' className="card__image" /> 
                              <p>{card.text}</p>
                              <p>{card.likes}</p>
                              <p>{card.isPublished}</p>
                          </Card>   
                      )  
                    })
                    
                }
                
            </div>,
            </div>
        
       
    );
};


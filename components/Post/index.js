import React from "react";
import { Card } from 'antd';
//import { postData } from "../../posts";
import "./style.css";





export const Post = ({ title, image, text, created_at, updated_at}) => {
    

    return (
       
        
        
        <div className="site-card-border-less-wrapper">
            <Card title = {title} bordered={false} style={{ width: 300 }}>
                <img src={image} alt='not this time' className="card__image" />
                <p>{text} </p>
                <p>{created_at}</p>
                <p>{updated_at}</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </Card>
        </div>
        
    );

};

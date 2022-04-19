import React from "react";
import { Card } from 'antd';
import { Timeline } from 'antd'
//import { postData } from "../../posts";
import "./style.css";





export const Post = ({ title, image, text, author: {name, email}, created_at, updated_at}) => {
    

    return (
       
        
        
        <div className="site-card-border-less-wrapper">
            <Card title={name} extra = {email} bordered={false} style={{ width: 300 }}>
                
                <img src={image} alt='not this time' className="card__image" />
                <p>{title}</p>
                <p>{text} </p>
                
               
                
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <Timeline>
                    <Timeline.Item>{created_at}</Timeline.Item>
                    <Timeline.Item>{updated_at}</Timeline.Item>
                    
                </Timeline>
            </Card>
        </div>
        
    );

};

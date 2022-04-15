import React from "react";
import { Card } from 'antd';
import "./style.css";




export const _Card = ({text}) => {
   
    return (

        
            <div className="card">
            <div className="site-card-border-less-wrapper">
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <p>{text}</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>,
            </div>
        
       
    );
};


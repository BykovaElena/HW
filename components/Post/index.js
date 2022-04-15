import React from "react";

import "./style.css";

import data from './src/post.js'
import { _Card } from "../PostList";

export const Post = () => {
    
    const dataJson = JSON.strigify(data);
    
    
    return (
        
         <div className="card">
            <_Card text ={dataJson.text}/>
         </div> 
       
    );

};

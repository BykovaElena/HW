
import React, { useState, useEffect } from "react"
//import { postData } from "../../posts";
import {Post} from '../Post'
import "./style.css";

import api from "../../utils/Api";



export const PostList = ({postData}) => {
  
    return (
<>
<div className="card">
{
          postData.map(posts => <Post key={posts._id} {...posts} />) 
}
                         
        

        </div>         
            
        
      </>
    );
};


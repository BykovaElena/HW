
import React, { useState, useEffect } from "react"
import { Layout } from 'antd';
const { Header, Footer,  Content } = Layout;
import { PostList } from "../components/PostList";
import { Info } from "../components/Content";
//import { postData } from "../posts";



import api from "../utils/Api.js";






export const App = () => {
const [posts, setPosts] = useState ([]) 
    const [currentUser, setCurrentUser] = useState({})

useEffect (() => {
    // api.getPostList ()
    // .then (data => console.log(data))
    //     .catch(err => console.log(err))
    // api.getUserInfo()
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

    Promise.all([api.getPostList(), api.getUserInfo() ])
    .then(([postData, userData]) =>{
        setPosts(postData)
        setCurrentUser(userData)

    } )
}, [])
    
    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <PostList postData={posts} currentUser={currentUser} />
                    
                    <Info/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};
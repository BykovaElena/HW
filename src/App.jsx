
import React, { useState, useEffect } from "react"
import { Layout } from 'antd';
const { Header, Footer,  Content } = Layout;
import { _Card } from "../components/PostList";
import { Info } from "../components/Content";
import Api from '../utils/Api.js';
//import { postData } from "../posts";






export const App = () => {
    const [posts, setPosts] = useState ([]);
    useEffect(() => {
        Promise.all([Api.getPostList(), Api.getUserInfo()])
            .then(([productData, userData]) => {
                setPosts(productData);
                setCurrentUser(userData)
            })
    }, [])
    
    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <_Card postData  = {posts} />
                   
                    <Info/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};
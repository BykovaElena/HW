
import React, { useState, useEffect } from "react"
import { Layout } from 'antd';
const { Header, Footer,  Content } = Layout;
import { PostList } from "../components/PostList";
import { Info } from "../components/Content";
import { postData } from "../posts";



import api from "../utils/Api.js";
import { Post } from "../components/Post";




export const App = () => {
const [posts, setPosts] = useState (postData) 
    
    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Content>
                <PostList postData = {posts} />
                    
                    <Info/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};
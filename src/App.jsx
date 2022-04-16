
import React, { useState, useEffect } from "react"
import { Layout } from 'antd';
const { Header, Footer,  Content } = Layout;
import { _Card } from "../components/PostList";
import { Info } from "../components/Content";
import Api from '../utils/Api.js';






export const App = () => {
    useEffect(() => {
        Api.getPostList()
            .then(data => console.log(data))
            .catch(err => console.log(err))
    })
    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <_Card/>
                   
                    <Info/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};
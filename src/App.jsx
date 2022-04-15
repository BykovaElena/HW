
import React from "react"; 
import { Layout } from 'antd';
const { Header, Footer,  Content } = Layout;
import { _Card } from "../components/PostList";
import { Info } from "../components/Content";

export const App = () => {
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
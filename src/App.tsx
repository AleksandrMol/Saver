import React from "react";
import { hot } from 'react-hot-loader/root';
import './main.global.css';
import { Layout } from "./Layout/Layout";
import { Header } from "./Header";
import { Content } from "./Content";
import { CardList } from "./CardList";
import { Card } from "./CardList/Card";

function AppComponent () {
    return(
        <Layout>
            <Header />
            <Content >
                <CardList/>
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent);
import React from 'react';

import {createGlobalStyle} from "styled-components";

import Company from "./components/company";

const Global =  createGlobalStyle`
 body{
   background: #E5E5E5;
   font-family: 'Roboto', sans-serif;
 }
 *{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   outline: none;
 }
`

const App = () => {
    return (
        <>
        <Global/>
        <Company/>

    </>

    );
};

export default App;
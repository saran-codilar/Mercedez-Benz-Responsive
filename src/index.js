import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';

import Header from './Benz/header';
import Slideshow from './Benz/slideshow';
import Searchbox from './Benz/searchboxcom3';
import Messagecontainer from './Benz/messagecontainer';
import Lablecontainer from './Benz/lablecontainer';
import Pictureheader from './Benz/pictureheader';
// import Picturecontainer from './Benz/picturecontainer';
import Grid from './Benz/picturecontainer';
import Description from './Benz/description';
import Morelist from './Benz/morelist';
import Footer from './Benz/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Slideshow/>
    <Searchbox/>
    <Messagecontainer/>
    <Lablecontainer/>
    <Pictureheader/>
    <Grid/>
    {/* <Picturecontainer/> */}
    <Description/>
    <Morelist/>
    <Footer/>,
   </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

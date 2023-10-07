import React from 'react';
import ReactDOM from 'react-dom';
import dark  from './images/dark.jpg'
import GOT from './images/gameofthrones.jpg'
import blackP from './images/blackpanther.jpg'
import batman from './images/batman.jpg';
import breakbad from './images/breakingbad.jpg';
import stranger from './images/strangerthings.jpg';

import './Cards';
import Card from './Cards';
import './index.css'
import Sdata from'./Sdata';
ReactDOM.render(
  <>
  <h1 className='heading_style'> List  of Top Netflix Movies</h1>
  <Card  
  //using arrray retrieve from Sdata
  imgsrc={Sdata[0].imgsrc} 
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].link}
  />
  <Card 
   imgsrc={GOT}
   title="A Netflix Origianl Series"
   sname="Game Of Thrones"
   link="https://www.primevideo.com/detail/Game-of-Thrones/0H3BV6QDPFLUL8SG29UCSUEFOI"/>
  <Card 
   imgsrc={blackP} 
   title="A Netflix Origianl Series"
   sname="Black Panther"
   link="https://www.hotstar.com/in/movies/black-panther/1660010672"/>
    <Card 
   imgsrc={batman} 
   title="A Netflix Origianl Series"
   sname="Batman"
   link="https://www.netflix.com/title/70021642"/>
    <Card 
   imgsrc={breakbad} 
   title="A Netflix Origianl Series"
   sname="Breaking Bad"
   link="https://www.netflix.com/in/title/70143836"/>
    <Card 
   imgsrc={stranger} 
   title="A Netflix Origianl Series"
   sname="Stranger Things"
   link="https://www.netflix.com/in/title/80057281"/>
  </>
  ,document.getElementById('root')
);
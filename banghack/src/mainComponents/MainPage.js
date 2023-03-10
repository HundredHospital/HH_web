import React from 'react'
import styled from 'styled-components'
import Slider from './atoms/slide/Slider';
import axios from "axios";
import { useEffect, useState } from "react";
import Newslist from './atoms/List/news_list'
import youtube from 'react-youtube';
import YouTube from 'react-youtube';


function MainPage() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get("http://3.34.40.78:8000/news", {
              headers: { "Access-Control-Allow-Origin": "*"},
            });
            setData(response.data);
            console.log(response)
            return response.data;
          };
          getData()
    },[])    

  return (
    <><StyledDiv>
        <StyleUl>
            <StyleP>Hundred Hospital</StyleP>
            <StyledLi><StyleA href='/approSearch'>제품목록</StyleA></StyledLi>
            <StyledLi><StyleA href='/newsSearch'>뉴스</StyleA></StyledLi>
            <StyledLi>영상</StyledLi>
            <StyledLi>약국위치</StyledLi>
        </StyleUl>
    </StyledDiv>
    <StyledDiv2><Slider></Slider></StyledDiv2>
    <StyledDIv3>
        <Newslist data={Data}></Newslist>
        <StyledDIv5></StyledDIv5>
        <StyledDIv4></StyledDIv4>
        {/* <Vedio></Vedio> */}
        <StyledDIv5><YouTube videoId='vedio.BL92R8LgX8ZHvPh5'
          opts={{
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          onEnd={(e)=>{e.target.stopVideo(0);}}></YouTube></StyledDIv5>

    </StyledDIv3>
    </>
  )
}

const StyleA = styled.a`
  color: black;
  fontStyle: none;
  textDecorationLine: none;`;

const StyleP = styled.p`
    text-align: center;
    line-height:70px;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    left: 10%;
`;

const StyledLi = styled.li`
    width: 7%;
    height: 70px;
    line-height:70px;
    text-align: center;
    position: relative;
    right: -63%;
    font-size: 18px;
`;

const StyleUl = styled.ul`
    display: flex;
    width: 100%
`;

const StyledDiv = styled.div`
    width: 100%;
    height: 70px;
    background-color: skyblue;
`;

const StyledDiv2 = styled.div`
    width: 80%;
    height: 300px;
    margin-left: 10%;
    margin-top: 2%;
`;

const StyledDIv3 = styled.div`
width: 80%;
height: 200px;
margin-left: 10%;
margin-top: 2%;
display: flex;
`;

const StyledDIv4 = styled.div`
width: 49%;
height: 250px;
background-color: navy;
`;


const StyledDIv5 = styled.div`
width: 49%;
height: 250px;
background-color: blue;
margin-left: 2%;
`;

// const Vedio = styled.iframe`
// width: 49%;
// height: 250px;
// background-color: blue;
// margin-left: 2%;
// `;


export default MainPage
import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const NewsSearch = () => {
  let [Data, setData] = useState([]);
  let search;
  const onChange = (e) => {
    if(e.key === 'Enter'){
      if(e.target.value.length <= 1){
        alert("검색어를 두글자 이상 입력해주세요")
      }
      search = e.target.value
      console.log(search)
      getData()
    }
  };
  
  const getData = async () => {
    let response = await axios.get("http://3.34.40.78:8000/news", {
      headers: { "Access-Control-Allow-Origin": "*", "value": encodeURI(search) },
    });
    setData(response.data);
    console.log(response)
    return response.data;
    
  };

  const filterTitle = 
    Data.map((news, index)=>{
      return(
        <div key={index} style={styleSpan}>
          <StyleA href={news.link}>
          <span>{news.title}</span><br/>
          <span>{news.summary}</span><br/>
          <span>{news.link}</span><br/>
          <span>{news.date}</span>
          </StyleA>
        </div>
      )
    })

  return (
    <>
    <StyledDiv>
        <StyleUl>
            <StyleP><StyleA href='/'>Hundred Hospital</StyleA></StyleP>
            <StyledLi><a href='/approSearch'>제품목록</a></StyledLi>
            <StyledLi><a href='/newsSearch'>뉴스</a></StyledLi>
            <StyledLi>영상</StyledLi>
            <StyledLi>약국위치</StyledLi>
        </StyleUl>
    </StyledDiv>
      <input className="input" type="text" defaultValue={search} onKeyDown={onChange} />
      <a href="/" style={styleBtn}>약품검색</a>
      <div className="App">
        {filterTitle}
      </div>
    </>
  );
};

const styleSpan = {
  padding: "10px",
  margin: "20px",
  position: "relative",
};

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

const styleBtn = {
  width:"100px",
  height: "100px",
  backgroundColor: "black",
  color: "white",
  textDecorationLine: "none",
  textAlign: "center",
  lineHeight:"100px",
  padding: "10px",
  margin: "20px",
}

export default NewsSearch;

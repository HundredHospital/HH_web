import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const ListView = () => {
  let [Data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    if(e.key === 'Enter'){
      setSearch(e.target.value);
      getData()
    }
  };
  const getData = async () => {
    let response = await axios.get("http://3.34.40.78:8000/search", {
      headers: { "Access-Control-Allow-Origin": "*", "name": encodeURI(search) },
    });

    setData(response.data);
    return response.data;
    
  };
  
  const filterTitle = Data.filter((p) => {
    return p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <>
    <StyledDiv>
        <StyleUl>
            <StyleP><StyleA href='/'>Hundred Hospital</StyleA></StyleP>
            <StyledLi><StyleA href='/approSearch'>제품목록</StyleA></StyledLi>
            <StyledLi><StyleA href='/newsSearch'>뉴스</StyleA></StyledLi>
            <StyledLi>영상</StyledLi>
            <StyledLi>약국위치</StyledLi>
        </StyleUl>
    </StyledDiv>
    <div>
    <h1>약품검색</h1>
      <input className="input" type="text" defaultValue={search} onKeyDown={onChange} />
      <div className="App">
        {filterTitle &&
          filterTitle.map((med, index) => (
            <div key={index} style={styleSpan}>
              <img src={med.img}></img>
              <span>{med.name}</span><br/>
              <span>{med.use}</span><br/>
              <span>{med.amount}</span>
              <hr></hr>
            </div>
          ))}
      </div>
      </div>
    </>
  );
};

const styleSpan = {
  padding: "10px",
  margin: "20px",
  position: "relative",
};

const styleBtn = {
  width:"100px",
  height: "100px",
  backgroundColor: "black",
  color: "white",
  // display: "block",
  textDecorationLine: "none",
  textAlign: "center",
  lineHeight:"100px",
  padding: "10px",
  margin: "20px",
}

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

const StyleA = styled.a`
  color: black;
  fontStyle: none;
  textDecorationLine: none;`;

export default ListView;

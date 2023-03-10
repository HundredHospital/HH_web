import React from 'react'
import styled from 'styled-components'
import axios from "axios";

function Newslist(props) {
    const Data = props.data
    const liList = Data.map((news, index) => {
        if(index < 6){
            return (<li key={index} style={styleLi}>
            <p style={styleSpan}>{news.title}</p><hr></hr>
            </li>)
        }
    })
    return (
        <StyledDIv4>
            <ul style={styleUl}>
            {liList
            }

            </ul>

        </StyledDIv4>
    );
}

const styleLi = {
    height: "30px",
    padding: "10px",
    margin: "10px",
    position: "relative",
  };

const styleSpan = {
    padding: "10px",
    position: "relative",
    fontSize: "18px",
    fontWeight: "bold"
  };

const styleUl = {
    height:"250px"
}

const StyledDIv4 = styled.div`
width: 49%;
height: 250px;  
`;

export default Newslist;
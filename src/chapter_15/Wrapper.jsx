import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em;
    background: red;
`;

const Tittle = styled.h1`
    font-size: 1.5em;
    color: white ;
    text-align: center;
`;
    
    function MainPage(props){
        return (
            <Wrapper>
                <Tittle>
                    안녕 리액트!
                </Tittle>
            </Wrapper>
        )
    }

    // 업뎃 적용전인듯. 인식불가
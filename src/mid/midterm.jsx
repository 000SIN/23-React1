import React, { useState } from 'react';
import styled from 'styled-components';

export default class Eaxmple extends React.Component {
    constructor(props) {
       super(props);
 
       this.state = {
         text: "어떤 과일을 좋아하나요?",
       };
     }
     changeText = () => {
        this.setState({
          text: "어떤 과일을 좋아하나요? 사과",
        });
      };
    changeText = () => {
        this.setState({
          text: "어떤 과일을 좋아하나요? 오렌지",
        });
      };
   changeText = () => {
     this.setState({
       text: "어떤 과일을 좋아하나요? 바나나",
     });
   };
   
   render() {
     return (
       <div>
         <h1>{this.state.text}</h1>
         <button onClick={this.changeText}>사과</button>
         <button onClick={this.changeText}>오렌지</button>
         <button onClick={this.changeText}>바나나</button>

       </div>
     );
   }
 }
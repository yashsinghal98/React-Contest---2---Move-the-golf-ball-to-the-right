import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,//variable needed to be changed
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderChoice.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handlekey=this.handlekey.bind(this);
    };

    //call back function
    buttonClickHandler() {
        this.setState({renderBall:true});
        document.addEventListener("keydown",this.handlekey);
   }
    renderChoice() {
		if(this.state.renderBall){return <div className="ball" style={this.state.ballPosition}></div>}
		 else   return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
    }
    handlekey(event){
        console.log(event.key);
        if(event.key==="ArrowRight")
        {
            this.setState({posi:this.state.posi+5,ballPosition:{left:`${this.state.posi+5}px`}});
        }
    }
    //bind ArrowRight keydown event
    componentDidMount() {
        
        
    }

    render() {
        return (
            <div className="playground">
                {this.renderChoice()}
            </div>
        )
    }
}


export default App;

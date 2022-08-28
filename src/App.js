import React, { Component } from 'react';
import Answers from './Answers'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      answers: [
          "It is certain",
          "It is decidedly so",
          "Without a doubt",
          "Yes - definitely",
          "You may rely on it",
          "As I see it, yes",
          "Most likely",
          "Outlook good",
          "Yes",
          "Signs point to yes",
          "Don't count on it",
          "My reply is no",
          "My sources say no",
          "Outlook not so good",
          "Very doubtful",
          "Reply hazy, try again",
          "Ask again later",
          "Better not tell you now",
          "Cannot predict now",
          "Concentrate and ask again"
      ],
      singleAnswer: ''
    }
  }

  getNewAnswer = () => {
    this.setState({ singleAnswer: this.state.answers[Math.floor(Math.random() * this.state.answers.length)] })
  }

    render() {
      return (
        <div>
          <h1>magic 8 ball</h1>
          <Answers singleAnswer={this.state.singleAnswer} getNewAnswer={this.getNewAnswer}/>
        </div>
      )
    }
  }


export default App;

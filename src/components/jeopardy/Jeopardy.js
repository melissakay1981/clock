import React, { Component } from 'react';
import JeopardyService from "../../services/JeopardyService";
import Submit from "./Submit";
import Stateless from "./Stateless"


class Jeopardy extends Component {

  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        answer: ""
      }
    }
  }
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  handleAnswer = event => {
    console.log(this.state.formData.answer)
    event.preventDefault()
    let score = this.state.score
    if (this.state.data.answer === this.state.formData.answer) {
      this.setState({
        score: score += this.state.data.value
      })
    }
    else {

      this.setState({
        score: score -= this.state.data.value
      })
    }
    this.getNewQuestion()
  }

  handleChange = (event) => {
    let formData = this.state.formData;
    formData[event.target.answer] = event.target.value;
    this.setState({
      formData: {
        answer: event.target.value
      }
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    return (
      <div>
        <Stateless
          question={this.state.data.question}
          value={this.state.data.value}
          category={this.state.data.category}
          score={this.state.data.score}
          answer={this.state.data.answer}

        />
        <Submit handleAnswer={this.handleAnswer} handleChange={this.handleChange} />
      </div>
    );
  }
}
export default Jeopardy;
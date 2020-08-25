import React, { Component } from 'react';
import JeopardyService from "../../services/JeopardyService";
import Submit from "./Submit"


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
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  handleAnswer = event => {
    console.log (this.state.formData.answer)
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
  let category = "loading";
  if (this.state.data.category) {
    category = this.state.data.category.title
  }
  return (
    <div>
      <strong>Question </strong>{this.state.data.question}  <br />
      <strong>Value </strong>{this.state.data.value} <br />
      <strong>Category </strong>{category} <br />
      <strong>Score </strong>{this.state.score} <br />
      <strong>Answer </strong>{this.state.data.answer} <br />
      <Submit handleAnswer={this.handleAnswer} handleChange={this.handleChange} />
    </div>
  );
}
}
export default Jeopardy;
import React from "react"

function Stateless(props) {
    let category = "loading";
    if (props.category) {
        category = props.category.title
    }
    return (<div>
        <strong>Question </strong>{props.question}  <br />
        <strong>Value </strong>{props.value} <br />
        <strong>Category </strong>{category} <br />
        <strong>Score </strong>{props.score} <br />
        <strong>Answer </strong>{props.answer} <br />
    </div>)
}
export default Stateless
import { Component } from "react";

class Great extends Component
{
    render(){
        return(<><div class="card-wrap">
        <div className={`card-header ${this.props.dataClassName}`}>
          <i class="fas fa-code"></i>
        </div>
        <div class="card-content">
          <h1 class="card-title">Title</h1>
          <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button class={`card-btn ${this.props.dataClassName}`}>{this.props.langName}</button>
       </div>
      </div></>);
    }
}
export default Great;
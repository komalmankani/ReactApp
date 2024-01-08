import React from "react";
export const Cards = (props) => <><div class="card-wrap">
<div class={`card-header ${props.dataClassName}`}>
  <i class="fas fa-code"></i>
</div>
<div class="card-content">
  <h1 class="card-title">Title</h1>
  <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <button class={`card-btn ${props.dataClassName}`}>{props.langName}</button>
</div>
</div></>;

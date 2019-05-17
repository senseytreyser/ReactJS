import React, { Component } from "react";

export default class PostItem extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <h3 className="card-header">{this.props.title}</h3>
        <div className="card-body text-secondary">{this.props.body}</div>
      </div>
    );
  }
}

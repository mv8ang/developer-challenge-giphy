import React, { Component, cloneElement } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div className="motherlode">
        <Link to="/">
          <h1>navigation would go here</h1>
        </Link>
        
        {cloneElement(this.props.children, this.props)}
      </div>
    )
  }
};

export default Main;
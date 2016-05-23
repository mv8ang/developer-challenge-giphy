
import React from 'react'

class ClearHistory extends React.Component {

  render() {
    return (
      <span>
        {this.props.display ?
          <button className="button-clear-history" onClick={this.props.resetHistory}>Mild panic button</button>
        : ''}
      </span>
    )
  }
}

export default ClearHistory;

import React from 'react'

class ClearHistory extends React.Component {
    render() {
        return (
            <button className="button-clear-history" onClick={this.props.resetHistory}>Reset history</button>
        )
    }
}

export default ClearHistory;
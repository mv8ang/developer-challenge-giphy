import React from 'react'
import ResultItem from './../ResultItem/ResultItem'

class ResultList extends React.Component {
  render() {
    let items = this.props.items;

    return (
      <div className="new-container">
          <ResultItem result={items} itemType="new-item" />
      </div>
    )
  }
}

class HistoryList extends React.Component {
  render() {
    const mapHistory = this.props.history.map((item, i) => {
      return <ResultItem result={item} key={i} itemType="history-item" />
    });

    return (
      <div className="history-container">
        {mapHistory}
      </div>
    )
  }
}

export {ResultList, HistoryList};
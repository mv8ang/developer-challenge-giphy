import React, { Component } from 'react';

import request from 'superagent';

// import components
import Search from '../Search/Search';
import ResultItem from '../ResultItem/ResultItem';
import { ResultList, HistoryList } from '../Lists/Lists';
import ClearHistory from '../ClearHistory/ClearHistory';

class RandomGif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
      history: [],
      somethingHappened: false
    };
  };

  doSearch = (query) => {
    let url = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query.replace(/\s+/g, "+")}`;
    request.get(url, (err, res) => {
      this.setState({results: res.body.data});
      this.state.history.length > 4 ? this.state.history.shift() : '';
      let tempHistory = [...this.state.history, this.state.results];
      this.setState({history: tempHistory, somethingHappened: true});
    })
  };

  resetHistory = () => {
    this.setState({history: [], somethingHappened: false});
  };

  render() {
    return (
      <div className="container">
        <header>
          <Search doSearch={this.doSearch} somethingHappened={this.state.somethingHappened} />
        </header>

        <main>
          <ResultList items={this.state.results} />
          <HistoryList history={this.state.history} />
          <ClearHistory resetHistory={this.resetHistory} display={this.state.somethingHappened} /> {/* show if somethingHappened = true */}
        </main>
      </div>
    );
  }
}

export default RandomGif;
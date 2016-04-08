import React, { Component } from 'react';
import Search from './components/Search'
import ResultItem from './components/ResultItem'
import {ResultList, HistoryList} from './components/ResultList'
import request from 'superagent'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: '',
            history: []
        };
    };

    doSearch = (query) => {
        let url = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${query.replace(/\s+/g, "+")}`;

        request.get(url, (err, res) => {
                this.setState({results: res.body.data});

                this.state.history.length > 4 ? this.state.history.pop() : '';
                let tempHistory = [...this.state.history, this.state.results];
                this.setState({history: tempHistory});
        })
    };

    resetHistory = () => {
        this.setState({history: []});
    };

    render() {
        return (
            <div>
                <Search doSearch={this.doSearch} resetHistory={this.resetHistory} />
                <ResultItem />
                <ResultList items={this.state.results} />
                <HistoryList history={this.state.history} />
            </div>
        );
    }
}

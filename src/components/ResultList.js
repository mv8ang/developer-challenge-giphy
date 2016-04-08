import React from 'react'
import ResultItem from './ResultItem'

class ResultList extends React.Component {
    render() {
        let items = this.props.items;

        return (
            <ResultItem image={items.image_original_url} />
        )
    }
}

class HistoryList extends React.Component {
    render() {
        let history = this.props.history;
        const mapHistory = this.props.history.map((item, i) => {
            return <ResultItem image={item.image_original_url} key={i} />
        });

        return (
            <div>
                {mapHistory}
            </div>
        )
    }
}

export {ResultList, HistoryList};
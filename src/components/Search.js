import React from 'react';

class Search extends React.Component {

    newSearch = (e) => {
        e.preventDefault();
        let searchTerm = this.refs['searchInput'].value;
        this.props.doSearch(searchTerm);
    };

    render() {

        return (
            <div className="search-form">
                <form onSubmit={this.newSearch}>
                    <input type="text" ref="searchInput" />
                </form>

                <button onClick={this.props.resetHistory}>Reset</button>
            </div>
        )
    }
}

export default Search;
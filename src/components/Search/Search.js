import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Search"
    }
  }

  newSearch = (e) => {
    e.preventDefault();
    let searchTerm = this.refs['searchInput'].value;
    this.props.doSearch(searchTerm);
    this.setState({buttonText:"Haha, next one"})
  };

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.newSearch}>
          <input type="text" ref="searchInput" placeholder="write some words here" />
          <button className="button-search">
            {this.state.buttonText}
          </button>
        </form>
      </div>
    )
  }
}

export default Search;
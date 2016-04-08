import React from 'react';

class ResultItem extends React.Component {
    render() {
        return (
            <div className={"result-item " + this.props.itemType}>
                <img src={this.props.url} alt=""/>

                {/* only show the info box for the current items */}
                {this.props.url && this.props.itemType=="new-item" ?
                    <div className="info-box">
                        <p>{this.props.url}</p>
                    </div>
                :''}
            </div>
        )
    }
}

ResultItem.propTypes = {
    itemType: React.PropTypes.string
}

ResultItem.defaultProps = {
    itemType: "new-search"
}

export default ResultItem;
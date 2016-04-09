import React from 'react';

class ResultItem extends React.Component {
    render() {
        let result = this.props.result;

        return (
            <div className={"result-item " + this.props.itemType}>
                <a href={result.url}>
                    <img src={result.image_original_url} alt=""/>
                </a>

                {/* only show the info box for the current items */}
                {this.props.result.url && this.props.itemType=="new-item" ?
                    <div className="info-box">
                        <p>{this.props.result.url}</p>
                    </div>
                :''}
            </div>
        )
    }
}

ResultItem.propTypes = {
    itemType: React.PropTypes.string
};

ResultItem.defaultProps = {
    itemType: "new-search",
};

export default ResultItem;
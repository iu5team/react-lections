import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ListItem.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onRepoClick(this.props.repo);
    }

    render() {
        const { repo } = this.props;

        return (
            <a
                href={ repo.html_url }
                target="_blank"
                onClick={ this.onClick }
                className="list-item"
            >
                { repo.name }
            </a>
        );
    }
}

ListItem.propTypes = {
    repo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
    }).isRequired,

    onRepoClick: PropTypes.func.isRequired,
};

export default ListItem;

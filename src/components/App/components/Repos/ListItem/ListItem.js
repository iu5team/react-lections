import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ListItem.css';

class ListItem extends Component {
    render() {
        const { repo } = this.props;

        return (
            <Link
                to={ `/list/${ repo.id }` }
                className="list-item"
            >
                { repo.name }
            </Link>
        );
    }
}

ListItem.propTypes = {
    repo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
    }).isRequired,
};

export default ListItem;

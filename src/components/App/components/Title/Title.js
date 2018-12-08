import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const Title = (props) => {
    const className = `title title_${ props.color }`;

    return (
        <div className={ className }>
            { props.children }
        </div>
    )
};

Title.propTypes = {
    color: PropTypes.oneOf(['blue', 'red']) // Цвет заголовка
};

Title.defaultProps = {
    color: 'blue'
};

export default Title;

import React from 'react';

import './Title.css';

export default (props) => {
    const className = `title title_${ props.color }`;

    return (
        <div className={ className }>
            Наше первое приложение
        </div>
    )
}

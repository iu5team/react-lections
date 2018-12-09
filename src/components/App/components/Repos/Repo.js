import React from 'react';

class Repo extends React.Component {
    render() {
        const {
            name,
            clone_url: cloneUrl,
            forks
        } = this.props.repo;

        return (
            <div>
                <div>Имя: { name }</div>
                <div>git clone: { cloneUrl }</div>
                <div>Число форков: { forks }</div>
            </div>
        )
    }
}

export default Repo;

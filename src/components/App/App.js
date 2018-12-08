import React from 'react';
import { hot } from 'react-hot-loader';
import Title from './components/Title/Title';

import './styles.css';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'blue'
        };

        this.onChangeColor = this.onChangeColor.bind(this);
    }

    onChangeColor() {
        this.setState({
            color: this.state.color === 'red' ? 'blue' : 'red'
        });
    }

    render() {
        return (
            <div>
                <Title color={ this.state.color } />
                <button onClick={ this.onChangeColor }>Поменять цвет</button>
            </div>
        )
    }
}

export default hot(module)(App);

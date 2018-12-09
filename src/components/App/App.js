import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Title from './components/Title/Title';
import About from './components/About';
import ReposList from './components/Repos/ReposList';

import './styles.css';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Список репозиториев',
            color: 'blue',
        };

        this.onChangeColor = this.onChangeColor.bind(this);
        this.onRepoClick = this.onRepoClick.bind(this);
    }

    onChangeColor() {
        this.setState({
            color: this.state.color === 'red' ? 'blue' : 'red'
        });
    }

    onRepoClick(repo) {
        this.setState({
            title: repo.name
        })
    }

    render() {
        const {
            color,
            title,
        } = this.state;

        return (
            <div>
                <Title color={ color }>
                    { title }
                </Title>

                <Link to="/list" className="link">
                    Перейти к списку репозиториев
                </Link>
                <Link to="/about" className="link">
                    О проекте
                </Link>

                <Switch>
                    <Route path="/list" component={ ReposList } />
                    <Route path="/about" component={ About } />
                </Switch>

                <button onClick={ this.onChangeColor }>Поменять цвет</button>
            </div>
        )
    }
}

export default hot(module)(App);

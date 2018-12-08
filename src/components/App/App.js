import React from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import Title from './components/Title/Title';
import ListItem from './components/ListItem';

import './styles.css';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Список репозиториев',
            color: 'blue',
            repos: [],
            isLoading: false,
        };

        this.onChangeColor = this.onChangeColor.bind(this);
        this.onRepoClick = this.onRepoClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        axios.get('https://api.github.com/users/iu5team/repos')
            .then(response => ({
                repos: response.data,
                isLoading: false
            }))
            .catch(error => ({ isLoading: false }))
            .then(data => this.setState(data));
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
            repos,
            isLoading
        } = this.state;

        return (
            <div>
                <Title color={ color }>
                    { title }
                </Title>

                { isLoading && <h4>Загрузка...</h4> }

                { repos.map((repo) => (
                    <ListItem
                        key={ repo.id }
                        repo={ repo }
                        onRepoClick={ this.onRepoClick }
                    />
                )) }

                <button onClick={ this.onChangeColor }>Поменять цвет</button>
            </div>
        )
    }
}

export default hot(module)(App);

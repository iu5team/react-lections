import React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import Title from './components/Title/Title';
import About from './components/About';
import ReposList from './components/Repos/ReposList';
import { changeTitle } from '../../store/ui';

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

    componentDidMount() {
        this.time = 0;

        setInterval(() => {
            this.time += 1;

            this.props.changeTitle(
                `Обновление заголовка ${ this.time }`
            )
        }, 1000);
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
        } = this.state;

        return (
            <div>
                <Title color={ color }>
                    { this.props.title }
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

function mapStateToProps(state) {
    return {
        title: state.ui.title
    }
}

const mapDispatchToProps = {
    changeTitle
};

export default hot(module)(withRouter(
    connect(mapStateToProps, mapDispatchToProps)(App))
);


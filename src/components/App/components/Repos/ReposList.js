import React  from 'react';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';
import ListItem from './ListItem';
import Repo from './Repo';

class ReposList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: [],
            isLoading: false
        }
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

    getRepoById(id) {
        return this.state.repos.find((repo) => Number(id) === repo.id);
    }

    render() {
        const { repos, isLoading } = this.state;

        return (
            <div>
                { isLoading && <h4>Загрузка...</h4> }
                <Switch>
                    <Route
                        exact
                        path="/list"
                        render={ () => repos.map((repo) => (
                            <ListItem
                                key={ repo.id }
                                repo={ repo }
                            />
                        )) }
                    />
                    <Route
                        path="/list/:id"
                        render={ (props) => <Repo repo={ this.getRepoById(props.match.params.id) } /> }
                    />
                </Switch>
            </div>
        )
    }
}

export default withRouter(ReposList);

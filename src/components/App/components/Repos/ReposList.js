import React  from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import ListItem from './ListItem';
import Repo from './Repo';
import { loadRepos } from '../../../../store/repos';

class ReposList extends React.Component {
    componentDidMount() {
        const {
            reposList,
            isReposLoading
        } = this.props;

        if (reposList.length === 0 && !isReposLoading) {
            this.props.loadRepos();
        }
    }

    render() {
        const { reposList, isReposLoading } = this.props;

        return (
            <div>
                { isReposLoading && <h4>Загрузка...</h4> }
                <Switch>
                    <Route
                        exact
                        path="/list"
                        render={ () => reposList.map((repo) => (
                            <ListItem
                                key={ repo.id }
                                repo={ repo }
                            />
                        )) }
                    />
                    <Route
                        path="/list/:id"
                        component={ Repo }
                    />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    reposList: state.repos.list,
    isReposLoading: state.repos.isLoading,
});

const mapDispatchToProps = {
    loadRepos
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ReposList)
);

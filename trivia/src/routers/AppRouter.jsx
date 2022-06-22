import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom';
import AuthRouter from "./AuthRouter";
import TriviaPage from "../components/trivia/pages/TriviaPage";
import GamePage from "../components/trivia/pages/GamePage";
import ScorePage from "../components/trivia/pages/ScorePage";


const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route
                            path="/auth"
                            component={AuthRouter}
                        ></Route>
                        <Route
                            exact
                            path="/"
                            component={TriviaPage}
                        ></Route>
                        <Route
                            exact
                            path="/gamePage"
                            component={GamePage}
                        ></Route>
                        <Route
                            exact
                            path="/scorePage"
                            component={ScorePage}
                        ></Route>

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter

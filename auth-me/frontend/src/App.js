import React, { useState, useEffect, useSelector } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupFormPage/SignupForm";
import LoginForm from "./components/LoginFormModal/LoginForm";
import PostForm from "./components/PostFormModal/PostForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PostList from "./components/PostList";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);
    
    const sessionUser = useSelector(state => state.session.user);
    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    <Route exact path="/">
                        <PostList user={sessionUser}/>
                    </Route>
                    <Route path="/signup">
                        <SignupForm user={sessionUser}/>
                    </Route>
                    <Route path="/login">
                        <LoginForm user={sessionUser}/>
                    </Route>
                    <Route path="/posts/new">
                        <PostForm user={sessionUser}/>
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupFormPage/SignupForm";
import LoginForm from "./components/LoginFormModal/LoginForm";
import PostForm from "./components/PostFormModal/PostForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PostList from "./components/PostList";
import SinglePost from "./components/SinglePost";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);
    
    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    <Route exact path="/">
                        <PostList />
                    </Route>
                    <Route exact path="/posts">
                        <PostList />
                    </Route>
                    <Route exact path="/signup">
                        <SignupForm />
                    </Route>
                    <Route exact path="/login">
                        <LoginForm />
                    </Route>
                    <Route exact path="/posts/new">
                        <PostForm />
                    </Route>
                    <Route exact path="/posts/:id">
                        <SinglePost />
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
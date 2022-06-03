import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/SignupFormPage/SignupForm";
import LoginForm from "./components/LoginFormModal/LoginForm";
import PostForm from "./components/PostFormModal/PostForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

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
                    <Route path="/signup">
                        <SignupForm />
                    </Route>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/posts/new">
                        <PostForm />
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
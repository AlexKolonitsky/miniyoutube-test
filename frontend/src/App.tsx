import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import UploadContainer from "./containers/UploadContainer";
import Header from "./components/Header";
import { Box } from "@material-ui/core";

const App = () => {

    const AppRoute = () => {
        return <Switch>
            <Route exact path={"/"} component={HomeContainer}/>
            <Route exact path={"/upload"} component={UploadContainer}/>
        </Switch>
    }

    return (
        <HashRouter>
            <Header/>
            <Box ml={1} p={5} css={{minHeight: '100vh'}}>
                <Switch>
                    <AppRoute/>
                </Switch>
            </Box>
        </HashRouter>

    );


}

export default App;



import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import PublishIcon from "@material-ui/icons/Publish";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box width="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" >
                    <Box flexGrow={1}>
                        <Button color="inherit" size="large" component={NavLink} to="/">
                            Mini Youtube
                        </Button>
                    </Box>
                    <Box width="40%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Button color="inherit"
                                startIcon={<FiberManualRecordIcon />}
                        >Stream</Button>
                        <Button color="inherit"
                                startIcon={<LiveTvIcon />}
                                component={NavLink} to="/">All videos</Button>
                        <Button color="inherit"
                                component={NavLink}
                                to="/upload"
                                startIcon={<PublishIcon />}
                        >Upload video</Button>
                    </Box>
                </Box>


            </Toolbar>
        </AppBar>
    );
};

export default Header;

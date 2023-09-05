import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography>
                    MUI EXAMPLE
                </Typography>
                <IconButton>
                    <ShoppingBasket/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
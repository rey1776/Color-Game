import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Icon, Stack, Button} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import PaletteIcon from '@mui/icons-material/Palette';

function MuiNavbar() {
  const year = new Date().getFullYear();
  return (
    <>
        <AppBar position="static" >
            <Toolbar >
                <IconButton >
                    <LanguageIcon size='small' edge='start' color='inherit' aria-label='logo'/>
                </IconButton>
                <Typography variant="h6" component='div' sx={{flexGrow: 1}}>Color Language Game</Typography>
                <Stack direction='row' spacing={2} >
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact Us</Button>
                    <Button color="inherit">Careers</Button>
                    <Button color="inherit">Sign Up</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    </>
  );
}

export default MuiNavbar;

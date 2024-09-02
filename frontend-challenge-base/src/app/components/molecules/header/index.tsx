'use client';
import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { SessionContext } from '@/app/shared/stateManagement/context/SessionContext';

const Header = () => {
    const { handleOpenForm } = useContext(SessionContext);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                background: '#000000',
                pl: 5,
                pr: 5,
                height: '69px !important',
            }}
        >
            <Container>
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Image
                            src={'/images/logo.png'}
                            width={164}
                            height={42}
                            alt="logo"
                        />
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', sm: 'none' },
                            ml: 5,
                            gap: 3,
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', sm: 'none' } }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}>
                                    Popular
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}>
                                    Favorites
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <Image
                            src={'/images/logo.png'}
                            width={164}
                            height={42}
                            alt="logo"
                        />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'flex' },
                            ml: 5,
                            gap: 5,
                        }}
                    >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Popular
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Favorites
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="User">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <AccountCircleIcon
                                    sx={{ color: '#FFFFFF' }}
                                    fontSize="large"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem
                                onClick={() => {
                                    handleOpenForm();
                                    handleCloseUserMenu();
                                }}
                            >
                                <Typography sx={{ textAlign: 'center' }}>
                                    LogIn
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;

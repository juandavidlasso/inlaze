'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Button, Modal as CustomModal, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface Props {
    children: JSX.Element;
    title: string;
    subtitle: string;
    pathImage: string;
    handleLogin: () => void;
    handleSignUp: () => void;
    isLogin: boolean;
    handleClose: () => void;
    isOpen: boolean;
}

const Modal: React.FC<Props> = ({
    children,
    title,
    subtitle,
    pathImage,
    handleLogin,
    handleSignUp,
    isLogin,
    handleClose,
    isOpen,
}) => {
    return (
        <CustomModal open={isOpen} onClose={handleClose} sx={{ zIndex: 1300 }}>
            <Box
                sx={{
                    position: 'fixed',
                    top: '10%',
                    left: '10%',
                    right: 0,
                    bottom: 0,
                    background: 'rgba(255, 255, 255, 0.1)', // Fondo semi-transparente
                    backdropFilter: 'blur(10px)', // Difumina el fondo
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80%',
                    height: '85%',
                    borderRadius: '16px',
                }}
            >
                <Box
                    sx={{
                        width: '98%',
                        padding: '0px',
                        borderRadius: '8px',
                        display: { xs: 'block', sm: 'flex' },
                        justifyContent: {
                            xs: 'center',
                            sm: 'space-between',
                        },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        height: '97%',
                        overflowY: { xs: 'auto', sm: 'hidden' },
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            width: { xs: '100%', sm: '50%' },
                            height: { xs: 'fit-content', sm: '100%' },
                            textAlign: 'center',
                            display: { xs: 'block', sm: 'grid' },
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            onClick={handleClose}
                            sx={{
                                color: '#FFFFFF',
                                textTransform: 'capitalize',
                                position: { xs: 'initial', sm: 'absolute' },
                                left: 20,
                                top: 20,
                            }}
                        >
                            <ArrowBackIosIcon />
                            <Typography>Back</Typography>
                        </Button>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                background: '#262626',
                                width: 'fit-content',
                                borderRadius: '10px',
                                margin: '0 auto',
                                mt: { xs: 1, sm: 8 },
                            }}
                        >
                            <Button
                                onClick={handleSignUp}
                                sx={{
                                    textTransform: 'capitalize',
                                    background: isLogin ? '#262626' : '#F0B90B',
                                    color: '#F6F6F6',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    lineHeight: '14px',
                                    borderRadius: '10px',
                                    p: '16px 34px 16px 34px',
                                }}
                            >
                                Sign up
                            </Button>
                            <Button
                                onClick={handleLogin}
                                sx={{
                                    textTransform: 'capitalize',
                                    background: isLogin ? '#F0B90B' : '#262626',
                                    color: '#F6F6F6',
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    lineHeight: '14px',
                                    borderRadius: '10px',
                                    p: '16px 34px 16px 34px',
                                }}
                            >
                                Log in
                            </Button>
                        </Box>

                        {children}

                        <Typography
                            variant="h6"
                            sx={{
                                color: '#FFFFFF',
                                fontSize: '12px',
                                fontWeight: 400,
                                lineHeight: '18px',
                                mt: { xs: 2, sm: 5 },
                                textAlign: 'center',
                            }}
                        >
                            For any questions, reach out to
                            support@Quickbetdmovies.com
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            flexDirection: 'column',
                            width: { xs: '100%', sm: '50%' },
                            background: '#1C1C1C',
                            borderTopRightRadius: '16px',
                            borderBottomRightRadius: '16px',
                            textAlign: 'center',
                            height: { xs: '60%', sm: '100%' },
                            display: { xs: 'block', sm: 'flex' },
                            alignItems: 'center',
                            justifyContent: {
                                xs: 'flex-start',
                                sm: 'space-between',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: '30%',
                                display: 'grid',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: { xs: '20px', sm: '35px' },
                                    fontWeight: 700,
                                    lineHeight: '39px',
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: { xs: '14px', sm: '20px' },
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                }}
                            >
                                {subtitle}
                            </Typography>
                        </Box>
                        <Box sx={{ height: '70%' }}>
                            <Image
                                src={pathImage}
                                width={200}
                                height={200}
                                alt="signUp"
                                style={{ height: '100%', width: '100%' }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </CustomModal>
    );
};

export default Modal;

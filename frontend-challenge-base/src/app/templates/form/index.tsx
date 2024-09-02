'use client';
import Modal from '@/app/components/organims/modal';
import { SessionContext } from '@/app/shared/stateManagement/context/SessionContext';
import { Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';

interface Props {}

const Form: React.FC<Props> = ({}) => {
    const { isLogin, openForm, handleLogin, handleSignUp, handleClose } =
        useContext(SessionContext);
    return (
        <Modal
            title={
                isLogin
                    ? 'Welcome back to Quickbet Movies!'
                    : 'Welcome to Quickbet Movies!'
            }
            subtitle={
                isLogin
                    ? '🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!'
                    : '🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!'
            }
            pathImage={isLogin ? '/images/logIn.png' : '/images/signUp.png'}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            isLogin={isLogin}
            handleClose={handleClose}
            isOpen={openForm}
        >
            <>
                {isLogin ? (
                    <>
                        <Typography
                            sx={{
                                color: '#FFFFFF',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '20px',
                                mt: 2,
                            }}
                        >
                            We love having you back
                        </Typography>

                        <TextField
                            label="Email"
                            variant="filled"
                            sx={{
                                mb: 2,
                                mt: 2,
                                '& .MuiInputBase-root': {
                                    background: '#FFFFFF',
                                },
                            }}
                        />

                        <TextField
                            label="Password"
                            variant="filled"
                            sx={{
                                '& .MuiInputBase-root': {
                                    background: '#FFFFFF',
                                },
                            }}
                        />
                        <Button
                            sx={{
                                background: '#F0B90B',
                                width: { xs: '90%', sm: '424px' },
                                p: '16px',
                                borderRadius: '4px',
                                color: '#343434',
                                fontSize: '14px',
                                fontWeight: 600,
                                lineHeight: '14px',
                                mt: 5,
                            }}
                        >
                            Continue
                        </Button>
                    </>
                ) : (
                    <Button
                        sx={{
                            background: '#F0B90B',
                            width: { xs: '90%', sm: '424px' },
                            p: '16px',
                            borderRadius: '4px',
                            color: '#343434',
                            fontSize: '14px',
                            fontWeight: 600,
                            lineHeight: '14px',
                            mt: { xs: 2, sm: 5 },
                        }}
                    >
                        Register with your Email
                    </Button>
                )}
            </>
        </Modal>
    );
};

export default Form;

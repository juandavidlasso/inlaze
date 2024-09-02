'use client';
import React, { createContext, useState } from 'react';

interface SessionContextState {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    handleLogin: () => void;
    handleSignUp: () => void;
    openForm: boolean;
    setIsOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
    handleClose: () => void;
    handleOpenForm: () => void;
}

export const SessionContext = createContext<SessionContextState>(
    {} as SessionContextState,
);

export const SessionProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [openForm, setIsOpenForm] = useState<boolean>(false);

    const handleLogin = () => setIsLogin(true);
    const handleSignUp = () => setIsLogin(false);
    const handleClose = () => setIsOpenForm(false);
    const handleOpenForm = () => setIsOpenForm(true);

    return (
        <SessionContext.Provider
            value={{
                isLogin,
                openForm,
                setIsLogin,
                handleLogin,
                handleSignUp,
                setIsOpenForm,
                handleClose,
                handleOpenForm,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
};

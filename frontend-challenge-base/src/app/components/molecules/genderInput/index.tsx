'use client';
import React from 'react';
import { Box, FormControl, Select, Typography } from '@mui/material';

const movieGenres = [
    'Acción',
    'Aventura',
    'Comedia',
    'Drama',
    'Ciencia Ficción',
    'Fantasía',
    'Horror',
    'Misterio',
    'Romántico',
    'Thriller',
    'Animación',
    'Documental',
    'Musical',
    'Biografía',
    'Crimen',
    'Historia',
    'Guerra',
    'Western',
    'Suspense',
    'Deportes',
    'Policiaca',
    'Cine Independiente',
    'Cine Familiar',
    'Cine Experimental',
    'Cine de Culto',
    'Cine Clásico',
    'Cine Noir',
];

interface Props {}

const GenderInput: React.FC<Props> = ({}) => {
    return (
        <Box sx={{ p: 2, mt: 1 }}>
            <Typography
                sx={{
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '22px',
                    mb: 2,
                }}
            >
                Genres
            </Typography>
            <FormControl fullWidth>
                <Select
                    value={'juan'}
                    // disabled
                    renderValue={(value) => (
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#FFFFFF',
                            }}
                        >
                            {value}
                        </Typography>
                    )}
                    sx={{
                        background: '#1C1C1C',
                        '& input': {
                            color: '#FFFFFF',
                        },
                        '& svg': {
                            color: '#FFFFFF !important',
                        },
                    }}
                />
            </FormControl>

            <Box
                sx={{
                    background: '#1C1C1C',
                    height: '350px',
                    mt: 2,
                    overflowY: 'scroll',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#FFFFFF #000000',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#FFFFFF',
                        borderRadius: '50%',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#000000',
                    },
                }}
            >
                {movieGenres.map((genre) => (
                    <Box
                        key={genre}
                        sx={{
                            background: '#1C1C1C',
                            color: '#FFFFFF',
                            p: 1,
                            '&:hover': {
                                background: '#454545',
                            },
                        }}
                    >
                        {genre}
                    </Box>
                ))}
                hola
            </Box>
        </Box>
    );
};

export default GenderInput;

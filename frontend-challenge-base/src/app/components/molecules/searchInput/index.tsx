import React from 'react';
import {
    Box,
    FilledInput,
    FormControl,
    InputAdornment,
    InputLabel,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {}

const SearchInput: React.FC<Props> = ({}) => {
    return (
        <Box sx={{ p: 2, mt: 3 }}>
            <Typography
                sx={{
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '22px',
                    mb: 2,
                }}
            >
                Search
            </Typography>
            <FormControl sx={{ m: 1 }} variant="filled">
                <InputLabel
                    htmlFor="filled-adornment-password"
                    sx={{ color: '#F6F6F6' }}
                >
                    Keywords
                </InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon sx={{ color: '#F6F6F6' }} />
                        </InputAdornment>
                    }
                    sx={{
                        background: '#1C1C1C',
                        '& input': {
                            color: '#FFFFFF',
                        },
                    }}
                />
            </FormControl>
        </Box>
    );
};

export default SearchInput;

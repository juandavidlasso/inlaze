import { Box } from "@mui/material";
import React from "react";
import SearchInput from "../searchInput";
import GenderInput from "../genderInput";

interface Props {}

const PanelFilter: React.FC<Props> = ({}) => {
    return (
        <Box
            sx={{
                width: { xs: "100%", sm: "20%" },
                background: "#262626",
            }}>
            <SearchInput />

            <GenderInput />
        </Box>
    );
};

export default PanelFilter;

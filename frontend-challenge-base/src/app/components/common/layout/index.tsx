import React from "react";
import { Box } from "@mui/material";
import Header from "../../molecules/header";
import Panel from "../panel";
import PanelFilter from "../../molecules/panelFilter";

interface Props {
    children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box width={"100%"}>
            <Header />

            <Panel />

            <Box
                sx={{
                    width: "100%",
                    height: { xs: "fit-content" },
                    display: { xs: "block", sm: "flex" },
                }}>
                <PanelFilter />

                <Box
                    sx={{
                        background: "#454545",
                        width: { xs: "100%" },
                        height: "100%",
                    }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;

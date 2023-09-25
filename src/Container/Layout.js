import Header from "../Commonents/Header/Menu"

import { Outlet } from "react-router-dom"
import { Stack } from "@mui/material"

const Layout = () => {
    return(
        <Stack>
            <Header />
            <Stack mt="44px">
                <Outlet />
            </Stack>
        </Stack>

    )
}


export default Layout
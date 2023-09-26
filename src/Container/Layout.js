import Header from "../Commonents/Header/Menu"

import { Outlet } from "react-router-dom"
import { Stack } from "@mui/material"
import Footer from "../Commonents/Footer/Footer"

const Layout = () => {
    return(
        <Stack>
            <Header />
            <Stack mt="44px">
                <Outlet />
            </Stack>
            <Footer/>
        </Stack>

    )
}


export default Layout
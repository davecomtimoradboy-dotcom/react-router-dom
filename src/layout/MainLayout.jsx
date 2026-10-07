import { Outlet } from "react-router-dom";
import Navigation from "../component/Navigation";

function MainLayout(){
    return(
        <>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
export default MainLayout
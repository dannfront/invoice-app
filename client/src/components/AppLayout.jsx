import { Outlet} from "react-router-dom"
import HeaderLayout from "./HeaderLayout";


function AppLayout() {

    return (
        <div className=" transition-all min-h-screen lg:grid lg:grid-cols-[80px_1fr]">

            <HeaderLayout/>

            <main className="w-[90%] max-w-[120rem] mx-auto lg:w-[80%]">
                <Outlet />
            </main>


        </div>
    );
}

export default AppLayout

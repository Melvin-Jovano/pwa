import { useContext } from "react";
import AppContext from "../common/context/AppContext";

function BottomNavigation() {
    const { showBottomNavbar } = useContext(AppContext);

    return (
        <>  
            {
                showBottomNavbar &&
                <div style={{width: "95%"}} className="fixed z-50 h-16 -translate-x-1/2 shadow-lg rounded-full bottom-4 left-1/2 bg-green-500">
                    <div className="grid h-full grid-cols-4 mx-auto">
                        <a href="/" className="inline-flex flex-col items-center justify-center px-5 group">
                            <i className="fa-solid text-white text-lg fa-house"></i>
                        </a>
                        <a href="/event/create/first" className="inline-flex flex-col items-center justify-center px-5 group">
                            <i className="fa-solid text-white text-lg fa-calendar-days"></i>
                        </a>
                        <a href="" className="inline-flex flex-col items-center justify-center px-5 group">
                            <i className="fa-solid text-lg fa-bookmark text-white"></i>
                        </a>
                        <a href="/profile" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full group">
                            <i className="fa-solid fa-user text-white text-lg"></i>
                        </a>
                    </div>
                </div>
            }
        </>
    );
}

export default BottomNavigation;
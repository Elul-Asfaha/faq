import Nav from "./components/Nav";
import BottomNav from "./components/bottomNav";
import Hero from "./components/hero";
import SideNav from "./components/sideNav";
import { useState } from "react";
const App = () => {
    const [sideNavToggle, setSideNavToggle] = useState(false);
    const handleToggle = () => {
        setSideNavToggle(!sideNavToggle);
    };
    return (
        <div className='overflow-x-hidden h-screen overflow-y-scroll'>
            <Nav sideNavToggler={handleToggle} />
            <Hero />
            <BottomNav />
            <SideNav
                sideNavToggler={handleToggle}
                sideNavToggled={sideNavToggle}
            />
        </div>
    );
};

export default App;

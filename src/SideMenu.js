import { Children } from "react";
import "./SideMenu.css";

export default function SideMenu({ children }) {
    return (
        <div className={"side-menu"}> 
            {children}
        </div>
    );
}










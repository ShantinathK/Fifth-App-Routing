import classNames from "classnames";
import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({to, children, className, activeClassName}){

    const { navigate, currentPath } = useContext(NavigationContext);
    
    const classes = classNames("text-blue-500",
                                className, 
                                currentPath === to && activeClassName
                               )
    
    const handleClick = (event)=>{
        console.log(event);
        if(event.metaKey || event.crtlKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    }
        return(
            <div>
                <button className={classes} href={to} onClick={handleClick}>{children}</button>
            </div>
        )
}

export default Link;
import { createContext } from "react";
import { useState, useEffect } from "react";


const NavigationContext = createContext();

function NavigationProvider({children}){
    
    const[currentPath, setCurrentPath] = useState(window.location.pathname);
    // popstate
    useEffect(()=>{
        const handler = ()=>{
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler)
        //useEffext cleanup
        return()=>
        {
            window.removeEventListener('popstate', handler)
        };
    },[]);
    // pushState
    const navigate = (to)=>{
        window.history.pushState({}, '', to);
        setCurrentPath(to)
    };

    return <NavigationContext.Provider value={{currentPath,navigate}}>
        {/* {currentPath} */}
        {children}
    </NavigationContext.Provider>

}

export default NavigationContext;
export { NavigationProvider };
import Link from "./link";


function SideBar(){

    const links = [
        { label: "accordion", path: './accordion'},
        { label: "dropdown", path: './dropdown'},
        { label: "button", path: './button'},
        { label: "modal", path: './modal'},
        { label: "home", path: '/'}
    ]
    
    const rendered = links.map((link)=>{

            return <Link key={link.label} 
                         to={link.path} 
                         className="mb-3"
                         activeClassName="font-bold border-l-4 border-blue-500 pl-2" 
                    >
                        {link.label}
                    </Link>

    });
    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col ">{rendered}</div>
    )

}

export default SideBar;
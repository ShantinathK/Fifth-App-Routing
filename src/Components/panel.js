import classNames from "classnames";


function panel({children, className, ...rest})
{

    const finalClassname= classNames('border rounded p-3 shadow bg-white w-full', className);
    return <div {...rest} className={finalClassname}>{children}</div>

}

export default panel;
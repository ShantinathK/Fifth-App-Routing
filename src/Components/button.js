// import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    warning,
    success,
    danger,
    outline,
    rounded,
    ...rest //gets all the props to handle event
}){
    // Button.propTypes = {
    //     CheckVariationValue: (primary, secondary, warning, success) => {
    //         const count = Number(!!primary)+
    //                       Number(!!secondary)+
    //                       Number(!!warning)+
    //                       Number(!!success)
            
    //         if (count > 1){
    //             return new Error("One any of Props are allowed");
    //         }
    //     }
    // }
        const classes = twMerge(
            className('flex items-center gap-1 px-1 py-1.5 border',{
            'border-blue-500 bg-blue-500 text-white': primary,
            'border-gray-900 bg-gray-900 text-white': secondary,
            'border-yellow-500 bg-yellow-500 text-white': warning,
            'border-green-500 bg-green-500 text-white': success,
            'border-red-500 bg-red-500 text-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-yellow-500': outline && warning,
            'text-green-500': outline && success,
            'text-red-500': outline && danger,
        }))
    return (
    <button {...rest} className={classes}>{children}</button>
    );
}
export default Button;

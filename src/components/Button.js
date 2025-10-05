import React from 'react';
import '../sheet-style/button.css';
/**
 * A functional component that renders a button element with customizable text, styles, and click behavior.
 *
 * @param {Object} props The properties passed to the Button component.
 * @param {string} props.text The text displayed inside the button.
 * @param {boolean} props.Click Determines the button's styling based on its state.
 * @param {function} props.manageClick The function to handle button click events.
 * @return {JSX.Element} The JSX representation of a button.
 */
function Button({text, Click,manageClick}){
    return(
        <button
        className={ Click ? 'button-click' : 'button-reset' }
        onClick={manageClick}>
            {text}
        </button>
    )
}
export default Button;
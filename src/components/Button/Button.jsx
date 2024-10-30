import getButtonStyling from "./getButtonStyling";

function Button({ text, onClickHandler, styleType = "primary", type="button" ,styleProp,classname}) {

    return (
        <button
            onClick={onClickHandler}
            type={type}
            className={`${classname}?${classname}:{px-4 py-2 mx-2 my-2 ${getButtonStyling(styleType)} text-white rounded-md}`}
            style={styleProp}
        >
            {text}
        </button>
    );
}

export default Button;
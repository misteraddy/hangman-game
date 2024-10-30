import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");
    const [desc,setDesc] = useState("");

    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted", value);
        if(value && desc) {
            // if we have something in value then we want to go to the play page
            navigate(`/play`, { state: { wordSelected: value , wordDescription: desc} });
        }
    }

    function handleTextInputChange(event) {
        console.log("Text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleDescInputChange(event){
        console.log("Desc input changed");
        console.log(event.target.value);
        setDesc(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show/Hide button clicked");
        if (inputType === "password") {
            setInputType("text")
        } else {
            setInputType("password");
        }
        console.log(inputType);
        
    }

    return (
        <>
        <div>
        <TextInputForm 
                inputType={inputType}
                handleFormSubmit={handleFormSubmit} 
                handleTextInputChange={handleTextInputChange} 
                handleShowHideClick={handleShowHideClick}
                handleDescInputChange ={handleDescInputChange}
            />
        </div>
           
        </>
        
    );
}


export default TextInputFormContainer;
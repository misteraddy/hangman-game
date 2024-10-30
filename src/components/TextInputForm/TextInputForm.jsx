import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick,handleDescInputChange }) {
   
    return (
        <form onSubmit={handleFormSubmit} className="formClass">
            <div>
                <TextInput 
                    type={inputType}
                    label="Enter a word or a phrase"
                    placeholder="Enter a word or phrase here ..."
                    onChangeHandler={handleTextInputChange}
                />
                <TextInput 
                    type={inputType}
                    label="Enter the Description for the Word"
                    placeholder="Enter a Description"
                    onChangeHandler={handleDescInputChange}
                />
            </div>

            <div style={{display:'flex'}}>
            <div>
                <Button
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                    classname="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                />
            </div>

            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                    classname="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                />
            </div>
            </div>

            
        </form>
    );
}

export default TextInputForm;
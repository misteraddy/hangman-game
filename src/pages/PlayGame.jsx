import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import MyModal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

function PlayGame({guessedLetters,handleHintClick,step,handleLetterClick,hintText,isClicked,originalWord,wordDescription}) {

    return (
        <>
        <div className="playGameOuter">
    
        <div className="playGameLeft">
        <h1 className="playGameLeftDesc">{wordDescription}</h1>
            <div>
            <div style={{color:"white",letterSpacing:"5px",}} className="mx-2 my-2 p-2 ">
                <Maskedtext text={originalWord} guessedLetters={guessedLetters}/>
            </div>
            <div className="letterBtn">
                 <LetterButtons text={originalWord} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
            </div>
            </div>

            {/* <div> */}
            <Button
             onClickHandler={handleHintClick}
             text = {`${hintText}`}
             styleType="warning"
             disabled ={isClicked ? "true" : "false"}
             classname={"text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"}
            />
           {/* </div> */}

           </div>

           <div className="playGameRight">
                <HangMan step={step} />
            </div>
          
           <MyModal guessedLetters={guessedLetters} step={step} text={originalWord} />
        </div>
        </>
    );
}

export default PlayGame;

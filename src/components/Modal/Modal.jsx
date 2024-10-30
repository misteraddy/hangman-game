import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyModal({ guessedLetters, step, text }) {
  let [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  
  const guessedLettersSet = new Set(guessedLetters);
  const textSet = new Set(text.toUpperCase());

    const [modalHeadText,setModalHeadText]   =  useState("");
    const [modalParaText,setModalParaText]   =  useState("");
    const [modalBtnText,setModalBtnText]   =  useState("");

  // Use useEffect to avoid state updates in the render cycle
  useEffect(() => {
    if(step > 6){
      setIsOpen(true);
      setModalHeadText("Game Over ☹️");
      setModalParaText("Oops! You were not able to Guess the Word");
      setModalBtnText("Play Again 🚀");
    }
      
    const allLettersGuessed = [...textSet].every(letter => guessedLettersSet.has(letter));

    if (allLettersGuessed) {
      setIsOpen(true);
      setModalHeadText("Game Won 🔥🔥");
      setModalParaText("Yay! You Guessed the Word");
      setModalBtnText("Play Again 🚀");
    }
  }, [guessedLetters,text]);

  function close() {
    setIsOpen(false);
    navigate('/');
  }

  const modalStyle  = function(){
    if(step > 6){
      return 'bg-red-500';
    }
    const allLettersGuessed = [...textSet].every(letter => guessedLettersSet.has(letter));
    if(allLettersGuessed){
      return 'bg-green-500';
    }
  } 

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none dialogg" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className={`w-full max-w-md rounded-xl ${modalStyle()} p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0`}
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                {modalHeadText}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black">
              {modalParaText}
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  {modalBtnText}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

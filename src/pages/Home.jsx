import {  useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Img1 from "../assets/Images/down.jpeg";
import { useEffect, useState } from "react";

function Home(){

       const navigation = useNavigate()
       const [word,setWord]  = useState('');
       const [description,setDescription] = useState('');


    function handleClick(){
        navigation('/start');
    }
    
    function handleClick2(){
        navigation('/play',{state:{wordSelected: word, wordDescription: description}});
    }

    async function fetchWords() {
        const respose  = await fetch("https://json-server-vercel-kappa-seven.vercel.app/words");
        const data = await respose.json();
        console.log(data);

        const randomIndex = Math.floor(Math.random()* data.length);
        console.log(data[randomIndex]);
        setWord(data[randomIndex].wordValue);
        setDescription(data[randomIndex].wordCategory);
        
    }

    useEffect(()=>{
        fetchWords();
    },[])

    return(
        <>
        <div className="homeClass grid gap-[50px] m-4 sm:grid-cols-2 grid-cols-1">

        <div style={{color: 'white'}} className="homeHeader m-52 ">
            <h1 className="min-w-[250px]" >Welcome To HangMan Game</h1>

            <div className="homeBtnDiv min-w-[150px]">
            <Button
             text={"Single Player Mode"} 
             classname="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
             onClickHandler={handleClick2}

            />

            <Button
             styleType="success"
             text={`Multi Player Mode`}
             onClickHandler={handleClick}
             classname="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            />
            
            </div>
           
        </div>

        <div className="homeImg sm:m-10 m-5">
                <img src={Img1} alt="hello" />
        </div>

        </div>
        </>
    )

}

export default Home;
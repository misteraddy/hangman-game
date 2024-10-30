import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    return (
        <>
        <div className="startHeader m-48">
        <h1 style={{color: '#ffffff' }} className="m-4">Start Game</h1>
        <TextInputFormContainer />
        </div>
            {/* <Link to='/play'  className="text-blue-400">Play Game Link</Link> */}
        </>
    )
}

export default StartGame;
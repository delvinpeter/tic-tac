import React,{useState} from 'react'
import Board from "./Board";
import { Window, MessageList, MessageInput } from "stream-chat-react";
// import "./Chat.css";
import "./game.css";

function Game({ channel, setChannel }) {
    const [playersJoined, setPlayersJoined] = useState(
      channel.state.watcher_count === 2
    );
    const [result, setResult] = useState({ winner: "none", state: "none" });
    
    channel.on("user.watching.start", (event) => {
        setPlayersJoined(event.watcher_count === 2);
      });
    
    if (!playersJoined) {
        return <div className='loader'>
           <div className='loaderText'>Waiting for other player to join...</div>
           </div>;
    }
  return (
    <div className="gameContainer"> 
      <Board result={result} setResult={setResult} />
      <Window>
        <MessageList
          disableDateSeparator
          
          closeReactionSelectorOnClick
          hideDeletedMessages
          messageActions={["react"]}
        />
        <MessageInput noFiles />
      </Window>
      <button className="leave"
        onClick={async () => {
          await channel.stopWatching();
          setChannel(null);
        }}>
        {" "}
        Leave Game
      </button>
      {result.state === "won" && 
      <div className='win'> <div className='xo'>{result.winner}</div></div>}

      {result.state === "tie" && 
      <div className='tie'> Game Tieds</div>}

    </div>
  );
}

export default Game
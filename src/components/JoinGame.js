import React, {useState} from 'react'
import { useChatContext, Channel } from "stream-chat-react";
import Game from './Game';
import CustomInput from './Custominput';
import { AiOutlineSearch } from "react-icons/ai";
// import "./App.css";
import "./game.css";



function JoinGame({logOut}) {

  const [rivalUsername, setRivalUsername] = useState("");
  const { client } = useChatContext();
  const [channel, setChannel] = useState(null);


  const createChannel = async () => {
    const response = await client.queryUsers({ name: { $eq: rivalUsername } });

    if (response.users.length === 0) {
      alert("User not found");
      return;
    }

    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id],
    });

    await newChannel.watch();
    setChannel(newChannel);
  };

  return (
    <>
      {channel ? (

        <Channel channel={channel} Input={CustomInput}>
          <Game channel={channel} setChannel={setChannel} />
        </Channel>
      ) : (
        <>
        <div className="joinGame">
          <div className='hh'><h1>Let's Start</h1></div>
          <input
            placeholder="Username of player..."
            onChange={(event) => {
              setRivalUsername(event.target.value);
            }}
          />
          <button onClick={createChannel}> <AiOutlineSearch/></button>
          

          
        </div>
        <button className='logout' onClick={logOut}>Log Out</button>
        
        </>

      )}
    </>
  );
}

export default JoinGame
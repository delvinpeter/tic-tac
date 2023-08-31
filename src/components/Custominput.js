import React from "react";
import { ChatAutoComplete, useMessageInputContext } from "stream-chat-react";
import "./game.css";
import { AiOutlineSend } from 'react-icons/ai';

function CustomInput() {
  const { handleSubmit } = useMessageInputContext();
  return (
    <div className="str-chat__input-flat str-chat__input-flat--send-button-active">
      <div className="str-chat__input-flat-wrapper">
        <div className="str-chat__input-flat--textarea-wrapper">
          <ChatAutoComplete />
        </div>
        <button className="send" onClick={handleSubmit}><p><AiOutlineSend/></p></button>
      </div>
    </div>
  );
}

export default CustomInput;

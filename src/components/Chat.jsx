import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          {/* <img src={Cam} alt="" /> */}
          <VideocamIcon fontSize="large"/> 
          {/* <img src={Add} alt="" /> */}
          <PersonAddAlt1Icon fontSize="large"/> 
          {/* <img src={More} alt="" /> */}
          <MoreVertIcon fontSize="large" /> 
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;

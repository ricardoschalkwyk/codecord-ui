import React from "react";
import PropTypes from "prop-types";

import { ChatInput } from ".";

const Chat = () => {
  return (
    <div className="pt-[48px] lg:absolute lg:inset-0">
      <ChatInput />
    </div>
  );
};

Chat.propTypes = {
  children: PropTypes.node,
};

export default Chat;

import PropTypes from "prop-types";

import { ChatInput, Messages } from ".";

const Chat = () => {
  return (
    <div className="relative flex-1">
      <div className="h-full overflow-auto p-4 pb-6">
        <div className="flex items-end pr-72">
          <Messages />
        </div>
      </div>

      <div className="absolute bottom-0 w-full pr-60">
        <div className="bg-discord-primary px-4 pb-6">
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

Chat.propTypes = {
  children: PropTypes.node,
};

export default Chat;

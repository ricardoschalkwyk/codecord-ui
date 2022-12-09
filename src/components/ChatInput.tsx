import React from "react";
import PropTypes from "prop-types";
import { PlusCircleIcon } from "@heroicons/react/solid";

import { Input } from "./Form";

const ChatInput = () => {
  const channelName = "#general";

  return (
    <div className="flex items-center gap-4 rounded-lg bg-discord-input px-4 py-2.5 text-discord-white">
      <div className="flex">
        <button type="button" className="group">
          <PlusCircleIcon className="h-6 w-6 opacity-70 group-hover:opacity-100" />
        </button>
      </div>
      <div className="flex-1">
        <form onSubmit={(e) => e.preventDefault()}>
          <Input type="text" placeholder={`Message ${channelName}`} />
        </form>
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  children: PropTypes.node,
};

export default ChatInput;

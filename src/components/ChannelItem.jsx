import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  HashtagIcon,
  CogIcon,
  UserAddIcon,
  VolumeUpIcon,
} from "@heroicons/react/solid";
import clsx from "clsx";
import Button from "./Button";
import { channelTypes } from "../constants";

function ChannelItem({ channel }) {
  const [isActive, setActive] = useState(false);

  const activeClick = () => {
    setActive(!isActive);
  };

  return (
    <Button
      className={clsx(
        "group justify-between",
        isActive && "bg-discord-light-gray bg-opacity-60"
      )}
      onClick={activeClick}
    >
      <div className="flex items-center gap-1.5">
        {channel.type === channelTypes.voice && (
          <VolumeUpIcon className="h-5 w-5" />
        )}

        {channel.type === channelTypes.text && (
          <HashtagIcon className="h-5 w-5" />
        )}

        {channel.name}
      </div>

      <div className="flex items-center gap-1">
        <UserAddIcon
          className={clsx(
            "h-4 w-4 group-hover:block",
            isActive && "block",
            !isActive && "hidden"
          )}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />

        <CogIcon
          className={clsx(
            "h-4 w-4 group-hover:block",
            isActive && "block",
            !isActive && "hidden"
          )}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </div>
    </Button>
  );
}
ChannelItem.propTypes = {
  channel: PropTypes.object,
};
export default ChannelItem;

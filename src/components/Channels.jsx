import React from "react";
import PropTypes from "prop-types";

import ChannelItem from "./ChannelItem";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";

const textChannels = [
  { id: 1, type: "text", name: "general" },
  { id: 2, type: "text", name: "Chill" },
  { id: 3, type: "text", name: "Ask Away" },
];

const voiceChannels = [
  { id: 1, type: "voice", name: "General" },
  { id: 2, type: "voice", name: "Chill" },
];

const categories = [
  { id: 1, name: "Text Channels", textChannels },
  { id: 2, name: "Voice Channels", voiceChannels },
];

const Channels = () => {
  return (
    <div className="hidden h-screen w-[240px] flex-shrink-0 bg-discord-secondary lg:block">
      <div className="h-[48px] pt-3 text-center shadow-md">
        <span>Coding United</span>
      </div>

      {categories.map((category) => (
        <div className="p-2" key={category.id}>
          <div className="pt-3 pb-1 opacity-50">
            <div className="flex justify-between text-xs uppercase">
              <div className="flex">
                <ChevronDownIcon className="h-4 w-4" />
                {category.name}
              </div>

              <div className="flex">
                <PlusIcon className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {category.textChannels?.map((channel) => (
              <ChannelItem key={channel.id} channel={channel} />
            ))}
          </div>

          <div className="space-y-1">
            {category.voiceChannels?.map((channel) => (
              <ChannelItem key={channel.id} channel={channel} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Channels.propTypes = {};

export default Channels;

import PropTypes from "prop-types";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";

import ChannelItem from "./ChannelItem";
import { UserProfileWidget } from ".";

const textChannels = [
  { id: 1, type: "text", name: "general" },
  { id: 2, type: "text", name: "chill" },
];

const voiceChannels = [
  { id: 1, type: "voice", name: "General" },
  { id: 2, type: "voice", name: "Chill" },
];

const categories = [
  { id: 1, name: "Text Channels", textChannels },
  { id: 2, name: "Voice Channels", voiceChannels },
];

const serverName = "Codecord's server";

const Channels = () => {
  return (
    <div className="relative hidden h-screen w-[240px] flex-shrink-0 bg-discord-secondary lg:block">
      <div className="relative z-20 flex h-12 items-center bg-discord-secondary px-4 py-3 shadow transition-colors duration-200 hover:cursor-pointer hover:bg-discord-light-gray hover:bg-opacity-40">
        <span className="truncate text-sm font-bold">{serverName}</span>
      </div>

      <div className="mt-0.5">
        {categories.map((category) => (
          <div className="px-2 pt-4" key={category.id}>
            <div className="pb-1 opacity-50">
              <div className="flex justify-between text-xs uppercase">
                <div className="flex items-center gap-0.5 font-medium">
                  <ChevronDownIcon className="h-3 w-3" />
                  {category.name}
                </div>
                <div className="flex">
                  <PlusIcon className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="space-y-0.5">
              {category.textChannels?.map((channel) => (
                <ChannelItem key={channel.id} channel={channel} />
              ))}
            </div>
            <div className="space-y-0.5">
              {category.voiceChannels?.map((channel) => (
                <ChannelItem key={channel.id} channel={channel} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <UserProfileWidget />
    </div>
  );
};

Channels.propTypes = {
  children: PropTypes.string,
};

export default Channels;

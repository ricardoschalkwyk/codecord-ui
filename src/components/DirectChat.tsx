import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeSimpleHigh,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { UserProfileWidget } from ".";
import MemberIcon from "./MemberIcon";

const openChat = [
  { id: 1, name: "BeenStoel" },
  { id: 2, name: "ColdBreeze" },
  { id: 3, name: "Benny" },
  { id: 4, name: "Genny" },
  { id: 5, name: "Gwebles" },
  { id: 6, name: "Cea SHarp" },
  { id: 7, name: "Brood" },
];

const DirectChat = () => {
  return (
    <div className="relative hidden h-screen w-[240px] flex-shrink-0 bg-discord-secondary lg:block">
      <div className="relative z-20 flex h-12 items-center bg-discord-secondary px-2 py-3 shadow transition-colors duration-200 hover:cursor-pointer hover:bg-discord-light-gray hover:bg-opacity-40">
        <input
          type="text"
          placeholder="Find or start a conversation"
          className="w-full rounded-md bg-discord-black px-1.5 py-2 text-xs font-light text-gray-500"
        />
      </div>

      <div className="px-2">
        <div className="mt-3.5 flex flex-col gap-3 px-3 text-discord-placeholder">
          <div className="flex items-center gap-4 px-0.5">
            <FontAwesomeIcon icon={faUser} className="h-7 w-5" />
            <span>Friends</span>
          </div>
          <div className="flex items-center gap-3.5">
            <FontAwesomeIcon icon={faGaugeSimpleHigh} className="h-7 w-6" />
            <span>Booster</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between px-2.5 text-sm font-bold text-discord-gray">
          <h1 className="text-discord-placeholder">Direct messages</h1>
          <FontAwesomeIcon icon={faPlus} className="h-3.5 w-4" />
        </div>

        <div className="mt-3">
          <div className="px-2">
            <div className="space-y-3">
              {openChat.map((person) => (
                <div key={person.id} className="flex items-center gap-3">
                  <MemberIcon />
                  <div className="text-discord-gray">{person.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <UserProfileWidget />
    </div>
  );
};

export default DirectChat;

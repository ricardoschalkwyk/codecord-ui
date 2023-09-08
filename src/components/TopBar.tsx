import { HashtagIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faInbox,
  faThumbtack,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  return (
    <div className="absolute z-10 flex h-12 w-full items-center justify-between bg-discord-primary px-3.5 shadow">
      <div className="flex items-center justify-center gap-2">
        <HashtagIcon className="h-6 w-6 text-discord-placeholder" />
        <h1>General</h1>
      </div>

      <div className="flex items-center gap-3.5 text-discord-placeholder">
        <HashtagIcon className="h-6 w-6" />
        <BellIcon className="h-6 w-6" />
        <FontAwesomeIcon icon={faThumbtack} className="h-5 w-6" />
        <FontAwesomeIcon icon={faUserGroup} className="h-5 w-6" />
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-36 rounded-md bg-discord-black px-2 font-light text-gray-500"
          />
        </div>
        <FontAwesomeIcon icon={faInbox} className="h-5 w-6" />
        <FontAwesomeIcon icon={faCircleQuestion} className="h-5 w-6" />
      </div>
    </div>
  );
};

TopBar.propTypes = {};

export default TopBar;

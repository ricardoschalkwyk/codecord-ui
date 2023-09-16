import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHeadphones,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

import MemberIcon from "./MemberIcon";

const UserProfileWidget = () => {
  return (
    <div className="absolute bottom-0 flex h-14 w-full justify-between bg-discord-black pl-2 pr-3">
      <div className="flex items-center gap-2">
        <div>
          <MemberIcon />
        </div>

        <div>
          <h1 className="text-xs font-bold">Gwabbles</h1>
          <h3 className="text-xs font-thin">Online</h3>
        </div>
      </div>

      <div className="flex items-center gap-4 font-thin text-discord-gray">
        <FontAwesomeIcon icon={faMicrophone} className="h-5 w-3" />
        <FontAwesomeIcon icon={faHeadphones} className="h-5 w-5" />
        <FontAwesomeIcon icon={faGear} className="h-5 w-4" />
      </div>
    </div>
  );
};

UserProfileWidget.propTypes = {};

export default UserProfileWidget;

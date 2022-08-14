import PropTypes from "prop-types";
import clsx from "clsx";
import { PlusIcon } from "@heroicons/react/outline";

const AddAServer = ({ active, onClick }) => {
  return (
    <button
      className={clsx(
        "relative flex h-12 w-12 select-none items-center justify-center rounded-3xl bg-discord-primary text-discord-green transition-all duration-200 hover:rounded-2xl hover:bg-discord-green hover:text-white active:top-[1px]",
        active && "rounded-2xl bg-discord-purple"
      )}
      onClick={() => onClick?.()}
    >
      <PlusIcon className="h-6 w-6" />
    </button>
  );
};

AddAServer.propTypes = {
  active: PropTypes.bool,
  image: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default AddAServer;

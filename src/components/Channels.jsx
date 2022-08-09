import React from "react";
import PropTypes from "prop-types";
import { HashtagIcon } from "@heroicons/react/solid";

const Channels = () => {
  return (
    <div className="hidden h-screen w-[240px] flex-shrink-0 bg-discord-secondary lg:block">
      {/* Top bar server menu */}
      <div className="h-[48px] pt-3 text-center shadow-md">
        <h1>Coding United</h1>
      </div>
      {/* Welcome channel */}
      <div className="px-3 pt-3 opacity-50">
        <h1>WELCOMES</h1>
      </div>
      <div className="py-1 px-3">
        <h2 className="flex">
          <HashtagIcon className="h-6 w-4" />
          Welcome
        </h2>
        <h2 className="flex">
          <HashtagIcon className="h-6 w-4" />
          Rules
        </h2>
      </div>
      {/* Announcement channels */}
      <div className="px-3 pt-3 opacity-50">
        <h1>NEWS</h1>
      </div>
      <div className="py-1 px-3">
        <h2>Announcements</h2>
        <h2>Update log</h2>
      </div>
      {/* Text channels */}
      <div className="px-3 pt-3 opacity-50">
        <h1>TEXT CHANNELS</h1>
      </div>
      <div className="py-1 px-3">
        <h2>General</h2>
      </div>
    </div>
  );
};

Channels.propTypes = {};

export default Channels;

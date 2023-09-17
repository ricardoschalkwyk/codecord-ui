import React, { useState } from "react";
import PropTypes from "prop-types";

import { Channels, DirectChat, Main, Servers } from "../components";

const Layout = () => {
  const [active] = useState(true);

  return (
    <div className="flex">
      <Servers />
      {!active ? <Channels /> : <DirectChat />}
      <Main />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

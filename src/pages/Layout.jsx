import React from "react";
import PropTypes from "prop-types";

import { Channels, Main, Servers } from "../components";

const Layout = () => {
  return (
    <div className="flex">
      <Servers />
      <Channels />
      <Main />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

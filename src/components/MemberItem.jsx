import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import MemberIcon from "./MemberIcon";

const MemberItem = ({ member }) => {
  return (
    <Button className="gap-3">
      <MemberIcon src={member.image} />
      <div>{member.name}</div>
    </Button>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object,
};

export default MemberItem;

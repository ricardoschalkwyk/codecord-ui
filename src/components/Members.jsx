import React from "react";
import MemberItem from "./MemberItem";

const users = [
  {
    id: 1,
    type: "member",
    name: "James",
    image:
      "https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png",
    roleId: 1,
  },
  { id: 2, type: "member", name: "Bianca", roleId: 1 },
  { id: 3, type: "member", name: "Benjamn", roleId: 2 },
  { id: 4, type: "member", name: "Chelly", roleId: 2 },
  { id: 5, type: "member", name: "Genny", roleId: 1 },
  { id: 6, type: "member", name: "Stabby", roleId: 1 },
];

const roles = [
  {
    id: 1,
    name: "Admins",
  },

  {
    id: 2,
    name: "Moderaters",
  },
];

const Members = () => {
  return (
    <div className="absolute right-0 top-[48px] bottom-0 hidden w-[240px] bg-discord-secondary lg:block">
      <div className="p-2">
        <div className="flex pt-3 pb-1 pl-2 text-xs font-medium uppercase opacity-50">
          Online &mdash; {users.length}
        </div>

        <div className="space-y-0.5">
          {users.map((user) => (
            <MemberItem key={user.id} member={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

Members.propTypes = {};

export default Members;

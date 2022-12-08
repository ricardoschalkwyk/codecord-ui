import { useState } from "react";
import PropTypes from "prop-types";

import ServerItem from "./ServerItem";
import AddAServer from "./AddAServer";

const serversList = [
  { id: 1, name: "Adam & Friends", active: false },
  {
    id: 2,
    name: "NestJS",
    image:
      "https://cdn.discordapp.com/icons/520622812742811698/6e1eaa2f6b889732f03b585c17ec4e90.webp?size=96",
    active: false,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    image:
      "https://cdn.discordapp.com/icons/486935104384532500/5a5a61bfe1067fc495cc821eee800b6a.webp?size=96",
    active: false,
  },
  {
    id: 4,
    name: "SpOOKASEM",
    image:
      "https://cdn.discordapp.com/icons/421935675374305291/17991e6d4b1238407baf1daadf8d1a59.webp?size=96",
    active: false,
  },
  {
    id: 5,
    name: "The A Team",
    image:
      "https://cdn.discordapp.com/icons/797394731134877717/5d543e866d30e6042e1f67455d967ca4.webp?size=96",
    active: false,
  },
];

const Servers = () => {
  const [servers, setServers] = useState(serversList);

  const handleClick = (index) => {
    let newArray = servers.map((item) => ({ ...item, active: false }));
    newArray[index].active = !newArray[index].active;
    setServers(newArray);
  };

  return (
    <div className="hidden h-screen w-[72px] shrink-0 bg-discord-dark pt-3 lg:block">
      <div className="mb-2 flex justify-center">
        <ServerItem />
      </div>

      <div className="mb-2 flex justify-center">
        <div className="h-0.5 w-8 rounded-sm bg-discord-primary"></div>
      </div>

      <div className="mb-2 flex justify-center">
        <div className="flex flex-col gap-2">
          {servers.map((server, index) => (
            <ServerItem
              key={server.id}
              {...server}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <AddAServer />
      </div>
    </div>
  );
};

Servers.propTypes = {
  children: PropTypes.node,
};

export default Servers;

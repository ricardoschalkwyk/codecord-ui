import React from "react";
import PropTypes from "prop-types";

import Message from "./Message";

const data = [
  {
    id: 1,
    username: "Sintac",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem distinctio fugiat optio? Nisi est blanditiis odit sunt maiores! Aperiam tenetur dicta blanditiis facilis ex quibusdam ullam laborum ab labore?",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    username: "Stoutgat_mkay",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque ut ratione quam explicabo? Sint modi velit, sapiente, aliquid recusandae assumenda dolorem omnis dolore nisi natus expedita in aut est.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    username: "Gegaba",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat excepturi pariatur itaque esse illo, aperiam fugiat provident voluptatibus ab ipsum vero modi impedit at dolore velit cumque expedita ad. Suscipit.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    username: "22atreyu22",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ipsum nam accusamus saepe, alias ratione, dicta excepturi repudiandae ut itaque, similique consequuntur esse laboriosam voluptatum aperiam inventore unde totam blanditiis.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    username: "mewtru",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, quas fugiat molestiae asperiores alias excepturi debitis nihil dolore ad rem officiis! Dolores quae fuga pariatur illo eius, nobis dicta iusto.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    username: "VapeJuiceJordan",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ipsum nam accusamus saepe, alias ratione, dicta excepturi repudiandae ut itaque, similique consequuntur esse laboriosam voluptatum aperiam inventore unde totam blanditiis.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 7,
    username: "S1lent",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum perferendis ipsam fugiat molestiae, saepe harum nobis inventore ab maiores qui consequatur dignissimos sequi sed, atque, dolores aperiam corporis. Voluptate!",
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    username: "c1sc0",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates delectus perspiciatis, quam officiis ex minima cupiditate accusamus quod, temporibus sequi illum animi voluptas aspernatur aperiam cum itaque eveniet optio.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 9,
    username: "Nax",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsam porro, maiores voluptatem nihil ratione beatae cumque nesciunt voluptatibus. Quas beatae ipsam id aliquid! Accusamus placeat commodi cum nostrum labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates delectus perspiciatis, quam officiis ex minima cupiditate accusamus quod, temporibus sequi illum animi voluptas aspernatur aperiam cum itaque eveniet optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum perferendis ipsam fugiat molestiae, saepe harum nobis inventore ab maiores qui consequatur dignissimos sequi sed, atque, dolores aperiam corporis. Voluptate!",
    createdAt: new Date().toISOString(),
  },
  {
    id: 10,
    username: "George",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam error odit omnis accusamus nostrum qui libero suscipit autem aspernatur delectus eligendi aperiam exercitationem nam quam consequuntur, enim porro optio.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 11,
    username: "Hannibal",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam molestiae commodi placeat quaerat perferendis velit repudiandae neque totam dolorum accusamus aperiam recusandae libero ipsum, nemo cumque ipsa itaque. Molestiae!",
    createdAt: new Date().toISOString(),
  },
];

const Messages = () => {
  return (
    <div className="mb-16 space-y-6">
      {data.map((item) => (
        <Message key={item.id} {...item} />
      ))}
    </div>
  );
};

Messages.propTypes = {
  children: PropTypes.node,
};

export default Messages;

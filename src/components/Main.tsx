import TopBar from "./TopBar";
import Chat from "./Chat";
import Members from "./Members";

const Main = () => {
  return (
    <div className="relative h-screen w-full bg-discord-primary lg:h-auto">
      <TopBar />
      <div className="flex h-screen pt-12">
        <Chat />
        <Members />
      </div>
    </div>
  );
};

export default Main;

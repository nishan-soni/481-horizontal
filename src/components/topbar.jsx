import profile from "../assets/b.jpg";

const TopBar = () => {
  return (
    <div className="flex-1 flex flex-row items-center justify-end w-full pr-8 py-3">
      <div className="flex justify-end min-w-fit w-[28%]">
        <div className="flex flex-col mx-4">
          <div className=" text-lg">
            <strong>Nathan Ferris</strong>
          </div>
          <div className="text-sm text-right">
            30839283
          </div>
        </div>
        <div className="w-12 h-12">
          <img
            src={profile}
            alt="profile"
            className="h-full w-full object-cover border-2 p-0.5 border-red-400 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;

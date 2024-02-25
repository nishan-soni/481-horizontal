import profile from "../assets/user.png";

const TopBar = () => {
  return (
    <div className="flex-1 flex flex-row items-center justify-end pr-8 py-3">
      <div className="flex flex-col mx-4">
        <div className=" text-xl">
            <strong>User Name</strong>
        </div>
        <div className="text-sm text-right">
            30839283
        </div>
      </div>
      <div className="w-16 h-16">
        <img
          src={profile}
          alt="profile"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default TopBar;

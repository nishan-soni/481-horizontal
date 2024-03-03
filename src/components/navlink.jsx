
// Styling for Nav Links
const NavLink = ({ children }) => {
  return (
    <div className="w-full flex items-start bg-red-20">
      <strong>{children}</strong>
    </div>
  );
};

export default NavLink;

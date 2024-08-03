export const SidebarItem = ({ icon, label, isExpanded, onClick }) => {
  return (
    <div
      className="flex items-center p-3 w-full hover:bg-cyan-800 cursor-pointer"
      onClick={onClick}
    >
      <div className="text-2xl">{icon}</div>
      <span className={`ml-4 ${isExpanded ? "block" : "hidden"}`}>{label}</span>
    </div>
  );
};


const SidebarItem = ({ icon, label, isExpanded, onClick, isMenu }) => {
  const isActive = isMenu === label;
  
  return (
    <div
      className={`flex items-center p-3 w-full  cursor-pointer transition-colors duration-300 ease-in-out rounded-lg ${
        isActive ? "bg-gray-600" : "hover:bg-gray-600"
      }`}
      onClick={onClick}
    >
      <div className="text-2xl">{icon}</div>
      <span
        className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
        }`}
      >
        {label}
      </span>
    </div>
  );
};
export default SidebarItem;
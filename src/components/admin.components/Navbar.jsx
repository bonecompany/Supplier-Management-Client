
import { MdNotifications } from "react-icons/md";

const Navbar = () => {
  return (
    <nav  className="fixed w-[83%] max-sm:w-[100%] flex justify-around px-4 mt-1  rounded-lg">
      {/* <form action="/search" className="max-w-[480px] w-[50%] px-4 ">
        <div className="relative">
          <input
            type="text"
            name="q"
            className="w-full border h-12 shadow-lg p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
            placeholder="search"
          />
          <button type="submit" className="absolute top-3.5 right-3">
            <svg
              className="text-teal-400 h-5 w-5 fill-current dark:text-teal-300"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </form> */}
      <div className="flex justify-between w-[50%]">
    <button>
    <MdNotifications/>
    </button>
          <img
            className="w-12 h-12 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
          />
     
      </div>
    </nav>
  );
};

export default Navbar;

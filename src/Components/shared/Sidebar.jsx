import { RiHome2Line,
        RiCreativeCommonsNdLine, 
        RiCopyleftLine, 
        RiMailLine, 
        RiNotification4Line, 
        RiSettings2Line,
        RiLogoutCircleRLine,} from "react-icons/ri";


function Sidebar({ showMenu }) {
  return (
    <div className={`bg-[#1F1d2b] fixed lg:left-0  top-0 w-27 h-full flex flex-col justify-between 
    py-6 rounded-tr-xl z-50  transition-all
    ${showMenu ? "left-0": "-left-full"}`}
    >
      <div>
      <ul className="pl-3">
        <li>
          <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-1 pr-2">
            Logo
          </h1>
        </li>
        <li className="bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl">
          <a href="#" className="bg-[#ec7c6a] p-2 flex justify-center rounded-lg text-center text-white">
            <RiHome2Line className="text-2xl text-center"/>
          </a>
        </li>
        <li className="hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="group-hover:bg-[#ec7c6a] p-2 flex justify-center rounded-lg text-center text-[#ec7c6a] group-hover:text-white transition-colors">
            <RiCreativeCommonsNdLine className="text-2xl text-center"/>
          </a>
        </li>
        <li className="hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="group-hover:bg-[#ec7c6a] p-2 flex justify-center rounded-lg text-center text-[#ec7c6a] group-hover:text-white transition-colors">
            <RiCopyleftLine className="text-2xl text-center"/>
          </a>
        </li>
        <li className="hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="group-hover:bg-[#ec7c6a] p-2 flex justify-center rounded-lg text-center text-[#ec7c6a] group-hover:text-white transition-colors">
            <RiMailLine className="text-2xl text-center"/>
          </a>
        </li>
        <li className="hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="group-hover:bg-[#ec7c6a] p-2 flex justify-center rounded-lg text-center text-[#ec7c6a] group-hover:text-white transition-colors">
            <RiNotification4Line className="text-2xl text-center"/>
          </a>
        </li>
        <li className="hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="group-hover:bg-[#ec7c6a] p-2 flex justify-center rounded-lg text-center text-[#ec7c6a] group-hover:text-white transition-colors">
            <RiSettings2Line className="text-2xl text-center"/>
          </a>
        </li>
      </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#ec7c6a] p-2 flex justify-center rounded-lg text-center text-[#ec7c6a] group-hover:text-white transition-colors">
            <RiLogoutCircleRLine className="text-2xl text-center"/>
            </a>
          </li>
        </ul> 
      </div>
    </div>
  );
}

export default Sidebar;

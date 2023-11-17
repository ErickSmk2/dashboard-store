import { RiSearch2Line } from "react-icons/ri";

function Header() {
  return (
    <header >
        {/* header and title */}
        <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
          <div className="">
            <h1 className="text-xl text-gray-300">Titulo</h1>
            <p className="text-gray-500">12/10/2023</p>
          </div>
          <div>
            <form action="">
              <div className="w-full relative mr-3">
                <RiSearch2Line className="absolute left-2 right-2 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  className="w-full py-2 pl-8 pr-4 bg-[#1F1d2b] rounded-lg text-gray-300 outline-none"
                 placeholder="Search"/>
              </div>
            </form>
          </div>
        </div>
        {/* tabs */}
        <nav className="text-gray-300 flex items-center justify-between border-b mb-3 md:justify-start md:gap-10">
            <a href="#" className=" relative py-2 pr-4 border-[#ec7c6a] text-[#ec7c6a] 
            before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full
            before:-bottom-[1px]">Hot dishes</a>
            <a href="#" className=" py-2 pr-4">Call dishes</a>
            <a href="#" className=" py-2 pr-4">Soups</a>
            <a href="#" className=" py-2 pr-4">Grill</a>
        </nav>
      </header>
  )
}

export default Header
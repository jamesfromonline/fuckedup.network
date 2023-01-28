import dynamic from "next/dynamic"
import Image from "next/image"
const NavLink = dynamic(() => import("./NavLink"))

const NavBar = ({ show }: { show: boolean }) => {
  return (
    <nav
      className={`flex items-center justify-between overflow-hidden sm:max-h-[120px] w-full max-w-4xl lg:max-w-6xl mx-auto px-2 py-4 z-1 relative ${
        show ? "opacity-100" : "opacity-0"
      } transition duration-200 ease-in-out`}
    >
      <div className="w-48 h-[56px] relative">
        <Image src="/FUN-logo.png" fill alt="logo" />
      </div>
      <div className="flex items-center justify-end">
        <NavLink href="https://fuckedup.shop" title="shop" />
      </div>
    </nav>
  )
}

export default NavBar

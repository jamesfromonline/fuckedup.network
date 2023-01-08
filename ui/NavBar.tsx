import dynamic from "next/dynamic"
import Image from "next/image"
const NavLink = dynamic(() => import("./NavLink"))

const NavBar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden max-h-[120px] w-full max-w-4xl lg:max-w-6xl mx-auto py-4 z-1 relative">
      <div className="w-48 h-[65px] relative">
        <Image src="/FUN-logo.png" fill alt="logo" />
      </div>
      <div className="flex items-center justify-end gap-2 mb-4">
        <NavLink href="https://youtube.com/@fedupstuff" title="youtube" />
        <NavLink href="https://tiktok.com/@fuckedupstuff_" title="tiktok" />
        <NavLink href="https://fuckedup.shop" title="shop" />
      </div>
    </nav>
  )
}

export default NavBar

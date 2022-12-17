const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <a
      href={href}
      title={`fed up stuff ${title}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-centter justify-center gap-1 text-black hover:text-secondary text-lg font-bold py-2 px-4"
    >
      {title}
    </a>
  )
}

export default NavLink

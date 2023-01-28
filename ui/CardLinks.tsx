const CardLinks = ({ links }: { links: string[] }) => {
  return (
    <ul className="w-full flex items-center justify-center gap-2 pt-2 bg-black">
      {links?.map((link: string) => {
        const url = new URL(link)
        const domain = url.hostname.split(".")[0]
        const service = domain.split(".")[0]

        return (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-bold py-2 px-4 rounded-md"
          >
            <div className="w-7 h-7 icon bg-zinc-600 hover:bg-rose-700" />
            <style jsx>{`
              .icon {
                mask: url(/icons/${service}.svg) no-repeat center center;
                mask-size: contain;
              }
            `}</style>
          </a>
        )
      })}
    </ul>
  )
}

export default CardLinks

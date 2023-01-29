import Image from "next/image"

const AccountHeader = ({
  image,
  name,
  username,
  className = ""
}: {
  image: string
  name: string
  username: string
  className?: string
}) => {
  return (
    <div
      className={`w-full max-w-xl mx-auto flex flex-col items-center justify-center bg-zinc-900 py-4 relative ${className}`}
    >
      {image.length > 0 && (
        <Image
          className="rounded-full mb-2"
          src={image}
          width={100}
          height={100}
          alt="alt image"
        />
      )}
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-bold leading-none mb-1 text-center">
          {name}
        </p>
        <p className="text-md text-zinc-400 leading-none mb-3 text-center">
          @{username}
        </p>
      </div>
    </div>
  )
}

export default AccountHeader

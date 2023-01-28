const Description = ({ show = false }: { show: boolean }) => {
  return (
    <div
      className={`flex flex-col h-full justify-start items-start md:max-w-sm mx-auto pb-6 md:pb-0 ${
        show ? "" : "hidden"
      }`}
    >
      <h1 className="text-4xl text-rose-500 uppercase font-[900] mb-2 leading-none text-center w-full">
        F.U.N.
      </h1>

      <p
        className={`text-white text-sm max-w-[40ch] md:w-full lowercase pl-0 md:pl-4 lg:pl-0`}
      >
        we&apos;re a rad social media marketing network who can assist
        businesses and creators looking to make a splash on Twitter (and soon
        Instagram). Our network can help drive engagement and build brand
        awareness on Twitter, as well as helping creators increase their
        following and general engagement statistics.
        <br />
        <br />
        With over <span className="font-[900]">half of a billion</span>{" "}
        impressions per month, we have the reach and influence to help you
        achieve your marketing goals.
      </p>
    </div>
  )
}

export default Description

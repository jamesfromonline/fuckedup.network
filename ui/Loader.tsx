const Loader = () => (
  <div className="w-28 h-28 relative rounded-full overflow-hidden shadow-md">
    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-primary to-secondary animate-spin z-0 rounded-full" />
    <div className="w-28 h-28 bg-black grid place-items-center text-md leading-none font-bold text-primary relative z-10 scale-[0.9] rounded-full text-center">
      fucking <br /> loading
    </div>
  </div>
)

export default Loader

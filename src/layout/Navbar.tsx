"use client"

export const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 py-6
      `}
    >
      <div
        className={`
          transition-all duration-500 flex items-center gap-6 p-4 rounded-full 
          ${scrolled
            ? "w-75 justify-center shadow-lg shadow-black/50 bg-navbar border border-border gap-4"
            : "w-full justify-between max-w-5xl bg-navbar/80 backdrop-blur-md border-b border-border"}
        `}
      >
        <span className="font-bold pr-4 text-nowrap">{scrolled ? "FM" : "Francesco Milione"}</span>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  )
}
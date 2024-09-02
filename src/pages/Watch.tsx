function Watch() {
  return (
    <div className="p-3 sm:p-4">
      <h1 className="text-3xl text-center font-bold mb-6 mt-5">Watchlist</h1>

      <div className="relative flex flex-col sm:flex-row bg-clip-border rounded-xl bg-black text-white shadow-md w-full max-w-4xl ">
        <div className="relative flex-shrink-0">
          <img
            src="https://www.deccanchronicle.com/h-upload/2024/03/22/1080689-thegoatlife.webp"
            alt="Aadujeevitham: The Goat Life"
            className="relative object-cover  max-w-[16rem] rounded"
          />
        </div>

        <div className="relative p-6 flex-1 ml-6 ">
          <h4 className="text-2xl font-semibold leading-snug tracking-normal text-white mb-4">
            Aadujeevitham: The Goat Life
          </h4>
          <p className="text-base antialiased font-normal leading-relaxed text-white mb-8">
            Like so many organizations these days, Autodesk is a company in transition.
          </p>
        </div>

        <div className="relative flex justify-center items-center mt-4 sm:mt-0 sm:ml-auto sm:mr-7 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Watch;

export default function Inspiration() {
  return (
    <div className="items-center mx-auto ">
      <h1 className="text-5xl sm:text-9xl font-light text-center  mt-12 font-garamond">
        Inspiration
      </h1>
      <h1 className="text-5xl sm:text-9xl text-center mt-12 font-garamond">
        Inspiration
      </h1>

      <video
        controls
        poster="/kanye-poster.png"
        className="rounded-xl -rotate-6 my-12 mb-20 sm:mb-0"
      >
        <source
          src="https://burger.bunkr.ru/2008-Grammy-Awardsv2-IIdSu1rP.mp4"
          type="video/mp4"
        />
      </video>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-8xl font-bold mt-12 tracking-tight font-seasons">
          Memento Mori
        </h1>
        <p className="text-3xl text-gray-400 tracking-tight font-seasons">
          &quot;remember that you have to die&quot;
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-5xl sm:text-8xl font-bold items-end text-end justify-end mt-12 tracking-tight font-seasons">
          Memento Mori
        </h1>
        <p className="text-xl sm:text-3xl text-gray-400 mr-4 sm:mr-[104px] items-end text-end justify-end tracking-tight font-seasons">
          &quot;remember that you have to die&quot;
        </p>
      </div>
      <video controls width="500" className="rounded-xl rotate-3 my-12 mr-96">
        <source
          src="https://res.cloudinary.com/ajtruex/video/upload/v1696464400/rapisreligion2023-08-21__021616.mov"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default function Inspiration() {
  return (
    <div className="items-center mx-auto ">
      <h1 className="text-5xl sm:text-9xl text-center mt-12 font-garamond">
        Inspiration
      </h1>
      <video
        controls
        poster="https://d34073qwlt06j3.cloudfront.net/kanye-poster.webp"
        className="rounded-xl my-12 mb-20 sm:mb-0"
      >
        <source
          src="https://d34073qwlt06j3.cloudfront.net/KanyeWestPerformsStrongerAndHeyMama.mp4"
          type="video/mp4"
        />
      </video>

      {/* <video
        controls
        poster="/kanye-poster.png"
        className="rounded-xl -rotate-6 my-12 mb-20 sm:mb-0"
      >
        <source
          src="https://player.odycdn.com/v6/streams/62736b213f015ac31d27ab57f66355d6b583ac94/91435b"
          type="video/mp4"
        />
      </video> */}
      <div className="flex flex-col">
        <h1 className="text-5xl sm:text-8xl font-bold items-end text-end justify-end mt-12 tracking-tight font-seasons">
          Memento Mori
        </h1>
        <p className="text-xl sm:text-3xl text-gray-400 mr-4 sm:mr-[104px] items-end text-end justify-end tracking-tight font-seasons">
          &quot;remember that you have to die&quot;
        </p>
      </div>
      <div className="flex space-x-4 mt-12">
        <video controls width="500" className="rounded-xl">
          <source src="/seth-rogen-inspo.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center space-y-8  w-2/3">
          <video controls className="rounded-xl">
            <source
              src="https://res.cloudinary.com/ajtruex/video/upload/q_auto:best/v1696464400/rapisreligion2023-08-21__021616.mp4"
              type="video/mp4"
            />
          </video>

          <video
            controls
            poster="https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.webp"
            className="rounded-xl"
          >
            <source
              src="https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  )
}

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  // const router = useRouter()
  // Get the slug from the router query

  // Find the project with the matching slug
  const project = projects.find((project) => project.route === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <h1 className="text-5xl text-center font-bold mt-20 mb-3">
        {project.name}
      </h1>
      <p className="text-xl mb-12 text-neutral-600 dark:text-neutral-400 text-center">
        {project.description}
      </p>
      {/* <div className="grid grid-cols-2">
        <h2 className="text-3xl text-center mt-12">
          Goals
          <hr />
          <div className="text-xl mt-4">
            {project.goals.map((goal, idx) => {
              return <p key={idx}>{goal}</p>
            })}
          </div>
        </h2>
        <Image
          src={project.image}
          alt=""
          width={1000}
          height={1000}
          className="rounded-xl shadow-xl"
        />
      </div> */}
      <div className="flex justify-center">
        <Image
          src={project.image}
          alt=""
          width={750}
          height={750}
          className="rounded-xl shadow-xl"
        />
      </div>
      <h2 className="text-3xl text-center mt-12">
        Tools
        <div className="mt-10 grid gap-10 justify-items-center md:justify-items-center md:grid-cols-3 lg:grid-cols-3 md:gap-3 lg:gap-x-10 lg:gap-y-10 ">
          {project.tools.map((tool, idx) => {
            return (
              <div
                className="group flex cursor-pointer flex-col space-y-5 rounded-2xl bg-gray-500 p-5 dark:bg-[#111111] w-[200px] md:w-full"
                key={idx}
              >
                <p className="text-xl">{tool.name}</p>
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={120}
                  height={70}
                  className="transform self-center border-none text-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
              </div>
            )
          })}
        </div>
      </h2>
    </div>
  )
}

export default ProjectPage

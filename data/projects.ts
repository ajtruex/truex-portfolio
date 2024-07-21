export const projects = [
  {
    name: "Next Movies",
    description: "A movie review aggregator made with Next.js.",
    image: "/next-movies.png",
    github: "https://github.com/ajtruex/next-movies",
    link: "https://movies.andrewtruex.tech/",
    route: "NextMovies",
    tools: [
      { name: "Next.js", image: "/nextjs-logo.png" },
      { name: "The Movie Database API", image: "/tmdb-full-logo.svg" },
      { name: "Vercel", image: "/vercel-logo.png" },
      { name: "Tailwind CSS", image: "/tailwind-logo.png" },
    ],
  },
  {
    name: "BS Upcycled Home Decor",
    description:
      "A website for a local business built with Next.js featuring an image gallery.",
    image: "/bs2.png",
    github: "https://github.com/ajtruex/bsupcycledhomedecor",
    link: "https://bsupcycledhomedecor.com/",
    route: "bs",
    tools: [
      { name: "Next.js", image: "/nextjs-logo.png" },
      { name: "Vercel", image: "/vercel-logo.png" },
      { name: "Tailwind CSS", image: "/tailwind-logo.png" },
      { name: "Cloudinary", image: "/cloudinary-logo.png" },
      { name: "Framer Motion", image: "/framer-motion-logo.png" },
    ],
  },
  {
    name: "WhoSampled Raycast Extension",
    description:
      "Search WhoSampled.com from the currently playing song in Spotify",
    image: "/whosampled-raycast-extension.png",
    github:
      "https://github.com/raycast/extensions/tree/main/extensions/whosampled",
    link: "https://www.raycast.com/truex/whosampled",
    route: "whosampled",
    tools: [
      { name: "TypeScript", image: "/typescript-logo.png" },
      { name: "Raycast", image: "/raycast-logo.png" },
      { name: "Node.js", image: "/nodejs-logo.svg" },
    ],
  },
  {
    name: "Portfolio",
    description: "My personal portfolio website built with Next.js.",
    image: "/next-portfolio.png",
    github: "https://github.com/ajtruex/tailwindcss-and-nextjs-portfolio",
    link: "https://andrewtruex.tech/",
    route: "new-portfolio",
    tools: [
      { name: "Next.js", image: "/nextjs-logo.png" },
      { name: "Tailwind CSS", image: "/tailwind-logo.png" },
      { name: "Vercel", image: "/vercel-logo.png" },
    ],
  },
  {
    name: "Vue.js Portfolio",
    description: "My old personal portfolio website built with Vue.js.",
    image: "/portfolio2.png",
    github: "https://github.com/ajtruex/portfolio2",
    link: "https://beta.andrewtruex.tech/",
    route: "Portfolio",
    slug: "portfolio",
    tools: [
      { name: "Vue.js", image: "/vue-logo.png" },
      { name: "Airtable", image: "/airtable-logo.png" },
      { name: "Bulma", image: "/bulma-logo.png" },
    ],
  },
  {
    name: "MovieVuer",
    description: "A movie review aggregator made with Vue.js.",
    image: "/movievuer.png",
    github: "https://github.com/ajtruex/MovieVuer",
    link: "https://movievuer.netlify.app/",
    route: "MovieVuer",
    slug: "movievuer",
    tools: [
      { name: "Vue.js", image: "/vue-logo.png" },
      { name: "The Movie Database API", image: "/tmdb-full-logo.svg" },
      { name: "Netlify", image: "/netlify-logo.png" },
      { name: "Bootstrap", image: "/bootstrap-logo.png" },
    ],
    goals: [
      "Use Vue.js to build full web application",
      "Use axios to pull information from OMDb API",
      "Style application with bootstrap",
    ],
  },
]

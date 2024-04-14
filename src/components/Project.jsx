import React from 'react'
import ProjectImg from '../assets/Project1.svg'

function Project() {
  return (
    <div className="grid max-w-sm gap-4 px-4 mx-auto sm:max-w-4xl md:gap-8 lg:max-w-5xl">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="text-gray-500 dark:text-gray-400">Check out some of my latest projects.</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="flex w-full items-center justify-start space-x-4">
                <img
                  alt="Project Thumbnail"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="100"
                  src={ProjectImg}
                  width="200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">Project 1</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of Project 1. This is a really cool project that I worked on.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="flex w-full items-center justify-start space-x-4">
                <img
                  alt="Project Thumbnail"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="100"
                  src="/placeholder.svg"
                  width="200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">Project 2</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of Project 2. This is a really cool project that I worked on.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="flex w-full items-center justify-start space-x-4">
                <img
                  alt="Project Thumbnail"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="100"
                  src="/placeholder.svg"
                  width="200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold">Project 3</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of Project 3. This is a really cool project that I worked on.
                </p>
              </div>
            </div>
            </div>
            </div>
          
  )
}

export default Project
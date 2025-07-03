"use client";
import { Minus } from "lucide-react";


function Projects() {
    return (
        <section id="projectsSection" className='h-fit my-4'>
            <div className="flex flex-col items-start justify-center w-full h-fit bg-white dark:bg-black px-6">
                <div className="flex justify-start items-center text-red-400">
                    <h1 className="text-2xl">Projects</h1>
                    <Minus size={45} />
                </div>
            </div>
        </section>
  )
}

export default Projects
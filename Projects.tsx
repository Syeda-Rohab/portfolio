import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data = [
    {
        id: 0,
        title: "Static Interactive Resume",
        desc: "HTML CSS & JS TS based project",
        img: "/project_01.png",
        tags: ["HTML", "CSS", "JAVASCRIPT", "Typescript"],
      
    },
    {
        id: 1,
        title: "Dynamic Resume Builder",
        desc: "HTML CSS & JS TS based project",
        img: "/project_02.png",
        tags: ["HTML", "CSS", "JAVASCRIPT", "Typescript"],

        
    },
    {
        id: 2,
        title: "Editable Resume Builder",
        desc: "HTML CSS & JS TS based project",
        img: "/project_03.png",
        tags: ["HTML", "CSS", "JAVASCRIPT", "Typescript"],

    },
    {
        id: 3,
        title: "Shareable Resume Builder",
        desc: "HTML CSS & JS TS based project",
        img: "/project_04.png",
        tags: ["HTML", "CSS", "JAVASCRIPT", "Typescript"],

    },
    {
        id: 4,
        title: "Ecommerce website",
        desc: "Nextjs",
        img: "/project_05.png",
        tags: ["Nextjs"],

    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-centre'></div>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      
    </div>
  )
}

export default Projects

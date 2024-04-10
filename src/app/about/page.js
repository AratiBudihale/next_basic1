
import BasicExampleAccordion from '@/Accordion/Accordion'
import React from 'react'
import data from './data.json'

const About = () => {
  return (
    <div>
   <h1 className='text-center mt-5'>About</h1>
   <BasicExampleAccordion data={data.players} title="Players"/>
   <BasicExampleAccordion data={data.students} title="Students"/>
   </div>
  )
}
export default About

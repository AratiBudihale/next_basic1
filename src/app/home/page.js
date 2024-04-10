import React from 'react'
import BasicExampleAccordion from '@/Accordion/Accordion.js'
import data from './data.json'

const Home = () => {
  return (
    <>
    <h1 className='text-center mt-5'>Home</h1>
    <BasicExampleAccordion data={data} title="Girls" />
    </>
  )
}

export default Home

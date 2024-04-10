"use client"
import Accordion from 'react-bootstrap/Accordion';
//import data from './data.json'

function BasicExampleAccordion({data,title}) {
  return(
    <Accordion defaultActiveKey="0">
  {
    data.map(({heading,content},ind)=>{
      
      return <>
      <h1>{title}</h1>
      <Accordion.Item key={`accItem_ ${ind}`} eventKey={ind}>
      <Accordion.Header>{heading}</Accordion.Header>
      <Accordion.Body>
        {content}
      </Accordion.Body>
    </Accordion.Item>
    </>
    })

  }
  </Accordion>
  )
  
}

export default BasicExampleAccordion;


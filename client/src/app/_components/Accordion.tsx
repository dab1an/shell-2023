'use client'
import React, { useRef, useState } from 'react'

const faqs = [
  {
    id: 1,
    header: 'Inspiration',
    text: `Our inspiration for this project was to address a pressing need among college and university students—making informed financial decisions, especially when it comes to credit cards. Drawing inspiration from the Vanguard challenge and leveraging technologies like Next.JS, React.js, and OpenAI, we set out to create a cutting-edge web application. Our vision was to design an intuitive questionnaire that users could fill out to express their financial goals, spending habits, and preferences. Behind the scenes, our AI-driven backend, powered by OpenAI, would analyze these responses to recommend the most suitable credit card options. This innovative approach combines user-friendly design, educational resources, and the power of AI to empower students in managing their finances effectively and building a better financial future.`,
  },
  {
    id: 2,
    header: 'Prompt',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header: "How it's built",
    text: `In crafting this project, we embarked on a journey of innovation and knowledge. Inspired by the Vanguard challenge and our commitment to improving financial futures, we dove into the development process. Leveraging our skills in Next.JS, React.js, and harnessing the capabilities of OpenAI, we designed an AI-driven credit card match. Alongside this, we incorporated TailWind, TypeScript, and LineChain to ensure a seamless and responsive user experience. These technologies were the building blocks of our project, allowing us to create a user-centric and accessible platform. This journey taught us that technology, when harnessed thoughtfully, can be a powerful tool for financial empowerment, underlining the importance of blending technology, education, and AI to address real-world financial needs.`,
  },
  {
    id: 4,
    header: 'What we learned',
    text: `Creating this project was a journey of learning and innovation. Inspired by the Vanguard challenge and the goal of improving financial futures. Throughout the process, we honed our skills in Next.JS, React.js, and harnessed the potential of OpenAI to build an AI-driven credit card matcher. Along the way, we gained a deeper understanding of the financial challenges faced by college and university students, especially those from underrepresented minority communities. Our project emphasized the importance of user-centric design, accessibility, and providing educational resources. We learned that technology can be a powerful force for financial empowerment, and our project is a testament to the impact of blending technology, education, and AI in addressing real-world financial needs.`,
  },
]

const AccordionItem = (props: any) => {
  const contentEl = useRef<HTMLDivElement | null>(null)
  const { handleToggle, active, faq } = props
  const { header, id, text } = faq

  return (
    <div className='rc-accordion-card'>
      <div className='rc-accordion-header'>
        <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
          <h5 className='rc-accordion-title'>{header}</h5>
          <i className='fa fa-chevron-down rc-accordion-icon'></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={active === id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className='rc-accordion-body'>
          <p className='mb-0'>{text}</p>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const [active, setActive] = useState(null)

  const handleToggle = (index: any) => {
    if (active === index) {
      setActive(null)
    } else {
      setActive(index)
    }
  }

  return (
    <>
      <div className='container-fluid  mb-5'>
        <div className='row justify-content-center'>
          <div className='col-md-8 mt-2'>
            <div className='cardAccord p-4'>
              <div className='card-body'>
                <h4 className='form-heading mb-4 text-primary text-center mt-3'></h4>
                {faqs.map((faq, index) => {
                  return <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import React from 'react'
import Button from '../Button'

function Contact() {
  return (
    <div className="w-full py-12 dark:text-white ">
    <div className="container grid max-w-3xl px-4 md:px-6 gap-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in touch</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject">Subject</label>
          <input id="subject" placeholder="Enter the subject of your message" />
        </div>
        <div className="space-y-2">
          <label htmlFor="message">Message</label>
          <textarea className="min-h-[150px]" id="message" placeholder="Enter your message" />
        </div>
        <Button>Send message</Button>
      </div>
    </div>
  </div>
  )
}

export default Contact
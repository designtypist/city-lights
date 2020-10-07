import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <form class="my-16"
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      netlify
      >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>
        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name" for="first-name">
            First Name
          </label>
          <input class="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="first-name" name="first-name" type="text" placeholder="John" onChange={handleChange} required />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name" for="last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full text-gray-700 border border-black py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="last-name" name="last-name" type="text" placeholder="Doe" onChange={handleChange} required />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email" for="email">
            E-mail
          </label>
          <input class="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="email" name="email" type="email" placeholder="johndoe@thewordbecamefresh.ca" onChange={handleChange} required />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message" for="message">
            Message
          </label>
          <textarea class=" no-resize appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
            id="message"  name="message" placeholder="Your message goes here" onChange={handleChange} required></textarea>
        </div>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button type="submit" class="shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8">
            Send
          </button>
        </div>
      </div>
    </form>
  )
}
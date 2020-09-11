import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <nav role="navigation"  class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img src={'/citylights-logo.png'} alt="City Lights Logo" />
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <ul class="text-sm">
          <li class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
            <Link to="/">Home</Link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4">
            <Link to="/media/">Media</Link>
          </li>
          <li class="block mt-4 lg:inline-block lg:mt-0 text-black">
            <Link to="/contact/">Contact</Link>
          </li>
      </ul>
      <div>
        <Link to="#">
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </Link>
        <Link to="#">
            <FontAwesomeIcon icon={['fab', 'youtube']} />
        </Link>
      </div>
    </div>
  </nav>
)
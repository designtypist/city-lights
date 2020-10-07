import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <nav role="navigation"  class="flex content-start justify-between flex-wrap">
    <div class="flex-initial w-1/3 px-2">
      <Link to="/">
        <img class="w-56"  src={'../citylights-logo.png'} alt="City Lights Logo" />
      </Link>
    </div>
    <div class="flex-initial w-2/3 text-right lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-black border-black">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="flex-initial w-1/3 px-2 text-center">
      <ul class="mt-4 text-black text-base">
        <li class="lg:inline-block lg:mt-0 mr-4">
          <Link to="/">Home</Link>
        </li>
        <li class="lg:inline-block lg:mt-0 mr-4">
          <Link to="/media/">Media</Link>
        </li>
        <li class="lg:inline-block lg:mt-0">
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </div>
    <div class="flex-initial w-1/3 text-right p-4">
      <Link class="text-2xl px-2" to="#">
          <FontAwesomeIcon icon={['fab', 'youtube']} />
      </Link>
      <Link class="text-2xl px-2" to="#">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </Link>
      <Link class="text-2xl px-2" to="#">
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </Link>
    </div>
  </nav>
)
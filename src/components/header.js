import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <nav role="navigation" class="flex content-start justify-between flex-wrap sm:m-6 xl:m-2">
    <div class="flex-initial w-1/3">
      <Link to="/">
        <img class="w-56"  src={'../citylights-logo.png'} alt="City Lights Logo" />
      </Link>
    </div>
    <div class="flex-initial w-2/3 text-right md:hidden">
      <input id="nav-menu" class="hidden" type="checkbox" />
      <label class="flex-initial items-center px-3 py-2 border rounded text-black border-black" htmlFor="nav-menu" for="nav-menu">
        <FontAwesomeIcon icon={['fa', 'bars']} />
      </label>
    </div>
    <div class="flex-initial md:w-1/3 w-full text-center">
      <ul class="text-black text-base md:mt-4 sm:mt:0">
        <li class="md:inline-block md:mr-4 md:my-0 sm:my-2">
          <Link to="/">Home</Link>
        </li>
        <li class="md:inline-block md:mr-4 md:my-0 sm:my-2">
          <Link to="/media/">Media</Link>
        </li>
        <li class="md:inline-block md:mr-4 md:my-0 sm:my-2">
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </div>
    <div class="flex-initial md:w-1/3 sm:w-full md:text-right sm:text-center p-4">
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
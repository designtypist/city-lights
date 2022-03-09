import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <nav role="navigation" class="flex flex-wrap content-start xl:m-2 sm:m-6">
    <div class="flex-initial w-1/3">
      <Link to="/">
        <img class="w-56"  src={'../citylights-logo.png'} alt="City Lights Logo" />
      </Link>
    </div>

    <div class="flex-initial w-2/3 text-right md:hidden p-4">
      <label class="flex-initial items-center cursor-pointer px-3 py-2 border rounded text-black border-black" htmlFor="nav-menu" for="nav-menu">
        <FontAwesomeIcon icon={['fa', 'bars']} />
      </label>
    </div>
    <input class="hidden cursor-pointer" id="nav-menu" type="checkbox" />
    <div class="mobile-nav hidden w-full text-center text-black uppercase md:mb-0 mb-6">
      <ul>
        <li class="text-3xl my-8">
          <Link to="/">Home</Link>
        </li>
        <li class="text-3xl my-8">
          <Link to="/media/">Media</Link>
        </li>
        <li class="text-3xl my-8">
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
      <ul>
        <li class="inline-block">
          <Link class="text-3xl px-2" to="#">
            <FontAwesomeIcon icon={['fab', 'youtube']} />
          </Link>
        </li>
        <li class="inline-block">
          <Link class="text-3xl px-2" to="#">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </Link>
        </li>
        <li class="inline-block">
          <Link class="text-3xl px-2" to="#">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </Link>
        </li>
      </ul>
    </div>

    <div class="flex-initial md:w-1/3 md:text-center md:inline-block hidden uppercase">
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
    <div class="flex-initial md:w-1/3 md:text-right md:inline-block hidden uppercase">
      <ul class="p-4">
        <li class="inline-block">
          <Link class="text-3xl px-2" to="#">
            <FontAwesomeIcon icon={['fab', 'youtube']} />
          </Link>
        </li>
        <li class="inline-block">
          <Link class="text-3xl px-2" to="#">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </Link>
        </li>
        <li class="inline-block">
          <Link class="text-3xl px-2" to="#">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
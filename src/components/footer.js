import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <footer>
      <hr class="my-4 border-2 border-black" />
      <div class="flex mt-12 mb-6">
        <div class="w-1/2 pl-24">
            <h2 class="uppercase text-2x1">About</h2>
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan mollis gravida. Duis varius nisi quis metus faucibus, et ullamcorper justo facilisis. Nullam vel rhoncus mi. Quisque ultrices scelerisque urna, non luctus sem vehicula sit amet. Sed ultrices euismod leo ut pellentesque. Duis eu sapien...</p>
            <div class="my-6">
                <Link class="bg-black text-white font-bold py-2 px-4 rounded" to="/#about">
                    Read More
                </Link>
            </div>
        </div>
        <div class="w-1/4 text-center items-center">
            <FontAwesomeIcon icon={['fas', 'headset']} size="lg" />
            <h4 class="uppercase m-4">Want To Support Us</h4>
            <Link class="bg-black text-white font-bold py-2 px-4 rounded" to="/support">
                Support
            </Link>
        </div>
        <div class="w-1/4 text-center items-center">
            <FontAwesomeIcon icon={['fas', 'phone']} size="lg" />
            <h4 class="uppercase m-4">Get in Touch with Us</h4>
            <Link class="bg-black text-white font-bold py-2 px-4 rounded" to="/contact">
                Contact
            </Link>
        </div>
      </div>
      <div class="flex bg-black text-white">
        <div class="flex w-1/2 items-center p-4 pl-24">
            <Link to="/" class="flex-initial ">
                <img class="w-40 mr-6" src={'/citylights-logo-invert.png'} alt="City Lights Logo" />
            </Link>
            <div class="flex-initial px-2">
                <p>© 2013-2020 CityLights. All right reserved </p>
                <p>Designed and Developed by James C</p>
            </div>
        </div>
        <div class="w-1/2 self-center text-right pr-24">
            <Link class="text-2xl px-2" to="#">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
            </Link>
            <Link class="text-2xl px-2" to="#">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </Link>
            <Link class="text-2xl px-2" to="#">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
            </Link>
        </div>
      </div>
  </footer>
)
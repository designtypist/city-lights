import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <footer>
      <div>
        <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan mollis gravida. Duis varius nisi quis metus faucibus, et ullamcorper justo facilisis. Nullam vel rhoncus mi. Quisque ultrices scelerisque urna, non luctus sem vehicula sit amet. Sed ultrices euismod leo ut pellentesque. Duis eu sapien...</p>
            <Link to="/#about">Read More</Link>
        </div>
        <div>
            <FontAwesomeIcon icon={['fas', 'headset']} />
            <h2>Want To Support Us</h2>
            <Link to="/support">Support</Link>
        </div>
        <div>
            <FontAwesomeIcon icon={['fas', 'phone']} />
            <h2>Get in Touch with Us</h2>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div class="bg-black">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img src={'/citylights-logo-invert.png'} alt="City Lights Logo" />
            <div>
                <p>© 2013-2020 CityLights. All right reserved </p>
                <p>Designed and Developed by James C</p>
            </div>
        </div>
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
  </footer>
)
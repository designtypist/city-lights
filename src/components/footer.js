import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <footer>
    <hr class="my-4 border-2 border-black" />
    <div class="flex flex-wrap mt-12 mb-6">
        <div class="flex-auto lg:w-1/2 w-full lg:text-left text-center lg:pl-24 px-8 m-auto ">
            <h2 class="uppercase lg:text-2x1 text-xl">About</h2>
            <p class="xl:text-base text-sm overflow-hidden h-32 break-words">God loved the world – including the hip-hop community – so much that he sent his Son, Jesus, not to condemn us, but to save us. Jesus showed us the love & truth of God, died for our sins & resurrected, and Jesus left us with a mission: Going and making disciples (“apprentices”), baptising them and teaching them to follow all that he taught. One people group that is often left out is the hip-hop community: emcees, deejays, breakers, graffiti writers, those involved with knowledge, fans, etc. God has called us to reach them, in their world/culture, and to make disciples that make more disciples. The vision is to see Canada’s hip-hop community following Jesus Christ. We will do this by providing events to better their skills, events to serve others, building genuine loving relationships, and discipling them in a way that is natural to the hip-hop culture. Can you imagine how dope it will be if, because they follow Jesus so well, that instead of having a reputation for misogyny, drugs, and violence, they became known for their grace, generosity, kindness, peace, joy, and helping others have a relationship with God? There is no blueprint for this pioneering mission (in Canada), we will be faithful to the work as God makes the work fruitful. We will love the people, encourage the hip-hop elements, bring & show the truth of Christ, and let God lead – all while being ourselves.</p>
            <div class="my-6">
                <Link class="bg-black text-white font-bold py-2 px-4 rounded" to="/#who-we-be">Read More</Link>
            </div>
        </div>
        <div class="lg:w-1/4 w-full text-center items-center p-4">
            <FontAwesomeIcon icon={['fas', 'headset']} size="lg" />
            <h4 class="uppercase m-4">Want To Support Us</h4>
            <Link class="bg-black text-white font-bold py-2 px-4 rounded" to="/support">
                Support
            </Link>
        </div>
        <div class="lg:w-1/4 w-full text-center items-center p-4">
            <FontAwesomeIcon icon={['fas', 'phone']} size="lg" />
            <h4 class="uppercase m-4">Get in Touch with Us</h4>
            <Link class="bg-black text-white font-bold py-2 px-4 rounded" to="/contact">
                Contact
            </Link>
        </div>
    </div>
      <div class="flex flex-wrap bg-black text-white">
        <div class="flex flex-wrap lg:w-2/3 w-full m-auto items-center lg:justify-start justify-center lg:pl-24 p-4">
            <Link to="/">
                <img class="w-40 m-auto" src={'../citylights-logo-invert.png'} alt="City Lights Logo" />
            </Link>
            <div class="lg:text-left text-center p-6">
                <p>© 2013-2020 CityLights. All right reserved </p>
                <p>Designed and Developed by James C</p>
            </div>
        </div>
        <div class="flex-initial lg:w-1/3 w-full self-center lg:text-right text-center md:pr-24 p-4">
            <Link class="text-3xl px-2 text-white" to="#">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
            </Link>
            <Link class="text-3xl px-2 text-white" to="#">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </Link>
            <Link class="text-3xl px-2 text-white" to="#">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
            </Link>
        </div>
      </div>
  </footer>
)
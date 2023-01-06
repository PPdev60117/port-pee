import React from 'react'
import './contact.css'
import{TiSocialFacebook,TiSocialInstagram,TiSocialGooglePlus} from 'react-icons/ti'

export default function Contact() {
  return (
    <div className='container-contact'>
        <div className='container-contact-line'>
            <div >
                <h1>Contact Me</h1>
            </div>

            <ul>
                <li><a href='https://web.facebook.com/peerapat.sattarattana/'><TiSocialFacebook/></a></li>
                <li><a href='https://www.instagram.com/as_peerinnn/'><TiSocialInstagram/></a></li>
                <li><a><TiSocialGooglePlus/></a></li>
            </ul>
        </div>
    </div>
  )
}

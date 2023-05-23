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
                <a href='https://web.facebook.com/peerapat.sattarattana/' className='contact'><TiSocialFacebook/></a>
                <a href='https://www.instagram.com/as_peerinnn/' className='contact'><TiSocialInstagram/></a>
                <a className='contact' onClick={()=>{alert('pee.lovepeem@gmail.com')}}><TiSocialGooglePlus/></a>
            </ul>
        </div>
    </div>
  )
}

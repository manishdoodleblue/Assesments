import React, {useState} from 'react'
import './Firstpro.css'
import { ImMail2 } from "react-icons/im";
import { FiPhoneCall} from "react-icons/fi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { ImPinterest2 } from "react-icons/im";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { RiFacebookCircleLine} from "react-icons/ri";
import { BiBasketball } from "react-icons/bi";
function Firstpro(){
    return (
        <div className='a'>
            <ImMail2  className='b'/>
            sample@sample.com
            <FiPhoneCall size='35' className='c' />
            00 1234 5678
            <TiSocialGooglePlus size='30'className='d'/>
            <ImPinterest2 size='30'className='e'/>
            <TiSocialTwitterCircular size='40'className='f'/>
            <RiFacebookCircleLine size='35'className='g'/>
            <BiBasketball size='35'className='h'/>

        </div>
    )
}
export default Firstpro;
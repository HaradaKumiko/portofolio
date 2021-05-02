import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function ContactPage(props){
    
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
            Untuk menghubungi Saya, silahkan kirimkan email ke 
            <a className="a-mail" href="mailto:fariv.fariv12@gmail.com"> <strong> fariv.fariv12@gmail.com </strong> </a> 
            </Content>
        </div>
    )

}


export default ContactPage
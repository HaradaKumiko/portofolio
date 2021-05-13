import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import FarhanRivaldy from '../assetss/images/itsme.jpg';
import Smk2 from '../assetss/images/smk2.jpg';

function AboutPage(props){
    return(
<div>
    <Hero title={props.title}/>
    <Content>
    <Image src={FarhanRivaldy} alt={FarhanRivaldy} fluid={true}/>
    <p className="text-indent"> 
    Saya merupakan seorang anak dari orang tua yang sangat luar biasa dilahirkan di tanah suku Dayak,
    tepatnya di Tanjung Selor pada 10 Desember 2002. Tapi karena Ayah Saya dipindah tugaskan kembali 
    ke kota kelahirannya akhirnya Saya besar dan tinggal di Balikpapan, cukup jauh juga tapi sebagai 
    seorang anak yang berbakti saya tidak pernah protes sampai hari ini</p>

    <p className="text-indent">
    Waktu SD dan SMP Saya seringkali dihina karena gaptek dengan teknologi, bahkan dulu 
    sangking gaptek nya membuat akun gmail saja Saya meminta tolong kepada orang konter hp. 
    maklum karena di keluarga besar Saya tidak ada yang berkecimpungan di Dunia IT 
    sehingga Saya tidak ada motivasi dan bingung mau mulai dari mana di bidang ini.
    Karena tak tahan dengan hinaan dan kebodohan Saya sendiri, menjadikan Saya termotivasi 
    untuk belajar tentang teknologi dan berusaha meniti karir di Dunia IT sehingga bisa 
    mempermudah bila ada keluarga Saya nantinya yang ingin terjun mengikuti jejak Saya. 
    </p>
    
    <Figure>
    <Figure.Image src={Smk2} alt={Smk2} fluid={true}/>
    </Figure>
    <Figure.Caption>
    <p className="text-indent">
        Foto bareng teman sekelas, Saya ada di nomor 4 dari kiri 
    </p>
    </Figure.Caption>
    <p className="text-indent">
    Saya memutuskan untuk masuk di 
    <a className="a-mail" target="_blank" rel="noopener noreffere" href="https://smkn2balikpapan.sch.id"> 
    <strong> SMKN 2 Balikpapan jurusan TKJ (Teknologi Komputer dan Jaringan) </strong> </a> 
    walaupun basic Saya ada di : Jaringan, Server, Mikrotik, dan sebagainya, tapi karena melihat minat pasar
    Saya memutuskan untuk pindah haluan yaitu belajar programming, memang berat rasanya tapi tak menjadikan 
    alasan tersebut untuk berhenti belajar dan akhirnya Saya harus menggunakan kacamata minus dan stamina 
    tubuh yang turun drastis karena sering didepan laptop setiap harinya tapi Saya sendiri paham harus ada 
    yang dikorbankan demi mencapai sesuatu
    </p>

    <p className="text-indent">
    Saat ini saya merupakan seorang Mahasiswa di Universitas Swasta di Balikpapan, tepatnya di
    <a className="a-mail" target="_blank" rel="noopener noreffere" href="https://universitasmulia.ac.id"> 
    <strong>  Universitas Mulia(dulu Stikom) </strong> </a>. Juga sambil mencari kerjaan freelance 
    demi menambah uang saku, sembari belajar sendiri dan mencoba untuk menghasilkan lebih banyak 
    Projects lagi yang bisa menambah skill yang Saya Miliki </p>
    </Content>
    </div>
    )

}


export default AboutPage
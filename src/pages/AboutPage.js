import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props){
    
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
               <p> Saya merupakan seorang anak dari orang tua yang sangat luar biasa
                dilahirkan di tanah suku Dayak, tepatnya di Tanjung Selor pada 10 Desember 2002
                Padahal Saya Sendiri seorang keturunan Bugis Sengkang, karena pada waktu itu Ayah Saya 
                ditugaskan disitu dan akhirnya bertemu dengan Ibu Saya yang kebetulan orang asli 
                disana dan lahirlah Saya di muka bumi ini, dan akhirnya Saya besar dan tinggal di 
                Balikpapan </p>

                <p>
                Ketertarikan utama saya adalah segala sesuatu yang berhubungan dengan dunia IT. 
                karena waktu SD dan SMP Saya seringkali dihina karena gaptek dengan teknologi,
                maklum karena di keluarga besar Saya tidak ada yang berkecimpungan di Dunia IT 
                sehingga Saya tidak ada motivasi dan Ketertarikan di bidang ini. Bahkan dulu 
                sangking gaptek nya Saya membuat akun gmail saja Saya meminta tolong kepada 
                orang konter hp. Karena tak tahan dengan hinaan dan kebodohan Saya sendiri, 
                menjadikan Saya termotivasi untuk belajar tentang teknologi dan berusaha meniti 
                karir di Dunia IT sehingga bisa mempermudah bila ada keluarga Saya yang ingin terjun 
                mengikuti jejak Saya. 
                </p>

                <p>
                Saya memutuskan untuk masuk di SMKN 2 Balikpapan jurusan TKJ (teknologi Komputer dan Jaringan) 
                walaupun basic Saya ada di : Jaringan, server, Mikrotik, dan sebagainya, karena melihat minat pasar
                Saya memutuskan untuk pindah haluan yaitu belajar programming, memang berat rasanya apalagi hanya 
                sedikit teman Saya yang ikut pindah haluan tapi tak menjadikan alasan tersebut untuk berhenti belajar
                dan akhirnya Saya harus menggunakan kacamata minus dan stamina tubuh yang turun drastis karena sering 
                didepan laptop setiap harinya tapi Saya sendiri paham harus ada yang dikorbankan demi mencapai sesuatu
                </p>

                <p>
                Saat ini saya merupakan seorang Mahasiswa di Universitas Swasta di Balikpapan, 
                tepatnya di Universitas Mulia( dulu Stikom). Juga sambil mencari kerjaan freelance 
                demi menambah uang saku, sembari belajar sendiri dan mencoba untuk menghasilkan 
                lebih banyak Projects lagi yang bisa menambah skill yang Saya Miliki
                </p>
            </Content>
        </div>
    )

}


export default AboutPage
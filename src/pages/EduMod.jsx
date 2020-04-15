import React, { Component } from 'react';
import TabVirtual from '../components/TabVirtual.jsx'
import TabPresencial from '../components/TabPresencial.jsx'
<<<<<<< HEAD
import '../assets/CSS/tabs.css'
=======
import Footer from '../components/Footertemp.jsx'

>>>>>>> 17e473f5813347efd1562bdb3faef995abc19161
class EduMod extends Component {

    render() {
        return (
<<<<<<< HEAD
            <div className="bg-modalities container">
                <ul class="nav nav-outline pt-3 justify-content-center " id="pills-tab" role="tablist">
=======
            <div className="container">
            <div className="container">
                <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
>>>>>>> 17e473f5813347efd1562bdb3faef995abc19161
                    <li class="nav-item" >
                        <a class="nav-link  px-5 active text-light" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"> <h3>VIRTUAL</h3></a>
                    </li>
                    <li class="nav-item" >
<<<<<<< HEAD
                        <a class="nav-link px-5 text-light" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"> <h3>PRESENCIAL</h3></a>
=======
                        <a class="nav-link px-5" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" id="Home">Presencial</a>
>>>>>>> 17e473f5813347efd1562bdb3faef995abc19161
                    </li>
                   
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><TabVirtual/></div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><TabPresencial/></div>
                    
                </div>
              
            </div>
            <Footer/>
            </div>
        );
    }
}

export default EduMod;





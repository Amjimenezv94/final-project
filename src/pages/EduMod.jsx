import React, { Component } from 'react';
import TabVirtual from '../components/TabVirtual.jsx'
import TabPresencial from '../components/TabPresencial.jsx'
class EduMod extends Component {

    render() {
        return (
            <div className="container">
                <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li class="nav-item" >
                        <a class="nav-link  px-5 active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Virtual</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link px-5" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Presencial</a>
                    </li>
                   
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><TabVirtual/></div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><TabPresencial/></div>
                    
                </div>
            </div>

        );
    }
}

export default EduMod;





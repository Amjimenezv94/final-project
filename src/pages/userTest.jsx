import React, { Component } from 'react';
import UserTextImg from '../components/UserTextImg';
import '../assets/CSS/userTest.css'
import UserTextImg2 from '../components/UserTextImg2';
import UserTextImg3 from '../components/UserTextImg3';
import UserTextImg4 from '../components/UserTextImg4';

class UserTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paso: 0,
        };
    }

    displayComponent = (paso) => {
        if (this.state.paso !== paso) return 'd-none'
    }

    incrementarPaso = () => {
        this.setState({
            paso: this.state.paso +1,
        });
    }

    render() {
        return (
                <div className="panel py-3 panel-default container">
                    <div className="panel-body mt-5">
                        <div className={this.displayComponent(0)}>
                            <UserTextImg />
                        </div>

                        <div className={this.displayComponent(1)}>
                            <UserTextImg2/>
                        </div>

                        <div className={this.displayComponent(2)}>
                            <UserTextImg3/>
                        </div>

                        <div className={this.displayComponent(3)}>
                            <UserTextImg4/>
                        </div>

                        <div className="col-lg-12 text-center pb-4">
                            <button
                                className="boton-user-test btn btn-outline-light"
                                onClick={this.incrementarPaso}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
    

        );
    }
}

export default UserTest;
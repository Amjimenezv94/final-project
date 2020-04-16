import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="inferior justify-content-center"> <a href="#Home"><img src="https://static.wixstatic.com/media/2ec355_3aef23e29c284cd087d025640983d635~mv2.gif" width="30px" heigth="35px" alt="" /></a></div>
                <footer className="container p-5 text-mute justify-content-center text-align-center">
                    <p className="text-mute">© 2020 AcademiaGeek  | ORIENTAR-APP.</p>
                </footer>
            </div>

        );
    }
}

export default Footer;
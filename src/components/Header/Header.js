import React, { Component } from 'react';
import './Header.css';
import Logo from '../../assets/Logo-2.svg';
import anime from 'animejs';
import Sidebar from '../Sidebar/Sidebar';

const test = document.body.getElementsByClassName('sidebar');
const header2 = document.body.getElementsByClassName('headerStyle2');

class Header extends Component {
    state = {
        position: window.pageYOffset,
        count: 0,
        sidebar: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        test[0].style.visibility = "hidden";
        anime({
            targets: '#logo',
            easing: 'easeIn',
            duration: 3000
        })
    }

    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState(
            { count: window.pageYOffset }
        )
    }


    onClick = () => {
        test[0].style.visibility = "visible";
        document.body.style.width = '80%';
        // document.getElementsByClassName('headerStyle2').style.width = "80";
        if (window.pageYOffset > 100) {
            header2[0].style.width = "80%";
        }
    }

    secondClick = () => {
        header2[0].style.width = '80%';
    }
    render() {
        return (
            <div>
                {/* {console.log(<Sidebar/>)} */}
                <div className={"headerStyle1"}>
                    <p></p>
                    <a href={'/'} id={'main'}>FromADistance</a>
                    <p></p>
                    <button id={'topics'} onClick={this.onClick}>Topics</button>
                    {/* <a href={'http://www.fromadistance.us/About'}>About</a>
                    <a href={'http://www.fromadistance.us/Contact'}>Contact</a> */}
                    {/* <p></p> */}
                </div>
                {window.pageYOffset < 100 ? '' :
                    <div className={"headerStyle2"} style={{width: document.body.style.width}}>
                        <p></p>
                        <a href={'/'}><div><img id={'logo'} src={Logo} alt={'From A Distance Logo'}></img></div></a>
                        <p></p>
                        <button id={'topics'} onClick={this.onClick}>Topics</button>
                    </div>}
                <Sidebar />
            </div>
        );
    }
}

export default Header;
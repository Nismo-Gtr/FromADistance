import React from 'react';
// import mountains from '../../assets/mountains.jpg';
import Logo from '../../assets/Logo-1.svg';
import Header from '../Header/Header';


const wrapped = {
    height: '100vh',
    background: 'rgba(0,0,0,0.4)',
    // fontFamily: 'Cousine, monospace',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
}

const landing = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1
}

const subHeading = {
    fontSize: '2.5vh',
    fontFamily: 'Open Sans',
    fontWeight: '300'
}

const logoStyle = {
    width: 'auto',
    height: '20em',
    margin: '5em 0 0 0',
    zIndex: 1
}

const categoryStyle = {
    fontFamily: 'Open Sans Condensed',
    fontSize: '12em',
    fontWeight: '300',
    textAlign: 'center'
}

export default function Landing(props) {
    return (
        <div style={wrapped}>
            <Header />
            <img src={props.img} style={landing} alt={""}></img>
            {props.category === undefined ? <div><img src={Logo} id={'Logo'} style={logoStyle} alt={""}></img>
            <p style={subHeading}>Modern News for Modern Times</p></div> :
            <h1 style={categoryStyle}>{props.category}</h1>}
        </div>
    );
}


import React, { Component } from 'react';
import './Sidebar.css';

const sidebar = document.getElementsByClassName('sidebar');
const header2 = document.getElementsByClassName('headerStyle2');

class Sidebar extends Component {

    componentDidMount() {
        // header2[0].style.width = '80%';
    }
    
    businessClick = () => {
        document.body.title = 'business';
        console.log(document.body.title)

    }
    newClick = () => {
        sidebar[0].style.visibility = "hidden";
        document.body.style.width = "100%";
        if (header2[0] !== undefined)
            header2[0].style.width = '100%';

    }
    

    render() {
        return (
            <div className={'sidebar'}>
                <ul>
                    <li onClick={this.newClick}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" className="cross" viewBox="0 0 512 512">
                        <title></title>
                        <g id="icomoon-ignore">
                        </g>
                        <path id='cross' fill='rgba(255,255,255,0.8)' d="M507.331 411.33c-0.002-0.002-0.004-0.004-0.006-0.005l-155.322-155.325 155.322-155.325c0.002-0.002 0.004-0.003 0.006-0.005 1.672-1.673 2.881-3.627 3.656-5.708 2.123-5.688 0.912-12.341-3.662-16.915l-73.373-73.373c-4.574-4.573-11.225-5.783-16.914-3.66-2.080 0.775-4.035 1.984-5.709 3.655 0 0.002-0.002 0.003-0.004 0.005l-155.324 155.326-155.324-155.325c-0.002-0.002-0.003-0.003-0.005-0.005-1.673-1.671-3.627-2.88-5.707-3.655-5.69-2.124-12.341-0.913-16.915 3.66l-73.374 73.374c-4.574 4.574-5.784 11.226-3.661 16.914 0.776 2.080 1.985 4.036 3.656 5.708 0.002 0.001 0.003 0.003 0.005 0.005l155.325 155.324-155.325 155.326c-0.001 0.002-0.003 0.003-0.004 0.005-1.671 1.673-2.88 3.627-3.657 5.707-2.124 5.688-0.913 12.341 3.661 16.915l73.374 73.373c4.575 4.574 11.226 5.784 16.915 3.661 2.080-0.776 4.035-1.985 5.708-3.656 0.001-0.002 0.003-0.003 0.005-0.005l155.324-155.325 155.324 155.325c0.002 0.001 0.004 0.003 0.006 0.004 1.674 1.672 3.627 2.881 5.707 3.657 5.689 2.123 12.342 0.913 16.914-3.661l73.373-73.374c4.574-4.574 5.785-11.227 3.662-16.915-0.776-2.080-1.985-4.034-3.657-5.707z"></path>
                    </svg></li>
                    <li><a href={'/Business'} onClick={this.businessClick} alt={'Business'}>Business</a></li>
                    <li><a href={'/Entertainment'} alt={'Entertainment'}>Entertainment</a></li>
                    <li><a href={'/Health'} alt={'Health'}>Health</a></li>
                    <li><a href={'/Science'} alt={'Science'}>Science</a></li>
                    <li><a href={'/Sports'} alt={'Sports'}>Sports</a></li>
                    <li><a href={'/Technology'} alt={'Technology'}>Technology</a></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
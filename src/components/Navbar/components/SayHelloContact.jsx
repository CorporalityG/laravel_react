import React, { useContext } from 'react'
import './SayHelloContact.css'
import OutsideClickHandler from 'react-outside-click-wrapper';
import { NavbarContext } from '../Context/NavbarContext';
import topHandler from '../../../CommonHandler/TopHandler';

function SayHelloContact() {

    const { showSayHelloContact, setShowSayHelloContact, isLargeScreen, setNavClicked } = useContext(NavbarContext);
    const closeOnLink = () => {
        setShowSayHelloContact(false);
        setNavClicked(false);
        topHandler();
    }

    return (
        <OutsideClickHandler className="outside-handler" onOutsideClick={() => setShowSayHelloContact(false)}>
            <div className={`say-hello-container ${showSayHelloContact ? "" : "hidden"}`} onMouseOver={() => { if (isLargeScreen) setShowSayHelloContact(true) }} onMouseLeave={() => { if (isLargeScreen) setShowSayHelloContact(false) }}>
                <div className="say-hello-section">
                    <div className="say-hello-item" onClick={() => { window.open("tel:+61 2 83794089", "_self"); closeOnLink(); }}>
                        <div className="say-hello-contact-flag australia-flag"></div>
                        <div className="say-hello-contact-no">+61 2 83794089</div>
                    </div>
                    <div className="say-hello-item" onClick={() => { window.open("tel:+1 (415) 426-7999", "_self"); closeOnLink(); }}>
                        <div className="say-hello-contact-flag usa-flag"></div>
                        <div className="say-hello-contact-no">+1 (415) 426-7999</div>
                    </div>
                </div>
            </div>
        </OutsideClickHandler>
    )
}

export default SayHelloContact
import React from "react";
import "./style.scss";

export default function Footer(){
    return (
        <div className="footer">
            <p>Hasuzawa@Home</p>
            {/* dont use # to scroll to top */}
            <a href="#root">return to top</a>
            {/*add some github icon link and contact info */}
        </div>
    );
}
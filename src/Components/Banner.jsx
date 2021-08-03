import React from "react";
import "./style.scss";

export default function Banner(props){
    //keep the banner narrow and concise, so that one glance and people can understand it
    return (
        <div className={"banner " + (props.bannerFolded ? "folded" : "expanded")}>
            <p>some filler content<br />
          hello world<br />
          last line
          </p>
        </div>
    );
}
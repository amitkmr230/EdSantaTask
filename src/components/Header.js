import React from "react";

function Header() {
  return (
    <>
      <div>
        <span className=" profileName text-white">Samsung Mobile</span>
        <span>
          <i className="fas fa-badge-check text-white verified"></i>
        </span>
        <span className="userName">@SamsungMobile</span>
        <span className="timeStamp">&#183; 3h</span>
        <i className="fas fa-chevron-down float-right downArrow"></i>
      </div>
      <div>
        <a href="#/" className="hashtag">
          #SamsungGalaxy #BTS @BTS_twt @BTS_bighit
        </a>
      </div>
    </>
  );
}

export default Header;

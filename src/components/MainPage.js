import React from "react";
import MainContent from "./MainContent";
import ProfilePic from "./ProfilePic";

function MainPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <ProfilePic />
          </div>
          <div className="col-md-11">
            <MainContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;

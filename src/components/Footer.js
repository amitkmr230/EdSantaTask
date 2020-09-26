import React, { useState } from "react";

function Footer() {
  const [like, setLike] = useState(0);
  const onCLicked = () => {
    setLike(like + 1);
  };
  return (
    <>
      <div className="footer">
        <span className="icons">
          <i className="far fa-comment"></i> 711
        </span>
        <span className="icons">
          <i className="fal fa-code-merge"></i> 13.7K
        </span>
        <span className="icons">
          <i onClick={onCLicked} className="far fa-heart"></i> {like}
        </span>
        <span className="icons">
          <i className="fal fa-upload"></i>
        </span>
      </div>
    </>
  );
}

export default Footer;

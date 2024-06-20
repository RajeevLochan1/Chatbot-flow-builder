import React from "react";

const Header = ({ saveFlow }) => {
  return (
    <div className="savingChange">
      <button onClick={saveFlow}>Save Changes</button>
    </div>
  );
};

export default Header;

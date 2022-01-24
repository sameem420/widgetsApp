import React from "react";
import Link from "./Link";
function Header() {
  return (
    <div className="ui container" style={{ margin: 5 }}>
      <div className="ui segment">
        <div className="ui secondary pointing menu">
          <Link className="item active" href="/">
            Home
          </Link>
          <Link className="item" href="/search">
            Search
          </Link>
          <Link className="item" href="/translate">
            Translate
          </Link>
          <Link className="item" href="/dropdown">
            Dropdown
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

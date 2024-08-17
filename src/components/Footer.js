import React from "react";

class Footer extends React.Component {
  getDate() {
    let date = new Date().getFullYear();
    return date;
  }
  render() {
    return (
      <footer className="container">
        <p>Daniel Hinbest &middot; {this.getDate()}</p>
      </footer>
    );
  }
}

export default Footer;

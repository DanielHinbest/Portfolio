import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <img width="140" height="140" focusable="false" src={this.props.imagePath} alt=""/>

                <h2>{this.props.sectionTitle}</h2>
                <p>{this.props.paragraph}</p>
                {this.props.button}
            </div>
        );
    }
}

export default About;
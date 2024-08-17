import React from "react";

class Project extends React.Component {
    render() {
        return (
            <div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                        <div className={this.props.firstDivClass}>
                            <h2 className="featurette-heading">{this.props.featuretteHeader}</h2>
                            <p className="lead">{this.props.description}</p>
                            <p><a class="btn btn-secondary" href={this.props.GitHubPath}>View code &raquo;</a></p>
                        </div>
                        <div className={this.props.secondDivClass}>
                            <img class="featurette-image img-fluid mx-auto" src={this.props.image} alt={this.props.imageAltText}/>
                        </div>
                </div>
            </div>
        );
    }
}
export default Project;
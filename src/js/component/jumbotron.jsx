import React from "react";

const Jumbotron = () => {
    const EstiloJumbotron = {
        backgroundColor: "#e8f1f8",
    };

    return (
        <div className="jumbotron mt-4">
            <div className="container pb-4 rounded" style={EstiloJumbotron}>
                <h1 className="display-4 font-weight-bold"><strong>A Warm Welcome!</strong></h1>
                <p className="lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>
    );
}

export default Jumbotron;
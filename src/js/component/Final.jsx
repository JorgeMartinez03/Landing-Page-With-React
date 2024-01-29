import React from "react";

const Final = () => {

    const EstiloFooter = {
        backgroundColor: "gray",
    };

    return (
        <footer className="text-light text-center py-3" style={EstiloFooter}>
            <div className="container d-flex justify-content-center align-items-end">
                <p>Copyright &copy; Jorge Martinez Martinez 2024</p>
            </div>
        </footer >
    );
}

export default Final;
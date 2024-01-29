import React from "react";

const Carta = ({ title, text, btnText }) => {
    return (
        <div className="card p-0" style={{ width: "18rem" }}>
            <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgVFhUVFyAYFxcYFhUYIBkgHBgfGCAYFRUdHSggGCElHB0aKDEiJjUxLi4uGB8/ODMsPygwNysBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALUBFwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QANRABAAEEAAMHAgQDCQAAAAAAAAECAwQRITFBBRITIlFhkXGxFIGhwTI04RUjNUJSYnLR8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPyab+RneFZyJpiKYmdcec+m0+JYu2Jmb2TNX1jl+qC/2d+Iyqrl255Z1wj2jq4x4rxr9eHNczHc71O+nTQI7ONc7QonKuXqomZnuRHKNJqc2uOypvVfxU+X896/qm7K/w+jXp+7Pr/kq56eN+4JLuJdxLP4ui/VNccaomeE+sNWiqK6Iqp6xtDn6/A1/8Z+zrD/lKN/6Y+wOovW5veD3vNreiL1ub3gxV5ojelPtWnw6acuifNRPzE9P/AHu77Lt/3M5Fc7quTuZ+0AtXrnhWZua5RMsujBuXcX8VVkVd+Y73Ph66a0zqNzKn2hZyr1Gse7ERrjHr9J+gIbuVdudnUTRVqq5MU7/SZj4/VxexquzppyLV6qeMRVE9dreJeszgRd7sUxEdemlfdztO5GqZi1E73POrQJc+LtzIosWL0073MzHt7O8bFv2bveu5c1RrlMf1c5mFVlZMVzd1TEanXOeO/wDpDZtTgZ1NmiuZorieE9JgGmAAAAAAAAAAAAAAAAAAAAADOu15OJlVV02prpq46jfCXeFbvXMirLyKNbjuxT6R7rr0GVRVlYMTj28eao3PcmOm/VPRgz/Zk41U+aeMz772vAMmuvNyrUYlePNPSqrpr2atMRTHdjo9AUci1cyc2miujyU8Z/3T6GFauY1+qz3Z7k8aZ9PZeAR5FrxrE2p6xpnW8nNtWYx/wc96I1FXThwiWqAycjFvW8GjHotzVx3VEfOk1OVlxwjs+Yj68mgAo5c5FjKi/ZomqmY1NMb+YhxYi/lZcZF61NNNMeWJ57nq0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEN2q5FzyRM6iJ1w9Z37/TQJhX8eqKd9zfvG+mp+2/gm9ciZibfKN/Wdb+/D8gWBXm9ciuaZo5dfjj664z8HiVxZirf+afXluf05AsCKi5VVXFM0dN/P77c965VMRy80xvh03rhr2gE4q9+/FPDj5Y6Rwmd8fy1y+iW1c3MxVPHh9o/eQSivFyrw9zVx4b4fw+rnxL0x5Y3w4TrXWePxH2BaHlM7piZAegAAAAAAAAAAAAAAAAAAAAAAAAAAA8iIidxHN6AAAAAAAP/Z"
                className="card-img-top img-fluid"
                alt="Alternative Img"
            />
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center">{text}</p>
            </div>
            <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">
                    {btnText}
                </a>
            </div>
        </div>
    );
};

export default Carta;
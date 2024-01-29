import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Carta from "./Carta";
import Final from "./Final";

const Home = () => {
	const cardData = [
		{

			title: "Card 1 Title",
			text: "Some text for Card 1.",
			btnText: "Find out More!"
		},
		{

			title: "Card 2 Title",
			text: "Some text for Card 2.",
			btnText: "Find out More!"
		},
		{

			title: "Card 3 Title",
			text: "Some text for Card 3.",
			btnText: "Find out More!"
		},
		{

			title: "Card 4 Title",
			text: "Some text for Card 4.",
			btnText: "Find out More!"
		}
	];

	return (
		<div>
			<Navbar />
			<div className="container p-0">
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row row-cols-1 row-cols-md-3 g-4 gap-3 d-flex justify-content-center justify-content-md-between mt-5 mb-5">
					{cardData.map((data, index) => {

						console.log("esta es la información d ela tarjeta ------->", data, "Indice para acceder a ella en el caso de querer---->", index);

						return <Carta key={index} {...data} />
					})}
				</div>
			</div>
			<Final />
		</div>
	);
};

export default Home;
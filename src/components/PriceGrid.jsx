import React, { useState } from "react";

const PriceGrid = () => {
	const [fee, setFee] = useState(29);
	return (
		<div className="container">
			<div className="pricegrid-container">
				<div className="headline">
					<h1>Join our community</h1>
					<h2>30 day hassle-free money back guarantee</h2>
					<p>
						Gain access to our full library of tutorials along with expert code
						reviews.
					</p>
					<p>
						Perfect for any developers who are serious about honing their
						skills.
					</p>
				</div>

                <div className="bottom">
                    <div className="subscription">
                        <h2>Monthly Subscription</h2>
                        <div>
                            <span className="fee">${fee}</span>  <span>per month</span>
                        </div>
                        <div>Full access for less than $1 a day</div>
                        <button>Sign Up</button>
                    </div>

                    <div className="description">
                        <h2>Why Us</h2>
                        <ul>
                            <li>Tutorials by industry experts</li>
                            <li>Peer & expert code reviews</li>
                            <li>Coding exercises</li>
                            <li>Access to our GitHub repos</li>
                            <li>Community forums</li>
                            <li>Flashcard decks</li>
                            <li>New videos every week</li>
                        </ul>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default PriceGrid;

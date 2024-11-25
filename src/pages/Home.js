import React from "react";
import steeringWheel from "../images/steering-wheel-long.jpg";

import '../styles/Home.css';

export default function Home() {
    return (
        <main className="welcome-section">
            <div className="hero">
                <div className="hero-content">
                    <h1>Blu-Moon Driving School</h1>
                    <p className="slogan">Drive With Care.</p>
                </div>
            </div>
            <div className="mainLogo">
                <img src={steeringWheel} alt="Logo" />
            </div>

            <section className="features">
                <h2>Why Choose Us?</h2>
                <p>
                    <li><strong>Experienced Instructors:</strong> Certified and passionate about teaching.</li>
                    <li><strong>Flexible Scheduling:</strong> Lessons that fit your busy life.</li>
                    <li><strong>Safety First:</strong> Structured lessons and defensive driving techniques.</li>
                    <li><strong>Affordable Rates:</strong> High-quality education at competitive prices.</li>
                </p>
            </section>

            <h3 className="footInfo">Ready to hit the road with confidence? Contact us today to book your lesson or learn more about our courses!</h3>
        </main>
    );
}

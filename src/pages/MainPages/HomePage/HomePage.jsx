import "./HomePage.css";
import Icon from "../../../components/Icon/Icon";

function HomePage() {
    return (
        <div className="homepage">
            <header className="hero">
                <div className="hero-text">
                    <h1>Stellar Survivors</h1>
                    <div className="hero-icon">
                        <Icon size={100} />
                    </div>
                    <p>Your journey begins here. Explore the future with us!</p>
                </div>
            </header>

            {/* Features Section */}
            <section className="features">
                <h2>Features Youll Love</h2>

                <div className="feature-list">
                    <div className="feature">
                        <p>
                            StellarSurvivors is a brand new survival server dedicated to providing a fun and safe space for everyone to play!
                            We host often events, minigames, and we have various plugins to simply make this server more efficent.
                            We also have powerful mechanisms for fighting against hackers and other unwanted members in StellarSurvivors.
                            To start playing now, you can connect to StellarSurvivors using the server IP at the top of the page.
                            You can also join our Discord to stay up to date about updates, events, new plugins and commands, and more.
                            Thank you for visiting, and have fun!
                        </p>
                    </div>
                </div>
                <div>
                    <h2>   </h2>
                </div>
                <div className="feature-list">
                    <div className="feature">
                        <h3>No Unfair-Advantages</h3>
                        <p>
                            Exploiters and hackers in Minecraft make the game unfair for everyone.
                            At StellarSurvivors, we made sure to eliminate these exploiters, and prevent them from disturbing our game.
                            With our advanced data-backup system, moderation team, and server anti-cheat, you will not have to worry about any unfair-advantages!
                        </p>
                    </div>
                    <div className="feature">
                        <h3>Responsive Design</h3>
                        <p>
                            We have installed and crafted so many plugins to make gameplay simplier and more effective!
                            With a land claiming system, this helps minimialize greifing.
                            With a /rtp and /tpa system, you can teleport to any player or area you want!
                            Getting lost, thats perfectly okay.
                            Do /home to return to home.
                            Our plugins provide amazing advancements to how you play Minecraft.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>Amazing XP/Economy Systems</h3>
                        <p>
                            We have a few ways to level up on our server, and even get certain ranks along the way.
                            You can get rewards,  permissions, and more just from playing the game.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;


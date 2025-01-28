import React, { useState } from "react";
import './StaffApplicationPage.css';

function StaffApplicationPage() {
    const [baseRole, setBaseRole] = useState('');
    const [badgeRole, setBadgeRole] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [designSoftware, setDesignSoftware] = useState('');

    const handleBaseRoleChange = (e) => {
        setBaseRole(e.target.value);
        setBadgeRole(''); // Reset badge role when changing base role
    };

    const handleBadgeRoleChange = (e) => {
        setBadgeRole(e.target.value);
    };
    const handleDesignSoftwareChange = (e) => {
        setDesignSoftware(e.target.value);
    };

    const handleAgeGroupChange = (e) => {
        setAgeGroup(e.target.value);
    };

    const renderBadgeRoleOptions = () => {
        if (baseRole === "developer") {
            return (
                <>
                    <option value="minecraft">Minecraft Developer</option>
                    <option value="website">Website Developer</option>
                    <option value="discord">Discord Developer</option>
                </>
            );
        } else if (baseRole === "designer") {
            return (
                <>
                    <option value="website">Website Designer</option>
                    <option value="visual">Visual Designer</option>
                    <option value="minecraft">Minecraft Designer</option>
                    <option value="builder">Builder Designer</option>
                    <option value="resource">Resource Designer</option>
                </>
            );
        }
    };

    const renderBadgeRoleQuestions = () => {
        if (badgeRole === "minecraft") {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="kotlinExperience">What experience do you have with Kotlin, Java, and with the PaperMC and Velocity Ecosystem?</label>
                        <textarea id="kotlinExperience" placeholder="Describe your experience with Kotlin, Java, PaperMC, and Velocity" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pluginExperience">Have you developed custom plugins for Minecraft? If so, describe one of your favorite projects.</label>
                        <textarea id="pluginExperience" placeholder="Describe a plugin project" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="apiExperience">Are you familiar with integrating APIs like LuckPerms, Geyser, or other common Minecraft plugins APIs? Please elaborate.</label>
                        <textarea id="apiExperience" placeholder="Explain your experience with integrating APIs" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="debugging">How do you handle debugging and performance optimization in Minecraft plugins?</label>
                        <textarea id="debugging" placeholder="Explain your approach to debugging and optimization" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="crossPlatform">Do you have experience with cross-platform support (Java and Bedrock)?</label>
                        <textarea id="crossPlatform" placeholder="Explain your cross-platform experience" required></textarea>
                    </div>
                </>
            );
        } else if (badgeRole === "website") {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="frontendExperience">What frameworks or libraries do you use for frontend development (e.g., React, JSX)?</label>
                        <textarea id="frontendExperience" placeholder="Explain your frontend development experience" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsiveDesign">How do you approach designing responsive and user-friendly websites?</label>
                        <textarea id="responsiveDesign" placeholder="Explain your approach to responsive web design" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="backendExperience">Have you implemented a backend system using JavaScript, Java, or other languages? Can you describe a project where this was essential?</label>
                        <textarea id="backendExperience" placeholder="Describe your backend system experience" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="webHosting">Are you experienced with hosting and deploying websites? What platforms do you prefer?</label>
                        <textarea id="webHosting" placeholder="Describe your web hosting experience" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="webSecurity">How do you ensure security and scalability in your web applications?</label>
                        <textarea id="webSecurity" placeholder="Explain how you handle security and scalability" required></textarea>
                    </div>
                </>
            );
        } else if (badgeRole === "discord") {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="discordJsExperience">What is your experience with Discord.js or other Discord bot frameworks?</label>
                        <textarea id="discordJsExperience" placeholder="Explain your experience with Discord.js" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="discordBotFeatures">Have you developed bots with advanced features like moderation, logging, and custom commands?</label>
                        <textarea id="discordBotFeatures" placeholder="Describe your experience with Discord bots" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="authPermissions">How do you handle authentication and permissions within a Discord bot?</label>
                        <textarea id="authPermissions" placeholder="Explain how you handle authentication and permissions" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="scalability">How would you handle scalability for a bot in a large, active community?</label>
                        <textarea id="scalability" placeholder="Describe how you manage scalability" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="discordApiIntegration">Do you have experience integrating external APIs (e.g., Minecraft, payment gateways) into Discord bots?</label>
                        <textarea id="discordApiIntegration" placeholder="Explain your experience with API integrations" required></textarea>
                    </div>
                </>
            );
        }
    };

    const renderDesignerQuestions = () => {
        if (badgeRole === "website") {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="websiteExperience">Do you have experience designing graphics for websites? How do you balance aesthetics with usability?</label>
                        <textarea id="websiteExperience" placeholder="Describe your experience with website design" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="wireframingExperience">Are you familiar with wireframing or prototyping tools like Figma or Adobe XD?</label>
                        <textarea id="wireframingExperience" placeholder="Explain your experience with wireframing or prototyping" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="websiteExamples">Can you share examples of past website designs you’ve created?</label>
                        <textarea id="websiteExamples" placeholder="Share examples of your past website designs" required></textarea>
                    </div>
                </>
            );
        } else if (badgeRole === "visual") {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="logoDesignExperience">Have you designed logos or branding materials before? If so, can you share examples?</label>
                        <textarea id="logoDesignExperience" placeholder="Explain your experience with logo and branding design" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="visualThemeCreation">How do you approach creating cohesive visual themes for a brand or project?</label>
                        <textarea id="visualThemeCreation" placeholder="Describe your process for creating cohesive visual themes" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="engagingAssets">What is your process for creating visually engaging assets like promotional images or thumbnails?</label>
                        <textarea id="engagingAssets" placeholder="Explain your process for creating engaging assets" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="animationExperience">Have you worked with animation or motion graphics? If yes, what tools do you use?</label>
                        <textarea id="animationExperience" placeholder="Describe your experience with animation or motion graphics" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectVisionAlignment">How do you ensure your designs align with the overall project vision?</label>
                        <textarea id="projectVisionAlignment" placeholder="Explain how you align your designs with project vision" required></textarea>
                    </div>
                </>
            );
        } else if (badgeRole === "minecraft") {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="buildingStyle">What is your building style (e.g., medieval, futuristic, modern)? Share screenshots or world files, if possible.</label>
                        <textarea id="buildingStyle" placeholder="Describe your building style and share examples" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="serverDesignExperience">Do you have experience designing and building for servers with unique gameplay mechanics?</label>
                        <textarea id="serverDesignExperience" placeholder="Describe your experience designing for servers" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="immersiveBuilds">How do you approach creating immersive and engaging builds for players?</label>
                        <textarea id="immersiveBuilds" placeholder="Explain how you create engaging builds" required></textarea>
                    </div>
                </>
            );
        } else if (badgeRole === "builder") {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="builderTools">What tools (e.g., WorldEdit, VoxelSniper) are you proficient in for large-scale builds?</label>
                        <textarea id="builderTools" placeholder="Describe your experience with builder tools" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="collaborativeProjects">Do you work better on solo builds or collaborative projects?</label>
                        <textarea id="collaborativeProjects" placeholder="Describe your approach to collaborative vs solo builds" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gameModeMaps">Have you ever built maps for specific game modes like survival, mini-games, or roleplay?</label>
                        <textarea id="gameModeMaps" placeholder="Share your experience with building maps for different game modes" required></textarea>
                    </div>
                </>
            );
        } else if (badgeRole === "resource") {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="textureCreation">Have you created custom textures or resource packs for Minecraft? Share examples, if possible.</label>
                        <textarea id="textureCreation" placeholder="Share examples of resource packs you've created" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="textureTools">What tools do you use for texture design, and how do you ensure high quality?</label>
                        <textarea id="textureTools" placeholder="Describe the tools you use and your quality assurance process" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="textureCompatibility">How do you balance creativity with compatibility (e.g., keeping textures aligned with Minecraft’s style)?</label>
                        <textarea id="textureCompatibility" placeholder="Explain how you maintain compatibility while being creative" required></textarea>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="staff-application">
            <header className="staff-header">
                <h1>Staff Application</h1>
                <p>Join our amazing team by filling out the application form below.</p>
            </header>

            <section className="application-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="about">Tell us about yourself</label>
                        <textarea id="about" placeholder="Describe yourself..." required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="motivation">What motivates you to join StellarSurvivors?</label>
                        <textarea id="motivation" placeholder="Why do you want to join?" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="ageGroup">What is your age?</label>
                        <div className="age-group">
                            <button
                                type="button"
                                className={ageGroup === '16-17' ? 'selected' : ''}
                                onClick={() => setAgeGroup('16-17')}
                            >
                                16-17
                            </button>
                            <button
                                type="button"
                                className={ageGroup === '18-20' ? 'selected' : ''}
                                onClick={() => setAgeGroup('18-20')}
                            >
                                18-20
                            </button>
                            <button
                                type="button"
                                className={ageGroup === '21+' ? 'selected' : ''}
                                onClick={() => setAgeGroup('21+')}
                            >
                                21+
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="experience">What is your previous experience?</label>
                        <textarea id="experience" placeholder="Describe your experience" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fit">Why do you think you’re a good fit for the team?</label>
                        <textarea id="fit" placeholder="Why you're a good fit" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="timeCommitment">How much time can you dedicate to this project?</label>
                        <textarea id="timeCommitment" placeholder="Time availability" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="otherCommitments">Do you have any other commitments we should be aware of?</label>
                        <textarea id="otherCommitments" placeholder="Other commitments" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="workStyle">Do you work better independently or as part of a team?</label>
                        <textarea id="workStyle" placeholder="Preferred work style" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="feedback">Are you open to receiving feedback and working collaboratively to improve your work?</label>
                        <textarea id="feedback" placeholder="Feedback and collaboration" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="baseRole">Choose Your Base Role</label>
                        <select
                            id="baseRole"
                            value={baseRole}
                            onChange={handleBaseRoleChange}
                            required
                        >
                            <option value="">Select Base Role</option>
                            <option value="developer">Developer Team</option>
                            <option value="designer">Design Team</option>
                        </select>
                    </div>

                    {baseRole && (
                        <div className="form-group">
                            <label htmlFor="badgeRole">Choose Your Badge Role</label>
                            <select
                                id="badgeRole"
                                value={badgeRole}
                                onChange={handleBadgeRoleChange}
                                required
                            >
                                <option value="">Select Badge Role</option>
                                {renderBadgeRoleOptions()}
                            </select>
                        </div>
                    )}

                    {baseRole === "developer" && badgeRole && (
                        <>
                            {renderBadgeRoleQuestions()}
                        </>
                    )}

                    {baseRole === "designer" && badgeRole && (
                        <>
                            <div className="form-group">
                                <label htmlFor="designSoftware">What design software do you use (e.g., Photoshop, Illustrator, Figma)?</label>
                                <input
                                    type="text"
                                    id="designSoftware"
                                    value={designSoftware}
                                    onChange={handleDesignSoftwareChange}
                                    placeholder="List your design software"
                                    required
                                />
                            </div>

                            {renderDesignerQuestions()}
                        </>
                    )}

                    <button type="submit" className="submit-btn">Submit Application</button>
                </form>
            </section>
        </div>
    );
}

export default StaffApplicationPage;


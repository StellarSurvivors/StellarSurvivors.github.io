import React from "react";

function GeneralQuestionModule({
                                   ageGroup,
                                   setAgeGroup,
                                   minecraftUsername,
                                   setMinecraftUsername,
                                   discordUsername,
                                   setDiscordUsername,
                                   email,
                                   setEmail,
                                   about,
                                   setAbout,
                                   motivation,
                                   setMotivation,
                                   experience,
                                   setExperience,
                                   fit,
                                   setFit,
                                   timeCommitment,
                                   setTimeCommitment,
                                   otherCommitments,
                                   setOtherCommitments,
                                   workStyle,
                                   setWorkStyle,
                                   feedback,
                                   setFeedback
                               }) {
    return (
        <>
            <div className="form-group">
                <label htmlFor="minecraftUsername">Minecraft Username</label>
                <input
                    type="text"
                    id="minecraftUsername"
                    placeholder="Your Minecraft username"
                    value={minecraftUsername}
                    onChange={(e) => setMinecraftUsername(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="discordUsername">Discord Username</label>
                <input
                    type="text"
                    id="discordUsername"
                    placeholder="Your Discord username"
                    value={discordUsername}
                    onChange={(e) => setDiscordUsername(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="about">Tell us about yourself</label>
                <textarea
                    id="about"
                    placeholder="Describe yourself..."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="motivation">What motivates you to join StellarSurvivors?</label>
                <textarea
                    id="motivation"
                    placeholder="Why do you want to join?"
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
                    required
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="ageGroup">What is your age?</label>
                <div className="age-group">
                    <button
                        type="button"
                        className={ageGroup === "16-17" ? "selected" : ""}
                        onClick={() => setAgeGroup("16-17")}
                    >
                        16-17
                    </button>
                    <button
                        type="button"
                        className={ageGroup === "18-20" ? "selected" : ""}
                        onClick={() => setAgeGroup("18-20")}
                    >
                        18-20
                    </button>
                    <button
                        type="button"
                        className={ageGroup === "21+" ? "selected" : ""}
                        onClick={() => setAgeGroup("21+")}
                    >
                        21+
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="experience">What is your previous experience?</label>
                <textarea
                    id="experience"
                    placeholder="Describe your experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="fit">Why do you think you’re a good fit for the team?</label>
                <textarea
                    id="fit"
                    placeholder="Why you're a good fit"
                    value={fit}
                    onChange={(e) => setFit(e.target.value)}
                    required
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="timeCommitment">How much time can you dedicate to this project?</label>
                <textarea
                    id="timeCommitment"
                    placeholder="Time availability"
                    value={timeCommitment}
                    onChange={(e) => setTimeCommitment(e.target.value)}
                    required
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="otherCommitments">Do you have any other commitments we should be aware of?</label>
                <textarea
                    id="otherCommitments"
                    placeholder="Other commitments"
                    value={otherCommitments}
                    onChange={(e) => setOtherCommitments(e.target.value)}
                    required
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="workStyle">Do you work better independently or as part of a team?</label>
                <textarea
                    id="workStyle"
                    placeholder="Preferred work style"
                    value={workStyle}
                    onChange={(e) => setWorkStyle(e.target.value)}
                    required
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="feedback">Are you open to receiving feedback and working collaboratively to improve your work?</label>
                <textarea
                    id="feedback"
                    placeholder="Feedback and collaboration"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                ></textarea>
            </div>
        </>
    );
}

export default GeneralQuestionModule;

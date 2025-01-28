import React, { useState } from "react";
import './StaffApplicationPage.css';

function StaffApplicationPage() {
    const [badgeRole, setBadgeRole] = useState('');
    const [ageGroup, setAgeGroup] = useState('');

    const handleBadgeRoleChange = (e) => {
        setBadgeRole(e.target.value);
    };

    const handleAgeGroupChange = (e) => {
        setAgeGroup(e.target.value);
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
                        <label htmlFor="badgeRole">Choose Your Badge Role</label>
                        <select
                            id="badgeRole"
                            value={badgeRole}
                            onChange={handleBadgeRoleChange}
                            required
                        >
                            <option value="">Select Badge Role</option>
                            <option value="developer">Developer Team</option>
                            <option value="designer">Design Team</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-btn">Submit Application</button>
                </form>
            </section>
        </div>
    );
}

export default StaffApplicationPage;


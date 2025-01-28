// components/StaffApplicationPage.jsx
import React, {useState} from "react";
import "../App.css"; // Importing global CSS

function StaffApplicationPage()  {
    const [roleType, setRoleType] = useState('');
    const [badgeRole, setBadgeRole] = useState('');

    // Update roleType selection
    const handleRoleTypeChange = (e) => {
        setRoleType(e.target.value);
        setBadgeRole(''); // Reset badge role selection when role type changes
    };

    // Update badgeRole selection
    const handleBadgeRoleChange = (e) => {
        setBadgeRole(e.target.value);
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
                        <label htmlFor="roleType">Choose Your Role Type</label>
                        <select
                            id="roleType"
                            value={roleType}
                            onChange={handleRoleTypeChange}
                            required
                        >
                            <option value="">Select Role Type</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                        </select>
                    </div>

                    {roleType && (
                        <div className="form-group">
                            <label htmlFor="badgeRole">Choose Your Badge Role</label>
                            <select
                                id="badgeRole"
                                value={badgeRole}
                                onChange={handleBadgeRoleChange}
                                required
                            >
                                <option value="">Select Badge Role</option>
                                {roleType === 'developer' ? (
                                    <>
                                        <option value="minecraft">Minecraft Developer</option>
                                        <option value="website">Website Developer</option>
                                        <option value="discord">Discord Developer</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="website-designer">Website Designer</option>
                                        <option value="visual-designer">Visual Designer</option>
                                        <option value="minecraft-designer">Minecraft Designer</option>
                                        <option value="builder-designer">Builder Designer</option>
                                        <option value="resource-designer">Resource Designer</option>
                                    </>
                                )}
                            </select>
                        </div>
                    )}

                    {/* Display related content based on selected badge role */}
                    {badgeRole && (
                        <div className="role-description">
                            {roleType === 'developer' ? (
                                badgeRole === 'minecraft' ? (
                                    <>
                                        <h3>Minecraft Developer</h3>
                                        <p>Work with Minecraft plugin development using Java, Kotlin, PaperMC, and Velocity.</p>
                                        {/* Add specific questions for Minecraft Developer here */}
                                    </>
                                ) : badgeRole === 'website' ? (
                                    <>
                                        <h3>Website Developer</h3>
                                        <p>Design and build responsive, user-friendly websites using React, JavaScript, and more.</p>
                                        {/* Add specific questions for Website Developer here */}
                                    </>
                                ) : badgeRole === 'discord' ? (
                                    <>
                                        <h3>Discord Developer</h3>
                                        <p>Develop and maintain Discord bots using Discord.js, adding moderation and custom features.</p>
                                        {/* Add specific questions for Discord Developer here */}
                                    </>
                                ) : null
                            ) : roleType === 'designer' ? (
                                badgeRole === 'website-designer' ? (
                                    <>
                                        <h3>Website Designer</h3>
                                        <p>Design user-friendly website interfaces that are visually appealing and responsive.</p>
                                        {/* Add specific questions for Website Designer here */}
                                    </>
                                ) : badgeRole === 'visual-designer' ? (
                                    <>
                                        <h3>Visual Designer</h3>
                                        <p>Create logos, branding materials, and engaging visuals for various projects.</p>
                                        {/* Add specific questions for Visual Designer here */}
                                    </>
                                ) : badgeRole === 'minecraft-designer' ? (
                                    <>
                                        <h3>Minecraft Designer</h3>
                                        <p>Design immersive builds and worlds for Minecraft servers with unique gameplay mechanics.</p>
                                        {/* Add specific questions for Minecraft Designer here */}
                                    </>
                                ) : badgeRole === 'builder-designer' ? (
                                    <>
                                        <h3>Builder Designer</h3>
                                        <p>Work with tools like WorldEdit and VoxelSniper to build large-scale maps and environments.</p>
                                        {/* Add specific questions for Builder Designer here */}
                                    </>
                                ) : badgeRole === 'resource-designer' ? (
                                    <>
                                        <h3>Resource Designer</h3>
                                        <p>Create custom textures and resource packs for Minecraft, maintaining style and quality.</p>
                                        {/* Add specific questions for Resource Designer here */}
                                    </>
                                ) : null
                            ) : null}
                        </div>
                    )}

                    {/* General Questions */}
                    <div className="form-group">
                        <label htmlFor="about">Tell us about yourself</label>
                        <textarea id="about" placeholder="Describe yourself..." required></textarea>
                    </div>

                    {/* Additional Form Fields for other general questions */}
                    <button type="submit" className="submit-btn">Submit Application</button>
                </form>
            </section>
        </div>
    );
};

export default StaffApplicationPage;
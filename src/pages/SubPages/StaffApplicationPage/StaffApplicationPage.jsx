import React, { useState } from "react";
import GeneralQuestionModule from './Modules/GeneralQuestionModule';
import DeveloperQuestionModule from './Modules/DeveloperQuestionModule';
import DesignerQuestionModule from './Modules/DesignerQuestionModule';
import SubmitModule from './Modules/SubmitModule';
import './StaffApplicationPage.css';
import sendToDiscord from "./Webhook/DiscordWebhook";

function StaffApplicationPage() {
    const [baseRole, setBaseRole] = useState('');
    const [badgeRole, setBadgeRole] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [designSoftware, setDesignSoftware] = useState('');

    // Website-related state
    const [websiteExperience, setWebsiteExperience] = useState("");
    const [wireframingExperience, setWireframingExperience] = useState("");
    const [websiteExamples, setWebsiteExamples] = useState("");

    // Visual-related state
    const [logoDesignExperience, setLogoDesignExperience] = useState("");
    const [visualThemeCreation, setVisualThemeCreation] = useState("");
    const [engagingAssets, setEngagingAssets] = useState("");
    const [animationExperience, setAnimationExperience] = useState("");
    const [projectVisionAlignment, setProjectVisionAlignment] = useState("");

    // Minecraft-related state
    const [buildingStyle, setBuildingStyle] = useState("");
    const [serverDesignExperience, setServerDesignExperience] = useState("");
    const [immersiveBuilds, setImmersiveBuilds] = useState("");

    // Builder-related state
    const [builderTools, setBuilderTools] = useState("");
    const [collaborativeProjects, setCollaborativeProjects] = useState("");
    const [gameModeMaps, setGameModeMaps] = useState("");

    // Resource-related state
    const [textureCreation, setTextureCreation] = useState("");
    const [textureTools, setTextureTools] = useState("");
    const [textureCompatibility, setTextureCompatibility] = useState("");

    const [minecraftUsername, setMinecraftUsername] = useState("");
    const [discordUsername, setDiscordUsername] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");
    const [motivation, setMotivation] = useState("");
    const [experience, setExperience] = useState("");
    const [fit, setFit] = useState("");
    const [timeCommitment, setTimeCommitment] = useState("");
    const [otherCommitments, setOtherCommitments] = useState("");
    const [workStyle, setWorkStyle] = useState("");
    const [feedback, setFeedback] = useState("");

    // Minecraft-related state
    const [kotlinExperience, setKotlinExperience] = useState("");
    const [pluginExperience, setPluginExperience] = useState("");
    const [apiExperience, setApiExperience] = useState("");
    const [debugging, setDebugging] = useState("");
    const [crossPlatform, setCrossPlatform] = useState("");

    // Website-related state
    const [frontendExperience, setFrontendExperience] = useState("");
    const [responsiveDesign, setResponsiveDesign] = useState("");
    const [backendExperience, setBackendExperience] = useState("");
    const [webHosting, setWebHosting] = useState("");
    const [webSecurity, setWebSecurity] = useState("");

    // Discord-related state
    const [discordJsExperience, setDiscordJsExperience] = useState("");
    const [discordBotFeatures, setDiscordBotFeatures] = useState("");
    const [authPermissions, setAuthPermissions] = useState("");
    const [scalability, setScalability] = useState("");
    const [discordApiIntegration, setDiscordApiIntegration] = useState("");

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

    const formData = {
        baseRole,
        badgeRole,
        ageGroup,
        designSoftware,

        // Website-related
        websiteExperience,
        wireframingExperience,
        websiteExamples,

        // Visual-related
        logoDesignExperience,
        visualThemeCreation,
        engagingAssets,
        animationExperience,
        projectVisionAlignment,

        // Minecraft-related
        buildingStyle,
        serverDesignExperience,
        immersiveBuilds,

        // Builder-related
        builderTools,
        collaborativeProjects,
        gameModeMaps,

        // Resource-related
        textureCreation,
        textureTools,
        textureCompatibility,

        // General information
        minecraftUsername,
        discordUsername,
        email,
        about,
        motivation,
        experience,
        fit,
        timeCommitment,
        otherCommitments,
        workStyle,
        feedback,

        // Minecraft Development-related
        kotlinExperience,
        pluginExperience,
        apiExperience,
        debugging,
        crossPlatform,

        // Website Development-related
        frontendExperience,
        responsiveDesign,
        backendExperience,
        webHosting,
        webSecurity,

        // Discord Bot Development-related
        discordJsExperience,
        discordBotFeatures,
        authPermissions,
        scalability,
        discordApiIntegration
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await sendToDiscord(formData);
        alert(result.message);
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

    return (
        <div className="staff-application">
            <header className="staff-header">
                <h1>Staff Application</h1>
                <p>Join our amazing team by filling out the application form below.</p>
            </header>
            <section className="application-form">
                <form onSubmit={handleSubmit}>
                    <GeneralQuestionModule
                        ageGroup={ageGroup}
                        setAgeGroup={setAgeGroup}
                        minecraftUsername={minecraftUsername}
                        setMinecraftUsername={setMinecraftUsername}
                        discordUsername={discordUsername}
                        setDiscordUsername={setDiscordUsername}
                        email={email}
                        setEmail={setEmail}
                        about={about}
                        setAbout={setAbout}
                        motivation={motivation}
                        setMotivation={setMotivation}
                        experience={experience}
                        setExperience={setExperience}
                        fit={fit}
                        setFit={setFit}
                        timeCommitment={timeCommitment}
                        setTimeCommitment={setTimeCommitment}
                        otherCommitments={otherCommitments}
                        setOtherCommitments={setOtherCommitments}
                        workStyle={workStyle}
                        setWorkStyle={setWorkStyle}
                        feedback={feedback}
                        setFeedback={setFeedback}
                    />

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
                        <DeveloperQuestionModule
                            badgeRole={badgeRole}
                            // Minecraft State
                            kotlinExperience={kotlinExperience}
                            setKotlinExperience={setKotlinExperience}
                            pluginExperience={pluginExperience}
                            setPluginExperience={setPluginExperience}
                            apiExperience={apiExperience}
                            setApiExperience={setApiExperience}
                            debugging={debugging}
                            setDebugging={setDebugging}
                            crossPlatform={crossPlatform}
                            setCrossPlatform={setCrossPlatform}
                            // Website State
                            frontendExperience={frontendExperience}
                            setFrontendExperience={setFrontendExperience}
                            responsiveDesign={responsiveDesign}
                            setResponsiveDesign={setResponsiveDesign}
                            backendExperience={backendExperience}
                            setBackendExperience={setBackendExperience}
                            webHosting={webHosting}
                            setWebHosting={setWebHosting}
                            webSecurity={webSecurity}
                            setWebSecurity={setWebSecurity}
                            // Discord State
                            discordJsExperience={discordJsExperience}
                            setDiscordJsExperience={setDiscordJsExperience}
                            discordBotFeatures={discordBotFeatures}
                            setDiscordBotFeatures={setDiscordBotFeatures}
                            authPermissions={authPermissions}
                            setAuthPermissions={setAuthPermissions}
                            scalability={scalability}
                            setScalability={setScalability}
                            discordApiIntegration={discordApiIntegration}
                            setDiscordApiIntegration={setDiscordApiIntegration}
                        />
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
                            <DesignerQuestionModule
                                badgeRole={badgeRole}
                                // Website State
                                websiteExperience={websiteExperience}
                                setWebsiteExperience={setWebsiteExperience}
                                wireframingExperience={wireframingExperience}
                                setWireframingExperience={setWireframingExperience}
                                websiteExamples={websiteExamples}
                                setWebsiteExamples={setWebsiteExamples}
                                // Visual State
                                logoDesignExperience={logoDesignExperience}
                                setLogoDesignExperience={setLogoDesignExperience}
                                visualThemeCreation={visualThemeCreation}
                                setVisualThemeCreation={setVisualThemeCreation}
                                engagingAssets={engagingAssets}
                                setEngagingAssets={setEngagingAssets}
                                animationExperience={animationExperience}
                                setAnimationExperience={setAnimationExperience}
                                projectVisionAlignment={projectVisionAlignment}
                                setProjectVisionAlignment={setProjectVisionAlignment}
                                // Minecraft State
                                buildingStyle={buildingStyle}
                                setBuildingStyle={setBuildingStyle}
                                serverDesignExperience={serverDesignExperience}
                                setServerDesignExperience={setServerDesignExperience}
                                immersiveBuilds={immersiveBuilds}
                                setImmersiveBuilds={setImmersiveBuilds}
                                // Builder State
                                builderTools={builderTools}
                                setBuilderTools={setBuilderTools}
                                collaborativeProjects={collaborativeProjects}
                                setCollaborativeProjects={setCollaborativeProjects}
                                gameModeMaps={gameModeMaps}
                                setGameModeMaps={setGameModeMaps}
                                // Resource State
                                textureCreation={textureCreation}
                                setTextureCreation={setTextureCreation}
                                textureTools={textureTools}
                                setTextureTools={setTextureTools}
                                textureCompatibility={textureCompatibility}
                                setTextureCompatibility={setTextureCompatibility}
                            />
                        </>
                    )}
                    <SubmitModule onSubmit={handleSubmit}/>
                </form>
            </section>
        </div>
    );
}

export default StaffApplicationPage;

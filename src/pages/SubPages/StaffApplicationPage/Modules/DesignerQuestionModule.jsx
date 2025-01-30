import React from "react";

function DesignerQuestionModule({
                                    badgeRole,
                                    websiteExperience,
                                    setWebsiteExperience,
                                    wireframingExperience,
                                    setWireframingExperience,
                                    websiteExamples,
                                    setWebsiteExamples,
                                    logoDesignExperience,
                                    setLogoDesignExperience,
                                    visualThemeCreation,
                                    setVisualThemeCreation,
                                    engagingAssets,
                                    setEngagingAssets,
                                    animationExperience,
                                    setAnimationExperience,
                                    projectVisionAlignment,
                                    setProjectVisionAlignment,
                                    buildingStyle,
                                    setBuildingStyle,
                                    serverDesignExperience,
                                    setServerDesignExperience,
                                    immersiveBuilds,
                                    setImmersiveBuilds,
                                    builderTools,
                                    setBuilderTools,
                                    collaborativeProjects,
                                    setCollaborativeProjects,
                                    gameModeMaps,
                                    setGameModeMaps,
                                    textureCreation,
                                    setTextureCreation,
                                    textureTools,
                                    setTextureTools,
                                    textureCompatibility,
                                    setTextureCompatibility
                                }) {
    const questionSets = {
        website: [
            {
                label: "Do you have experience designing graphics for websites? How do you balance aesthetics with usability?",
                id: "websiteExperience",
                value: websiteExperience,
                setter: setWebsiteExperience,
                placeholder: "Describe your experience with website design"
            },
            {
                label: "Are you familiar with wireframing or prototyping tools like Figma or Adobe XD?",
                id: "wireframingExperience",
                value: wireframingExperience,
                setter: setWireframingExperience,
                placeholder: "Explain your experience with wireframing or prototyping"
            },
            {
                label: "Can you share examples of past website designs you’ve created?",
                id: "websiteExamples",
                value: websiteExamples,
                setter: setWebsiteExamples,
                placeholder: "Share examples of your past website designs"
            }
        ],
        visual: [
            {
                label: "Have you designed logos or branding materials before? If so, can you share examples?",
                id: "logoDesignExperience",
                value: logoDesignExperience,
                setter: setLogoDesignExperience,
                placeholder: "Explain your experience with logo and branding design"
            },
            {
                label: "How do you approach creating cohesive visual themes for a brand or project?",
                id: "visualThemeCreation",
                value: visualThemeCreation,
                setter: setVisualThemeCreation,
                placeholder: "Describe your process for creating cohesive visual themes"
            },
            {
                label: "What is your process for creating visually engaging assets like promotional images or thumbnails?",
                id: "engagingAssets",
                value: engagingAssets,
                setter: setEngagingAssets,
                placeholder: "Explain your process for creating engaging assets"
            },
            {
                label: "Have you worked with animation or motion graphics? If yes, what tools do you use?",
                id: "animationExperience",
                value: animationExperience,
                setter: setAnimationExperience,
                placeholder: "Describe your experience with animation or motion graphics"
            },
            {
                label: "How do you ensure your designs align with the overall project vision?",
                id: "projectVisionAlignment",
                value: projectVisionAlignment,
                setter: setProjectVisionAlignment,
                placeholder: "Explain how you align your designs with project vision"
            }
        ],
        minecraft: [
            {
                label: "What is your building style (e.g., medieval, futuristic, modern)? Share screenshots or world files, if possible.",
                id: "buildingStyle",
                value: buildingStyle,
                setter: setBuildingStyle,
                placeholder: "Describe your building style and share examples"
            },
            {
                label: "Do you have experience designing and building for servers with unique gameplay mechanics?",
                id: "serverDesignExperience",
                value: serverDesignExperience,
                setter: setServerDesignExperience,
                placeholder: "Describe your experience designing for servers"
            },
            {
                label: "How do you approach creating immersive and engaging builds for players?",
                id: "immersiveBuilds",
                value: immersiveBuilds,
                setter: setImmersiveBuilds,
                placeholder: "Explain how you create engaging builds"
            }
        ],
        builder: [
            {
                label: "What tools (e.g., WorldEdit, VoxelSniper) are you proficient in for large-scale builds?",
                id: "builderTools",
                value: builderTools,
                setter: setBuilderTools,
                placeholder: "Describe your experience with builder tools"
            },
            {
                label: "Do you work better on solo builds or collaborative projects?",
                id: "collaborativeProjects",
                value: collaborativeProjects,
                setter: setCollaborativeProjects,
                placeholder: "Describe your approach to collaborative vs solo builds"
            },
            {
                label: "Have you ever built maps for specific game modes like survival, mini-games, or roleplay?",
                id: "gameModeMaps",
                value: gameModeMaps,
                setter: setGameModeMaps,
                placeholder: "Share your experience with building maps for different game modes"
            }
        ],
        resource: [
            {
                label: "Have you created custom textures or resource packs for Minecraft? Share examples, if possible.",
                id: "textureCreation",
                value: textureCreation,
                setter: setTextureCreation,
                placeholder: "Share examples of resource packs you've created"
            },
            {
                label: "What tools do you use for texture design, and how do you ensure high quality?",
                id: "textureTools",
                value: textureTools,
                setter: setTextureTools,
                placeholder: "Describe the tools you use and your quality assurance process"
            },
            {
                label: "How do you balance creativity with compatibility (e.g., keeping textures aligned with Minecraft’s style)?",
                id: "textureCompatibility",
                value: textureCompatibility,
                setter: setTextureCompatibility,
                placeholder: "Explain how you maintain compatibility while being creative"
            }
        ]
    };

    const questions = questionSets[badgeRole] || [];

    return (
        <>
            {questions.map((question, index) => (
                <div className="form-group" key={index}>
                    <label htmlFor={question.id}>{question.label}</label>
                    <textarea
                        id={question.id}
                        value={question.value}
                        onChange={(e) => question.setter(e.target.value)}
                        placeholder={question.placeholder}
                        required
                    ></textarea>
                </div>
            ))}
        </>
    );
}

export default DesignerQuestionModule;

import React from "react";

function DeveloperQuestionModule({
                                     badgeRole,
                                     kotlinExperience,
                                     setKotlinExperience,
                                     pluginExperience,
                                     setPluginExperience,
                                     apiExperience,
                                     setApiExperience,
                                     debugging,
                                     setDebugging,
                                     crossPlatform,
                                     setCrossPlatform,
                                     frontendExperience,
                                     setFrontendExperience,
                                     responsiveDesign,
                                     setResponsiveDesign,
                                     backendExperience,
                                     setBackendExperience,
                                     webHosting,
                                     setWebHosting,
                                     webSecurity,
                                     setWebSecurity,
                                     discordJsExperience,
                                     setDiscordJsExperience,
                                     discordBotFeatures,
                                     setDiscordBotFeatures,
                                     authPermissions,
                                     setAuthPermissions,
                                     scalability,
                                     setScalability,
                                     discordApiIntegration,
                                     setDiscordApiIntegration
                                 }) {
    const questionSets = {
        minecraft: [
            {
                id: "kotlinExperience",
                label: "What experience do you have with Kotlin, Java, and with the PaperMC and Velocity Ecosystem?",
                placeholder: "Describe your experience with Kotlin, Java, PaperMC, and Velocity",
                value: kotlinExperience,
                setter: setKotlinExperience
            },
            {
                id: "pluginExperience",
                label: "Have you developed custom plugins for Minecraft? If so, describe one of your favorite projects.",
                placeholder: "Describe a plugin project",
                value: pluginExperience,
                setter: setPluginExperience
            },
            {
                id: "apiExperience",
                label: "Are you familiar with integrating APIs like LuckPerms, Geyser, or other common Minecraft plugins APIs? Please elaborate.",
                placeholder: "Explain your experience with integrating APIs",
                value: apiExperience,
                setter: setApiExperience
            },
            {
                id: "debugging",
                label: "How do you handle debugging and performance optimization in Minecraft plugins?",
                placeholder: "Explain your approach to debugging and optimization",
                value: debugging,
                setter: setDebugging
            },
            {
                id: "crossPlatform",
                label: "Do you have experience with cross-platform support (Java and Bedrock)?",
                placeholder: "Explain your cross-platform experience",
                value: crossPlatform,
                setter: setCrossPlatform
            }
        ],
        website: [
            {
                id: "frontendExperience",
                label: "What frameworks or libraries do you use for frontend development (e.g., React, JSX)?",
                placeholder: "Explain your frontend development experience",
                value: frontendExperience,
                setter: setFrontendExperience
            },
            {
                id: "responsiveDesign",
                label: "How do you approach designing responsive and user-friendly websites?",
                placeholder: "Explain your approach to responsive web design",
                value: responsiveDesign,
                setter: setResponsiveDesign
            },
            {
                id: "backendExperience",
                label: "Have you implemented a backend system using JavaScript, Java, or other languages? Can you describe a project where this was essential?",
                placeholder: "Describe your backend system experience",
                value: backendExperience,
                setter: setBackendExperience
            },
            {
                id: "webHosting",
                label: "Are you experienced with hosting and deploying websites? What platforms do you prefer?",
                placeholder: "Describe your web hosting experience",
                value: webHosting,
                setter: setWebHosting
            },
            {
                id: "webSecurity",
                label: "How do you ensure security and scalability in your web applications?",
                placeholder: "Explain how you handle security and scalability",
                value: webSecurity,
                setter: setWebSecurity
            }
        ],
        discord: [
            {
                id: "discordJsExperience",
                label: "What is your experience with Discord.js or other Discord bot frameworks?",
                placeholder: "Explain your experience with Discord.js",
                value: discordJsExperience,
                setter: setDiscordJsExperience
            },
            {
                id: "discordBotFeatures",
                label: "Have you developed bots with advanced features like moderation, logging, and custom commands?",
                placeholder: "Describe your experience with Discord bots",
                value: discordBotFeatures,
                setter: setDiscordBotFeatures
            },
            {
                id: "authPermissions",
                label: "How do you handle authentication and permissions within a Discord bot?",
                placeholder: "Explain how you handle authentication and permissions",
                value: authPermissions,
                setter: setAuthPermissions
            },
            {
                id: "scalability",
                label: "How would you handle scalability for a bot in a large, active community?",
                placeholder: "Describe how you manage scalability",
                value: scalability,
                setter: setScalability
            },
            {
                id: "discordApiIntegration",
                label: "Do you have experience integrating external APIs (e.g., Minecraft, payment gateways) into Discord bots?",
                placeholder: "Explain your experience with API integrations",
                value: discordApiIntegration,
                setter: setDiscordApiIntegration
            }
        ]
    };

    const questions = questionSets[badgeRole] || [];

    return (
        <>
            {questions.map(({ id, label, placeholder, value, setter }) => (
                <div className="form-group" key={id}>
                    <label htmlFor={id}>{label}</label>
                    <textarea
                        id={id}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        required
                    ></textarea>
                </div>
            ))}
        </>
    );
}

export default DeveloperQuestionModule;

import icon from "./../../../../components/Icon/Icon";

const sendToDiscord = async (formData) => {
    const webhookUrl = "https://discord.com/api/webhooks/1333922466145239111/pJQ4u1WouYY4hN-YgaxEN1w5ZQdC21qE12uPM6h7ZGMNDMjhj8adufTsXmt84dyRsg2X"; // Replace with actual webhook URL

    if (!formData || Object.keys(formData).length === 0) {
        console.error("Form data is empty.");
        return { success: false, message: "Form data is empty." };
    }

    // Prepare embed fields
    const embedFields = Object.entries(formData)
        .map(([key, value]) => {
            const formattedKey = key.replace(/([a-z0-9])([A-Z])/g, '$1 $2'); // Handles camelCase properly
            const formattedValue = value ? String(value).trim() : "N/A";
            return {
                name: formattedKey || "Unknown",  // Default to "Unknown" if key is empty
                value: formattedValue || "N/A",   // Ensure the value is never empty
                inline: false,  // Ensure fields are not inline
            };
        })
        .filter(field => field.value.trim() !== "N/A");

    const data = {
        username: "Staff Application Bot",
        avatar_url: icon, // Optional bot avatar
    };

    // If there are valid fields, use an embed
    if (embedFields.length > 0) {
        data.embeds = [
            {
                title: "📩 New Staff Application Submitted",
                description: "A new application has been submitted. Please review the details below.",
                fields: embedFields, // Embed fields should be an array of objects
                color: 3447003, // Blue color (make sure this is valid)
                timestamp: new Date().toISOString(),
            },
        ];
    } else {
        // If no valid fields, send as plain text instead
        data.content = "🚨 **New Staff Application Submitted** 🚨\n(No valid form data provided.)";
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP Error ${response.status}: ${errorText}`);
        }

        return { success: true, message: "Application submitted successfully!" };
    } catch (error) {
        console.error("Error sending to Discord:", error);

        // Send error report to Discord
        try {
            await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: "**🚨 Application Submission Failed 🚨**",
                    embeds: [
                        {
                            title: "Error Report",
                            description: `**Error Message:** ${error.message}`,
                            color: 15158332, // Red color
                            timestamp: new Date().toISOString(),
                        },
                    ],
                }),
            });
        } catch (error) {
            console.error("Failed to send error report to Discord:", error);
        }

        return { success: false, message: "Error submitting the application." };
    }
};

export default sendToDiscord;

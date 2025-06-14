export default async function handler(req, res) {
    const { prompt } = req.body;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
            }),
        });

        const data = await response.json();
        console.log("OpenAI full response:", JSON.stringify(data, null, 2));


        if (!data.choices || !data.choices[0]) {
            return res.status(500).json({ error: "Invalid response from OpenAI" });
        }

        res.status(200).json({ reply: data.choices[0].message.content });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Something went wrong." });
    }
}


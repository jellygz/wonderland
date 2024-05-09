import OpenAIApi from "openai";

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export default async (req, res) => {
    try {
        const { message } = req.body;
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "assistant", content: "Your helpful assistant" },
                { role: "user", content: message }
            ]
        });

        if (chatCompletion.choices && chatCompletion.choices.length > 0) {
            const chatBotReply = chatCompletion.choices[0].message.content;
            console.log("chatCompletion:", chatBotReply);
            res.status(200).json({
                reply: chatBotReply
            });
        } else {
            console.error("No completion choices returned.");
            res.status(500).json({ error: "No completion choices returned." });
        }
    } catch (error) {
        console.error("Error handling request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

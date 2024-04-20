import OpenAIApi from "openai";

const openai = new OpenAIApi({apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser:true})

export default async (req,res) => {
    try{
        const {message} = req.body
        const chatCompletion = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[
                {role: "assistant", content: "Your helpful assistant"},
                {role: "user", content: message}
            ]
        })
        console.log("chatCompletion:",chatCompletion.choices[0].message);
        const chatBotReply = chatCompletion.choices[0].message.content;
        res.status(200).json({
            reply:chatBotReply
        })
    }
    catch(error) {
        console.error(error)
        res.status(500).json({error:"internal server error"})
    }
}
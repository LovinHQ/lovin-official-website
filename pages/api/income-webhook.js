import { Client } from 'discord.js';

// MARK: Confidential
const discordToken = 'MTE0NDI1NDIyNTE2MTkyODgxNQ.GBWyWl.qAWLTOYfFFiJ1uSmchFczFipWU6UzxazQGGPrM';
const discordChannelId = '1143902845112942714';

export default async (req, res) => {
    const discordClient = new Client({ intents: ["Guilds"] });
    discordClient.login(discordToken);
    
    if (req.method === 'POST') {
        let event;

        try {
            event = req.body;
        } catch (err) {
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        // Handle the event
        console.log(`Received event: ${event.type}`);
        switch (event.type) {
            case 'charge.succeeded':
                const charge = event.data.object;
                const productName = charge.payment_intent === null ? "OpenAIKey" : "书译翻译服务"
                const amount = charge.amount / 100;
                const notification = `恭喜发财！🤑 用户购买了产品“${productName}”，你又赚了${amount}元！💰 真棒啊！👍`;
                console.log(notification);
                // Send a message to a Discord channel
                discordClient.on('ready', () => {
                    console.log(`Logged in as ${discordClient.user.tag}!`);
                    const channel = discordClient.channels.cache.get(discordChannelId);
                    console.log(channel);
                    if (channel) {
                        channel.send(notification);
                        console.log("Message sent!")
                    } else {
                        console.log("Channel not found!")
                    }
                })
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        // Return a response to acknowledge receipt of the event
        res.json({ received: true });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
};
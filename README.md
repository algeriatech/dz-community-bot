# DZ Community Bot 🤖
> A bot for AlgeriaTech.slack.com

[![Build Status](https://travis-ci.org/boennemann/badges.svg?branch=master)](https://travis-ci.org/algeriatech/dz-community-bot)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)



The goal of this project is to invite the community to collaborate on building something useful and fun.
The bot should welcome new members of the team and keep the community active in different ways (news, debates,
job offers, AI-powered interviews/quiz/games ...etc).
But most importantly, keep the atmosphere cool and echo some jokes every now and then as well :)

Our imagination and determination are the only limits to where this can lead :wink:


## Getting Started

1. Fork and clone the repository
`git clone git@github.com:USERNAME/dz-community-bot.git`
2. Install the dependencies
`yarn install` or `npm install`
3. Switch to another branch
`git checkout -b feature-x`
4. You will need a _token_ to use; send "token"  in a direct message to _[@iobot]_ and you'll get one.
5. Copy `.env.sample` to `.env` and use your generated token there
6. Launch your bot
`yarn start` or `npm start`

You should be able to use the [#test-bot] channel to do your tests or create your own private channel, but be sure to `/invite @iobot` to it.

# Hello World Example 

After running `yarn start` or `npm start`
1. go to [AlgeriaTech Slack](https://algeriatech.slack.com/messages/test-bot/)

2. tape this message and send it in test-bot channel : 

`qui @iobot-dev`

3. The iobot-dev will respond by this message with a smiley: 

`Je suis l'ange gardien de cette communauté :innocent:`

Now we will make a little change to this message to verify if your server is up and processing messages. 

4. go to the `presentation.js` file on your project, you will find the code below with the message

`Je suis l'ange gardien de cette communauté :innocent:` make any change on it. 

for this example i will add "Algérienne" in the end of the sentence.

`
const whoami = (bot, msg) => {
  bot.reply(msg, `<@${msg.user}>: Je suis l'ange gardien de cette communauté Algérienne:innocent:`)
}
`
and restart your server. `yarn start`

5. Now ask the same question that you asked before making the change

`qui @iobot-dev`

6. the iobot-dev should respond by the following message: 

`Je suis l'ange gardien de cette communauté algérienne :innocent:`

Now you are able to make our community bot more intelligent .. GO GO GO :rocket:


## Submit your PR

1. After you've added some changes make sure you don't break the coding style
`npm run lint`
2. Commit and push your changes, then open up a pull request :rocket:

## Useful links
- [BotKit docs](https://github.com/howdyai/botkit/blob/master/readme-slack.md)
- [Slack API docs](https://api.slack.com/)


[@iobot]: https://algeriatech.slack.com/messages/@iobot/
[#test-bot]: https://algeriatech.slack.com/messages/test-bot/

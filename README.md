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
`yarn` or `npm install`
3. Switch to another branch
`git checkout -b feature-x`
4. You will need a _token_ to use; send "token"  in a direct message to _[@iobot]_ and you'll get one.
5. Copy `.env.sample` to `.env` and use your generated token there
6. Launch your bot
`yarn start` or `npm start`

You should be able to use the [#test-bot] channel to do your tests or create your own private channel, but be sure to `/invite @iobot` to it.

## Submit your PR

1. After you've added some changes make sure you don't break the coding style
`npm run lint`
2. Commit and push your changes, then open up a pull request :rocket:

## Troubleshooting

1. if you have this error :
 
 `
  Error: Cannot find module 'dotenv'
      at Function.Module._resolveFilename (module.js:455:15)
      at Function.Module._load (module.js:403:25)
      at Module.require (module.js:483:17)
      at require (internal/module.js:20:19)
      at Object.<anonymous> (/Users/Amine/PersonalProject/dz-community-bot/src/go.js:1:79)
      at Module._compile (module.js:556:32)
      at Object.Module._extensions..js (module.js:565:10)
      at Module.load (module.js:473:32)
      at tryModuleLoad (module.js:432:12)
      at Function.Module._load (module.js:424:3)
  error Command failed with exit code 1. `
  
 Make sure you do an ` npm install ` or ` yarn install`. before running `yarn start` or `npm start`


## Useful links
- [BotKit docs](https://github.com/howdyai/botkit/blob/master/readme-slack.md)
- [Slack API docs](https://api.slack.com/)


[@iobot]: https://algeriatech.slack.com/messages/@iobot/
[#test-bot]: https://algeriatech.slack.com/messages/test-bot/

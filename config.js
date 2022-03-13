module.exports = {
  bot: {
    token: "", // Main token
    prefix: "-", // Main Prefix
    owners: ["826753629112369172","887274088249323560", "884320117712883725"], // Owners (not required)
    mongourl: "", // mongodb url here
    servers: {
      token: "", // Server List Token
      prefix: "!" // Server List Token
    }
  },

  website: {
    callback: "https://dbots.online/callback", // call back url example: https://example.com/callback
    secret: "", // Main client secret
    clientID: "", // Main Client ID
    tags: ["Moderation", "Fun", "Minecraft", "Economy", "Guard", "NSFW", "Anime", "Invite", "Music", "Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "India"],
    languages: [
      { flag: 'us', code: 'en', name: 'English' },
      { flag: 'th', code: 'th', name: 'Thailand' },
      { flag: 'us', code: 'af', name: 'Afrikaans' },
      { flag: 'in', code: 'hi', name: 'हिंदी' },
      { flag: 'pt', code: 'pt', name: 'Português' },
      { flag: 'es', code: 'es', name: 'Español' },
      { flag: 'fr', code: 'fr', name: 'Français' },
      { flag: 'de', code: 'de', name: 'Deutsch' },
      { flag: 'al', code: 'al', name: 'Albanian' },
      { flag: 'ru', code: 'ru', name: 'Russian' },
      { flag: 'cn', code: 'cn', name: 'Chinese' },
      { flag: 'tr', code: 'tr', name: 'Turkish' },
    ],
    servers: {
      tags: [
        {
          icon: "fal fa-code",
          name: "Development"
        },
        {
          icon: "fal fa-play",
          name: "Stream"
        },
        {
          icon: "fal fa-camera",
          name: "Media"
        },
        {
          icon: 'fal fa-building',
          name: 'Company'
        },
        {
          icon: 'fal fa-gamepad',
          name: 'Game'
        },
        {
          icon: 'fal fa-icons',
          name: 'Emoji'
        },
        {
          icon: 'fal fa-robot',
          name: 'Bot List'
        },
        {
          icon: 'fal fa-server',
          name: 'Server List'
        },
        {
          icon: 'fal fa-flag',
          name: 'India'
        },
        {
          icon: 'fab fa-discord',
          name: 'Support'
        },
        {
          icon: 'fal fa-volume',
          name: 'Sound'
        },
        {
          icon: 'fal fa-comments',
          name: 'Chatting'
        },
        {
          icon: 'fal fa-lips',
          name: 'NSFW'
        },
        {
          icon: "fal fa-comment-slash",
          name: "Challange"
        },
        {
          icon: "fal fa-hand-rock",
          name: "Protest"
        },
        {
          icon: "fal fa-headphones-alt",
          name: "Roleplay"
        },
        {
          icon: "fal fa-grin-alt",
          name: "Meme"
        },
        {
          icon: "fal fa-shopping-cart",
          name: "Shop"
        },
        {
          icon: "fal fa-desktop",
          name: "Technology"
        },
        {
          icon: "fal fa-laugh",
          name: "Fun"
        },
        {
          icon: "fal fa-share-alt",
          name: "Social"
        },
        {
          icon: "fal fa-laptop",
          name: "E-Spor"
        },
        {
          icon: 'fal fa-palette',
          name: 'Design'
        },
        {
          icon: 'fal fa-users',
          name: 'Community'
        }
      ]
    }
  },

  server: {
    id: "",//your server id
    invite: "https://discord.gg/c6YxtMn67C",//your server invite link
    roles: {
      administrator: "",// website admin role id
      moderator: "", // bot reveiwer role id
      profile: {
        sitecreator: "", //site owner's id
        booster: "", // booster role id
        sponsor: "", //sponser role id
        supporter: "", //supporter role id
        partnerRole: "" //partner role id
      },
      codeshare: {
        javascript: "", //javascript role id
        html: "", //html role id
        substructure: "", //substructure role id
        bdfd: "", // Bot Designer For Discord
        fiveInvite: "",
        tenInvite: "",
        fifteenInvite: "",
        twentyInvite: ""
      },
      botlist: {
        developer: "", //developer role id
        certified_developer: "", //certified developer role id
        bot: "", //bot role id
        certified_bot: "", // certified bot role id
        bug: "", //bug hunter role id
        premium_developer: "", // premium developer role id
        premium_bot: "", // premium bot role id
        staff: "" // staff role id
      }
    },
    channels: {
      codelog: "",//codelog channel id
      login: "",//login log channel id
      webstatus: "",// website status channel id
      uptimelog: "", //uptime link logs channel id
      botlog: "", //bot add, approve, decline, edit log channel id
      downtimelog: "",//bots downtime log channel id
      votes: ""//votes log channel id
    }
  }


}
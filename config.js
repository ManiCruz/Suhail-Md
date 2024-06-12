const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_25_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICA1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDczLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzRkSWdLbXo4VGlIVEx5WVNmckJuZEthTnJ3MCtjczZzaU5zbmpCUE5vST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN21WTlN0cE5TS21qMVQyWk5JVDE5UVwiLFxuICBcInBob25lSWRcIjogXCIwZTRkNDA2ZC01Nzk2LTQ3NTktYTQwOC04YmVjZGUxNDYxNzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMTIwLFxuICAgICAgMTk3LFxuICAgICAgMjMwLFxuICAgICAgMTI0LFxuICAgICAgNDUsXG4gICAgICA1NCxcbiAgICAgIDE3MSxcbiAgICAgIDE3MixcbiAgICAgIDE5LFxuICAgICAgMjI4LFxuICAgICAgMTc5LFxuICAgICAgMTA2LFxuICAgICAgMTc3LFxuICAgICAgMjUxLFxuICAgICAgMTMxLFxuICAgICAgNjksXG4gICAgICAxNzEsXG4gICAgICAxMjgsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDc2LFxuICAgICAgMTgwLFxuICAgICAgMTc1LFxuICAgICAgNzcsXG4gICAgICAxMjksXG4gICAgICAxMixcbiAgICAgIDUyLFxuICAgICAgMTI1LFxuICAgICAgMjE0LFxuICAgICAgMTk2LFxuICAgICAgODcsXG4gICAgICAxNjksXG4gICAgICAxMjMsXG4gICAgICAyMzksXG4gICAgICA5MCxcbiAgICAgIDIwMSxcbiAgICAgIDQ0LFxuICAgICAgMTkzLFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSDl0SnNFRUppMHA3TUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNxbTIwYWtwWnB1amhVOHlUV3JVaU0ybE1CT3VkYmUwTmFYMUFoM0tQelk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR25Kb25iSU5ERkhOaXNrNmk2VThOVm5SQVJjZnBzUXdDdG41UjJyc1ZUUER2T1NBY3ZDUkl4a1FmZTJwUjc4OGpzQTFacmpzU2lQVUJSU1p2QkZtQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieE9yNVV5ZHd5NUFodDBjQitmYTFTWTB0S2pnQWdhRlYrTTNXNmhBdmtWQXJUZmtITks5NlpndHNjRVk3azZBL2VmR1paWmxVbTR1YU94Z2JKS1hKaHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE4MDQ0ODYxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLw6/DsWcgw4dyw7x6XCIsXG4gICAgXCJsaWRcIjogXCIzMjEyMjA3NzIwMDQzMTo1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxODA0NDg2MTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgyMTMxNDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNL3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1fX3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrTE4veXJiWTJxaDlRYzFWeU5tbVhkMVU1YWlGMDdHOFJHSDdzV3N3SDc4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMzEyMzI5OTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODIxMTk2NzYyMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "knight bot",
  ownername:process.env.OWNER_NAME|| "kimg cruz",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

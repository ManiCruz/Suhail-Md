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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_46_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICA2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICAxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTksXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOWHYvQkZzMDdxbGN4bFNteG1CbTNYRjdiZTY0YlZPUWJkb2tOVEFjZ2VzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDTFdRZWFZcFNVZXcxb1lRTFFyVU1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg4NmZmMTc3LTRmY2QtNDhiMi1hYWUxLTIwNWI5ZTI0NGEwMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAyMDEsXG4gICAgICAyMDAsXG4gICAgICAyNCxcbiAgICAgIDg0LFxuICAgICAgMjI0LFxuICAgICAgMTc4LFxuICAgICAgMTQ4LFxuICAgICAgNTAsXG4gICAgICAyMDIsXG4gICAgICA5NyxcbiAgICAgIDExMCxcbiAgICAgIDUxLFxuICAgICAgMjExLFxuICAgICAgMjA0LFxuICAgICAgMTk0LFxuICAgICAgMTY2LFxuICAgICAgMTY4LFxuICAgICAgMTU2LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDIzOCxcbiAgICAgIDc3LFxuICAgICAgMTgxLFxuICAgICAgMTQ5LFxuICAgICAgMTA5LFxuICAgICAgMTQzLFxuICAgICAgMTQ2LFxuICAgICAgMTc5LFxuICAgICAgMTE5LFxuICAgICAgMjYsXG4gICAgICA4NyxcbiAgICAgIDIxOCxcbiAgICAgIDMwLFxuICAgICAgOTYsXG4gICAgICAyMzAsXG4gICAgICA0MyxcbiAgICAgIDIwNixcbiAgICAgIDEwMyxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOLzl0SnNFRUpUUjM3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNxbTIwYWtwWnB1amhVOHlUV3JVaU0ybE1CT3VkYmUwTmFYMUFoM0tQelk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT1Z6TDBVbXM0QTl2TVYrZDBkb01GN3Bwd2hvc0NqVFZiaXVFVThkc3QzYnVJU3h0Vk1wVlBzbDM2eXo0QXplMVFvSk1qMldVdmU2Wnp5STdxKzFpQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidk12SWE0M0w3elZVMElXVS9NNjNBbVJjbjVNWlpwTmRXNmRKS3oxWVNJSTFGY2pjVUlmQ1FjK0R3NWFiSHhCWU9IWmwrbC9aaHhWN3NtVHhudWRkQWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE4MDQ0ODYxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLw6/DsWcgw4dyw7x6XCIsXG4gICAgXCJsaWRcIjogXCIzMjEyMjA3NzIwMDQzMToxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxODA0NDg2MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcwMzcyMDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMclBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxyUC5qc29uIjogIntcImtleURhdGFcIjpcIkh5SXIyTDhnN2ZQK2pZMnF1Z3c0TzlLYWJTT0ZZZklRbkhtaXI3NVJVaXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzMTIzMjk5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MDM3MjE0NTc1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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

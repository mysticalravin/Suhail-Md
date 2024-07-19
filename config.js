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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_46_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5LFxuICAgICAgICA1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4NmtQQnp3QVlKTm5aOUtqV2JCcDN2ckV2dUNUOTdBRUp4ajYyTVMrSU8wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3amVHM2N5aFJHMmdxLUtTZV9lMVFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY5ZGJkM2Y5LWE4ZDktNDhlZC1iZjcyLWY5Nzg0YTlkYjZkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxNzksXG4gICAgICAyMzEsXG4gICAgICA0OCxcbiAgICAgIDQ1LFxuICAgICAgMTcyLFxuICAgICAgMjIwLFxuICAgICAgMTcyLFxuICAgICAgODcsXG4gICAgICAxNDEsXG4gICAgICAyNDcsXG4gICAgICA1NyxcbiAgICAgIDI0NyxcbiAgICAgIDM1LFxuICAgICAgMCxcbiAgICAgIDI0NCxcbiAgICAgIDY0LFxuICAgICAgMTg5LFxuICAgICAgMzksXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgNjQsXG4gICAgICAxMDksXG4gICAgICAxNjksXG4gICAgICA5NCxcbiAgICAgIDEyNixcbiAgICAgIDE2LFxuICAgICAgMTAyLFxuICAgICAgMTMyLFxuICAgICAgNDgsXG4gICAgICAxMzUsXG4gICAgICAxMDAsXG4gICAgICA4LFxuICAgICAgMTEyLFxuICAgICAgMTA5LFxuICAgICAgMjQ3LFxuICAgICAgMTM4LFxuICAgICAgMjA3LFxuICAgICAgMTcwLFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4zVkNHTEtNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDEwNjkxNDE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCcmF2aW5cIixcbiAgICBcImxpZFwiOiBcIjIyNDUzNzA2NTA1NDMwNzoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYktnZTRFRU11dzZyUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRnaFJlc3A0d3VjdENGdnowcUM4UlIvZCtSYjBQbjZCcXhKbXBSL082MDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUk05dWxad3ZBQmNVbmI1eFZ6U0RjN3FBMW84c2hINU5IQ2pMWnJTalNQRzNGVmY3b1hYUjh1aWR3NVVxQURvVEN0MGlTNlYyVmJRTmJ4L2tYd1BCQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY3pEN0JqeFNmdFYwZGtjSnhPTVUwVnhPeHhvVTV0R0dFc1pnZzVCTXR6cDk1NS9ZWVQ1VzBOcEd3OW9oOVdNSUowa1hhZU5lRUdMUTZHakRjWVI5aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQxMDY5MTQxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQwNzU2NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

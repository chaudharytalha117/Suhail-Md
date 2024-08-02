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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_26_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDQzLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY4LFxuICAgICAgICA4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDczLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYmE0cVlqUmtCNTJRZ1Z5K3ZIdkVrSHZBeTNMYnBkUnVJZmRZZk9XYkNUQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNDk0OTEzMjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU0OEFGRkY1QUE0RTU3NTg0QjE3QkQ2NDBFQjBCNTdGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyMzIwOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA0OTQ5MTMyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkVGNjBGNjZBQjFBMUQ4M0Q1NzUyNjU0M0IyRURGMDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjIzMjA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDQ5NDkxMzI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMEQ4OTgzMzU3RjI0RDIyNjk2QjAxMTNGMjA5RkREOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2MjMyMTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNDk0OTEzMjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZGNzQ3NjIyOURGRjRCMzI2N0RCNjA2MkYzNjk0MjZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyMzIxMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0UWNSRU1nSFJvU2lvdVVmblQ2M0p3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE2YWE5MDgyLWYzYTYtNGZkNy1iYjhjLWY4NDRjZDJmYzEyOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDEyNCxcbiAgICAgIDE0NSxcbiAgICAgIDMxLFxuICAgICAgMTIyLFxuICAgICAgMTA4LFxuICAgICAgMCxcbiAgICAgIDIxNixcbiAgICAgIDQ2LFxuICAgICAgMjI0LFxuICAgICAgNjAsXG4gICAgICA3MSxcbiAgICAgIDksXG4gICAgICAxNSxcbiAgICAgIDE1LFxuICAgICAgMjE4LFxuICAgICAgMjAwLFxuICAgICAgMTMwLFxuICAgICAgMTYxLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDk0LFxuICAgICAgMTIyLFxuICAgICAgMjM3LFxuICAgICAgMTQ0LFxuICAgICAgMTY1LFxuICAgICAgMTQyLFxuICAgICAgMjQ3LFxuICAgICAgMjE2LFxuICAgICAgMTMwLFxuICAgICAgNzksXG4gICAgICA3OCxcbiAgICAgIDc5LFxuICAgICAgMTA1LFxuICAgICAgMjM0LFxuICAgICAgMjAyLFxuICAgICAgMjUxLFxuICAgICAgMTYyLFxuICAgICAgMjMzLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUZKV0ZMUzFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA0OTQ5MTMyNjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjI5NzMwMjA1OTAxMDI6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLKmeG0j+G0myDhtIvJqsm0yaIg8J+ko/CfpKNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaTR1b2tERU9USnRMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlDV0NxcU1JMnRPMHJIU01zeEFEL1NUNUxRalFGclRWZGFualhna1N2M3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWTl5SjZHc3pYMzZ1bFZKQjhvVzkybGxaWkZMZUV2VHFVczMvQ2tPM3MxNzdQYTk1OXFHeDdVeGNrSmNSZHhSVmt0eWhRRmlhV0NpYXYvc09XdDRPREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMlFEZkJmc2tUbW5vYlptVmNyY08rRjhoYm9MeE1UeTMwUHFIaVMwR1J4Tk5pZXJJdUxJblFtbWxPVlRmZjM4MFcvZjl4UGtFNU0wNTdoM0FXV0o2RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDQ5NDkxMzI2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2MjMyMDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNSFJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1IUi5qc29uIjogIntcImtleURhdGFcIjpcIlh2dFMyVW4yKzNLWVdjVUI5YTFGS2dtai9LeHB2RnYxdGJwZ2w3cXBzN1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODI1MTM4MjQ4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MjMyMDkyOTNcIn0iCn0="  // PUT your SESSION_ID 


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

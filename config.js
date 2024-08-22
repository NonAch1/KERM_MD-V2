//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/29667101ca2cd54339925.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237656468700";
global.owner = process.env.OWNER_NUMBER || "237692798136";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/1e0569abb0f309e47aa95.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZRa0FZOUowNDEwZWx1SzFGVkgydmZ0QmRqSS9rb3BzR3FnQVF1bnJsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWtwckFhM0dFVm9ZeHNRdVZIcjRsMVFiajV2eDdmSXVDMzFOMkZhbkpGMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRGQ3Y2xBNjlwRTlIK2E2eDBtL2Z6eUlkUmFPb2trNjJZbmFZMjlYZFhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQQk1zZ2VGMW1QaWUxaGluSmMvdHR2TzloNU5ZSnVrK3dUc1BWWFdOSkU4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVMVFEzcVMzaHNJRHhvclNWWGpNcXRCYlRCRHRhQmVFNDN3TlZ5ZjhiSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVrVHNaZ2YzRTdVdElIUnJ2T1BJK2FQcHkwcXcxNi9NdktrYXFNVFNRQjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZKeWZLWi9rQ3p1UE82NmVFMHUwdkw3QUsvY2ZCdHpmMkVUdmlvc1QwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZWRWdmSHNlcGNGWWs4R2FvZU1Fd1dIRFJPK2oyd28wcnZucWd1YlFFUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlUQlRJYkRWUzVQYVB4Ukt5SnhhaXVrMzZVMmhyQ1dRams2dU0xTkVTamNJT29jUy9VeGRNM01uUkd5QmhlQkh2ZnJ4NjE2TlJKWW9lZjJNSkFjWENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6IkEwRmw4SnlCN1BzWTF2dHZ4ckRQcER6Y0FSbFFNUzltZmRNaXlWV2FlZ1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNodldpSWVsUVNPOGhaa2d2b2JRQWciLCJwaG9uZUlkIjoiMjBlOGZjOTEtZWM0ZC00OWU5LTljZTctNmEyODRjMDczMjUwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRURTl1RG1NQVovaDVCdlBBZmhmRUl0djRITT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJta1pYaHpOTWNhSTlleHJUZW9lQ1gwNDQzZjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUhQNE1CNVIiLCJtZSI6eyJpZCI6IjIzNzY5Mjc5ODEzNjoxMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT210bHZNRUVLS0NnYllHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTkZGUDFYMmR2U3VoN0RHUUFOWnMrUmtjSHJBdnpkcVU5MG5xRG0xMnJpST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVHFqTEo0ZFBSTlAyYWhlZFU0d1kwaTVpa1JmYmNzaEFHcVZRR1VybEQ1Zzc1LzR2WmQ2NTlYRnY5NVhjcW9ORis0RXBHbGdDL0pQcVRIb2tYVHE1RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IktMeHFrdExoVGxqcGdrQS9NLzZIbzMwWHhNQ1NPUWdiLzBua0M4djBqMlFJWVV1UjJsK2hlSjc4SXI1ZlkrSlVPV3hjTktpVUVRYmxBMmZ0UzgyMkJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjkyNzk4MTM2OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRSUlQ5VjluYjByb2V3eGtBRFdiUGtaSEI2d0w4M2FsUGRKNmc1dGRxNGkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4NzU2MzF9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "★",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "RISE UP",
  author: process.env.PACK_AUTHER || "★",
  packname: process.env.PACK_NAME || "𝐶ℎ𝑖𝑦𝑜",
  botname: process.env.BOT_NAME || "𝐶𝐻𝐼𝑌𝑂 𝑀𝐼𝑍𝑈𝑁𝑂",
  ownername: process.env.OWNER_NAME || "*CHIYO*",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

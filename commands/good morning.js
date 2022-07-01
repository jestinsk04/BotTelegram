/*CMD
  command: good morning
  help: 
  need_reply: 
  auto_retry_time: 3000
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

// can be runned with Auto Retry only!
if(chat){ return }

let time = new Date()
let hours = time.getHours();
let minutes = time.getMinutes();

let curTime = "Time: " + hours + ":" + minutes + " GMT-0";
msg = "";

if(hours==6){
  msg = "Good morning!\n" + curTime;
}

if(Math.random() > 0.8){
  // send "Good morning" only on 20% times
  Bot.sendMessageToAllChats(msg);
}

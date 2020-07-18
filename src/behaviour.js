import {webController} from "./modules/webController.js";
import {chatbot} from "./modules/chatbot/chatbot.js";

//initialize the webcontroller to intigrate default settings
var controller = new webController();

//integrate the menu with functionallitys
controller.menu();

//initialize and intigrate the chatbot
var bot = new chatbot();
bot.createUI()
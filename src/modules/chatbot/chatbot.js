export class chatbot{
    constructor(){
        this.__userMessages = [];
        this.__botMessages = [];
        this.__newMessage = false;
    }

    createUI(){
        this.__createBotButton();
        this.__createPanel();

        //creating the first bot-message
        let greetings = 'Hello, my name is Keviel and I am here to help you.\
                        Have you any questions?'
        this.__newMessage = true
        this.__createBotMessage(greetings)
    }

    //creating the panel, whiche the user can interacte with
    __createPanel(){
        let panel = document.createElement("div")
        
        //creating the button to send a message
        let send = document.createElement('span');
        send.classList = "material-icons";
        send.innerText = 'send';
        send.addEventListener('click', this.__createUserMessage)

        //creating the input for the message
        let textchat = document.createElement('input');
        textchat.placeholder = 'Message...'
        
        //adds the usermessage-layout to the chat with the user-message and creating a response from the bot
        textchat.addEventListener('keydown', function(event){ 
            if(event.keyCode === 13){
                this.__createUserMessage();
            }
        }.bind(this));
        
        //panel of the chatbot 
        panel.innerHTML = 
        '<div id="botPanel">\
            <div id="upperBar"></div>\
            <div id="chat"></div>\
            <div id="message-text">\
                <div class="chatbutton">\
                    <span class="material-icons">add</span>\
                </div>\
                <div id="textInput">\
                </div>\
                <div class="chatbutton">\
                </div>\
            </div>\
        </div>'

        //appendig all necessary elements to the panel
        document.body.appendChild(panel);
        document.querySelector('#textInput').appendChild(textchat);
        document.querySelectorAll('.chatbutton')[1].appendChild(send);

    }

    //inserts the button, to show the chatbot-panel
    __createBotButton(){
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "src/modules/chatbot/cb.css";
        document.head.appendChild(link);

        let link2 = document.createElement("link");
        link2.rel = "stylesheet";
        link2.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        document.head.appendChild(link2);

        let presenter = document.createElement("div");
        presenter.classList = "botPresenter";
        //panel.innerHTML =  '<img src="src/modules/chatbot/face-24px.svg">'
        presenter.innerHTML =  '<img src="src/modules/chatbot/src/face-24px.svg">';
        presenter.addEventListener('click', this.__showPanel);
        document.body.appendChild(presenter);

    }

    //changes the icon on the botPresenter and show or hide the chatpanel
    __showPanel(){
        let panel = document.querySelector('#botPanel');
        let img = document.querySelector('.botPresenter img');
        img.classList.toggle('rotate');

        if(panel.style.display === 'block'){
            panel.style.display = 'none';
            img.src = "src/modules/chatbot/src/face-24px.svg";
        }else{
            panel.style.display = 'block';
            img.src = "src/modules/chatbot/src/clear-24px.svg";
        }
    }

    //take the message from the user and creating a new visible message in the chat-history
    __createUserMessage(){
        let userMessage = document.querySelector('#textInput input');

        //creating the usermessage-layout and adds the text
        if(userMessage.value !== ''){
            let chatMessage = document.createElement('div');
            chatMessage.classList = 'container userMessage';
            chatMessage.innerHTML = 
                '<div>' + userMessage.value + '</div>\
                <span class="time-left">' + new Date().getHours() + ':' + new Date().getMinutes()+ '</span>';
                
            document.getElementById('chat').appendChild(chatMessage);

            this.__createBotMessage(userMessage.value);
            this.__userMessages.push(userMessage.value);
            userMessage.value = '';
            this.__newMessage = true;
        }
    }

    //creating a layout for the response from the bot and insert the message
    __createBotMessage(response){
        if(this.__newMessage){

            setTimeout(function(){
                let chatMessage = document.createElement('div');
                chatMessage.classList = 'container botMessage';
                chatMessage.innerHTML = 
                    '<div>' + response + '</div>\
                    <span class="time-right">' + new Date().getHours() + ':' + new Date().getMinutes()+ '</span>';
                    
                document.getElementById('chat').appendChild(chatMessage);
                this.__botMessages.push('test')
                this.__newMessage = true;
            }.bind(this), 1000);
        }
    }
    
    //get all contained messages from the user
    get userMessages(){
        return this.__userMessages;
    }  

    //get all contained messages, generated from the bot
    get botMessages(){
        return this.__botMessages;
    }
}

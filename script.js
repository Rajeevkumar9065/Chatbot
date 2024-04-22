var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = { message: "" };

var arrayOfPossibleMessage = [
    { message: "hii", response: "hey" },
    { message: "how are you?", response: "i am good !" },
    { message: "what is your name?", response: "i am chatbot !" },
    { message: "what is your developer?", response: "Rajeev" },
];

function sendMessage(userMessage) {
    var messageElement = document.createElement('div');

    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

    messageElement.innerHTML = "<span> You:</span>" +
        "<span>" + userMessage + "</span>";

    chatContainer.appendChild(messageElement);
}

function chatbotResponse(userMessage) {
    var chatbotmessage = "";

    if (userMessage.length > 5 || userMessage === "hii") {
        var result = arrayOfPossibleMessage.find(val => val.message.includes(userMessage.toLowerCase()));
        if (result) {
            var response = result.response;
            chatbotmessage = response;
        } else {
            chatbotmessage = "Please send another message";
        }
    } else {
        chatbotmessage = "Please send a different message";
    }

    var messageElement = document.createElement('div');

    messageElement.innerHTML = "<span>Chatbot:</span>" + "<span>" + chatbotmessage + "</span>";

    setTimeout(() => {
        messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 })
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);

    chatContainer.appendChild(messageElement);
}

sendBtn.addEventListener('click', function(e) {
    var userMessage = textbox.value;
    if (userMessage === "") {
        alert('please type a message');
    } else {
        let userMessageText = userMessage.trim();
        user.message = userMessageText;

        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
    }
});

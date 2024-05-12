const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;

const createChatLi = (message,className) => {
    //
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = () => {
    //Unir a base de datos para generar respuestas
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

//
    chatbox.appendChild(createChatLi(userMessage,"outgoing"));
    setTimeout(()=>{
        chatbox.appendChild(createChatLi("Escribiendo...","incoming"));

    },600)

}

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", ()=> document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", ()=> document.body.classList.toggle("show-chatbot"));
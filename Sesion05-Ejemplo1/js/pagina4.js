const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotForm = document.getElementById('chatbot-input-area');

chatbotToggle.onclick = () => {
  chatbotContainer.style.display = 'flex';
  chatbotToggle.style.display = 'none';
  chatbotInput.focus();
};

chatbotClose.onclick = () => {
  chatbotContainer.style.display = 'none';
  chatbotToggle.style.display = 'block';
};

function appendMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chatbot-message ' + sender;
  const bubble = document.createElement('div');
  bubble.className = 'chatbot-bubble';
  bubble.textContent = text;
  msgDiv.appendChild(bubble);
  chatbotMessages.appendChild(msgDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function botReply(userText) {
  // Respuestas simples de ejemplo
  let reply = "No entendí tu mensaje. ¿Puedes reformularlo?";
  const text = userText.toLowerCase();
  if (text.includes('hola') || text.includes('buenas')) {
    reply = "¡Hola! ¿Cómo puedo ayudarte?";
  } else if (text.includes('adios') || text.includes('gracias')) {
    reply = "¡Hasta luego! Si necesitas algo más, aquí estaré.";
  } else if (text.includes('ayuda')) {
    reply = "Claro, dime en qué necesitas ayuda.";
  }
  setTimeout(() => appendMessage(reply, 'bot'), 600);
}

chatbotForm.onsubmit = function(e) {
  e.preventDefault();
  const userText = chatbotInput.value.trim();
  if (!userText) return;
  appendMessage(userText, 'user');
  chatbotInput.value = '';
  botReply(userText);
};
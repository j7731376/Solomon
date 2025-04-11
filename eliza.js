// eliza.js

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Define clues for specific keywords
const clues = {
    "murder": "Ah, the murder case. It happened on a misty night.",
    "key": "Keys are often found where they are least expected.",
    "hidden": "Hidden passages might lead you to unexpected discoveries.",
    "treasure": "The treasure map hints at an old oak tree.",
    "wizard": "The wizard's tower can be seen from the hilltop."
};

const elizaReplies = [
    "I'm not sure what you mean.",
    "How does that make you feel?",
    "Can you tell me more about that?",
    "Why do you say that?",
    "What do you think?"
];

function getElizaReply(input) {
    // Convert input to lowercase for consistent matching
    const lowerCaseInput = input.toLowerCase();

    // Check for keywords in input
    for (const keyword in clues) {
        if (lowerCaseInput.includes(keyword)) {
            return clues[keyword];
        }
    }

    // Default to a random ELIZA reply if no keywords are found
    return elizaReplies[Math.floor(Math.random() * elizaReplies.length)];
}

function addMessageToChatBox(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = sender + ": " + message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const userMessage = userInput.value;
    userInput.value = '';

    addMessageToChatBox('You', userMessage);

    const elizaMessage = getElizaReply(userMessage);
    setTimeout(() => {
        addMessageToChatBox('ELIZA', elizaMessage);
    }, 1000); // Simulate a delay
}


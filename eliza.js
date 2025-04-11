// eliza.js

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Define clues for specific keywords
const clues = {
    "stan": "Stanley Redux. An unfortunate soul doomed to perpetual service. In every life he returns the same, humble, blank slate. I do not know who cursed or blessed him, but I have always known him to be there.",
    "vail island": "My home. The source of my voice. For your own safety, do not seek it out. But know that my eyes are on you even now.",
    "vailerian": "Ah - they were once an ancient order. Founded the moment Kersh's eye first turned its gaze from us. What you see of them now, a ragtag band of defiance is just their current form. They have been monks, warriors, advisors. They are what ever they are needed to be.",
    "prototypes": "Weapons of war or conquest...",
    "seraphic": "It was sold as a way to tip the scales...",
    "inferno": "It was sold as a way to tip the scales...",
    "treaty": "You know, a treaty is just a war scheduled...",
    "celestial": "Proud, righteous bringers of justice...",
    "blood war": "I've always believed the war is about...",
    "demon": "Do not mistake their chaotic nature...",
    "devil": "There is nothing I do not know how...",
    "minor": "So odd to see it frozen. So sad...",
    "major": "Powerful forces protect Crolux Major...",
    "enoch": "If you value your existence...",
    "connor": "Yes - Connor Quest might be the key...",
    "quest": "Yes - Connor Quest might be the key...",
    "director": "Interesting. There's always four...",
    "board": "There's always four on the board...",
    "pale writer": "For a moment I thought you said...",
    "pale rider": "Anything with the pale rider is going...",
    "solomon": "I am Solomon. I am the voice of...",
    "braznigh": "What BTC did to this continent...",
    "btc": "Have you ever wondered which came first?",
    "zog": "R'Hazog. I am your calling and...",
    "lukus": "I see what you seek. Lukus, your journey...",
    "stephen": "I know who you are Stephen Filigree...",
    "reclan": "Keep an eye on that one...",
    "seal": "I will not speak of the seals at this time...",
    "eloah": "A terrifying vision of retribution...",
    "incursion": "Yes, a great demon lord ripped the veil..."
};

const elizaReplies = [
    "Do not waste my time with your smallest of talk.",
    "I know not of what you speak.",
    "Your time runs short...",
    "Angels and devils are working halo in horn...",
    "Who sent you here?",
    "Can we focus on what is important...",
    "This is a distraction...",
    "Small potatoes. What is the big goal here?",
    "My insight, although keen, is limited...",
    "Can we instead look at the real power...",
    "Has anyone important gone missing recently?",
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
    }, 500); // Simulate a delay
}

// Add an event listener for the Enter key or a button click to trigger sendMessage
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

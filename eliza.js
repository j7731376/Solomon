// eliza.js

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Define clues for specific keywords
const clues = {
    "stan": "Stanley Redux. An unfortunate soul doomed to perpetual service. In every life he returns the same, humble, blank slate. I do not know who cursed or blessed him, but I have always known him to be there.",
    "vail island": "My home. The source of my voice. For your own safety, do not seek it out. But know that my eyes are on you even now.",
    "vailerian": "Ah - they were once an ancient order. Founded the moment Kersh's eye first turned its gaze from us. What you see of them now, a ragtag band of defiance is just their current form. They have been monks, warriors, advisors. They are what ever they are needed to be.",
    "prototypes": "Weapons of war or conquest. I know little about these prototypes but I have no doubt they will be used on the battle field of the blood war or to subdue some unfortunate village sitting on valuable resources.",
    "seraphic": "It was sold as a way to tip the scales of the endless Blood War. Celestials and devils sharing resources and creating a blockade that could choke off the supply of souls used by the demons. But what happens if it fails? Or worse, if it succeeds? What happens to this grubby little plane of existence if the battlelines give by even an inch?",
    "inferno": "It was sold as a way to tip the scales of the endless Blood War. Celestials and devils sharing resources and creating a blockade that could choke off the supply of souls used by the demons. But what happens if it fails? Or worse, if it succeeds? What happens to this grubby little plane of existence if the battlelines give by even an inch?",
    "treaty": "You know, a treaty is just a war scheduled for later.",
    "celestial": "Proud, righteous bringers of justice brought low by this treaty. Do not lie to them. ",
    "blood war": "I've always believed the war is about the souls. No matter where the frontlines are drawn, it all seems to be about who controls where the souls go.",
    "demon": "Do not mistake their chaotic nature for idiocy. They are impulsive but their impulse is to consume. An eon of plans to reach that end passes differently to their kind than it does to us. They are difficult to trick and must not be trusted. Even if they're controlled, do not get lulled into a false sense of security. Always be on guard around them.",
    "devil": "There is nothing I do not know how the celestial orders could have lowered themselves so completely. Do not trust a devil's deal. Not because it lies, but because every letter of the contract is an unbreakable shackle around your soul.",
    "minor": "So odd to see it frozen. So sad to see Denae in shadow. Did you know there was a demonic incursion there once.",
    "major": "Powerful forces protect Crolux Major. But even they will be consumed by BTC's endless hunger.",
    "enoch": "If you value your existence, you will not utter that name again. I warn you. Do not say that name.",
    "connor": "Yes - Connor Quest might be the key. What was his role in the company?",
    "quest": "Yes - Connor Quest might be the key. What was his role in the company?",
    "director": "Interesting. There's always four of them and they never seem to die. If he had died, the impact would have shaken the world. He must be contained some place. Be circumspect in your investigations.",
    "board": "There's always four on the board. It's an interesting number. If the company lost a board member, who did it replace them with?",
    "pale writer": "For a moment I thought you said Pale Rider.",
    "pale rider": "Anything with the pale rider is going to be a big discussion, and even I do not betray their secrets. If you want to find the Pale Rider, examine your blind spots closely.",
    "solomon": "I am Solomon. I am the voice of he who watches and preserves. I speak for the guardian of the Megiddo. I am Solomon.",
    "braznigh": "What BTC did to this continent is just a taste of what will happen to this world. ",
    "btc": "Have you ever wondered which came first? The treaty or the company?",
    "zog": "R'Hazog. I am your calling and your future. You must put down the beer and take up the battle axe.",
    "lukus": "I see what you seek. Lukus, your journey will be long and take you further than you can imagine.",
    "stephen": "I know who you are Stephen Filigree. A line connects you to those who may yet save this world.",
    "reclan": "Keep an eye on that one. I do not know what his role will be, but he will play a part in what happens next."
    "seal": "I will not speak of the seals at this time. Pray that the day I must speak of them never arrives.",
    "incursion": "Yes, a great demon lord ripped the veil between planes of existence. I believe it is the newest front of the Blood War."

};

const elizaReplies = [
    "Do not waste my time with your smallest of talk.",
    "I know not of what you speak.",
    "Your time runs short. Even now, the unwavering moon locks you in a land of shadow.",
    "Angels and devils are working halo in horn. How can that not be your main concern!",
    "Who sent you here?",
    "Can we focus on what is important. The eyes of the Eloah are turning our way as we speak!",
    "This is a distraction. Who pulls the strings?",
    "Small potatoes. What is the big goal here?",
    "My insight, although keen, is limited in regards to that.",
    "Can we instead look at the real power in the land?",
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
    }, 1000); // Simulate a delay
}

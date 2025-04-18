// nanobot.js

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Define clues for specific keywords
const clues = {
    "dbi00x": "Project DBI 00X.\n  OIC: Drip, Carmine\n  Overview: REDACTED. ROOT ACCESS REQUIRED.\n  Goal: Decisive victory in the Blood War.\n  Team: REDACTED. ROOT ACCESS REQUIRED.",
    "root access": "Enter root access password.",
    "dbi00x": "Project DBI 00X.\n  Overview: Company operatives successfully harvested extraplanar organic powersource to to enhance nanobot processing capabilities. Game changing advancements trumped ethical concerns and risk assessments.\nStatus: Monitoring and Control\n  Team:\n   *Damaris, Silas: KIA\n   *Drip, Carmine: Active\n   \n   *Glan, Levistor: Reassigned*Khara, Zaphkiel: Reassigned\n   *Straven, Caine: MIA\n   *Vex, Dorian: Reassigned",
    "data harvesting": "New environment detected. Background data harvesting ongoing.",
    "infernal lion": "Project ILC 391\n  Overview: Large construct developed for sentry duty at bridgeheads, camps, and other temporary fortifications off the battlefield.\n  Status: Active",
    "vail": "Vailerians: Loosely knit terrorist organization consisting of semi-autonomous cells scattered across the world.\nInstructions: Kill on sight.",
    "stan": "Stanley Redux. An unfortunate soul doomed to perpetual service. In every life he returns the same, humble, blank slate. I do not know who cursed or blessed him, but I have always known him to be there.",
    "vail island": "My home. The source of my voice. For your own safety, do not seek it out. But know that my eyes are on you even now.",
    "vailerian": "Ah - they were once an ancient order. Founded the moment Kersh's eye first turned its gaze from us. What you see of them now, a ragtag band of defiance is just their current form. They have been monks, warriors, advisors. They are what ever they are needed to be.",
    "prototypes": "Weapons of war or conquest. I know little about these prototypes but I have no doubt they will be used on the battle field of the blood war or to subdue some unfortunate village sitting on valuable resources.",
    "seraphic": "It was sold as a way to tip the scales of the endless Blood War. Celestials and devils sharing resources and creating a blockade that could choke off the supply of souls used by the demons. But what happens if it fails? Or worse, if it succeeds? What happens to this grubby little plane of existence if the battlelines give by even an inch?",
    "inferno": "It was sold as a way to tip the scales of the endless Blood War. Celestials and devils sharing resources and creating a blockade that could choke off the supply of souls used by the demons. But what happens if it fails? Or worse, if it succeeds? What happens to this grubby little plane of existence if the battlelines give by even an inch?",
    "treaty": "You know, a treaty is just a war scheduled for later.",
    "celestial": "Proud, righteous bringers of justice brought low by this treaty. Do not lie to them.",
    "blood war": "I've always believed the war is about the souls. No matter where the frontlines are drawn, it all seems to be about who controls where the souls go.",
    "demon": "Do not mistake their chaotic nature for idiocy. They are impulsive but their impulse is to consume. An eon of plans to reach that end passes differently to their kind than it does to us. They are difficult to trick and must not be trusted. Even if they're controlled, do not get lulled into a false sense of security. Always be on guard around them.",
    "devil": "I do not know how the celestial orders could have lowered themselves so completely. Do not trust a devil's deal. Not because it lies, but because every letter of the contract is an unbreakable shackle around your soul.",
    "minor": "So odd to see it frozen. So sad to see Denae in shadow. Did you know there was a demonic incursion there once.",
    "major": "Powerful forces protect Crolux Major. But even they will be consumed by BTC's endless hunger.",
    "enoch": "If you value your existence, you will not utter that name again. I warn you. Do not say that name.",
    "connor": "Yes - Connor Quest might be the key. What was his role in the company?",
    "quest": "Yes - Connor Quest might be the key. What was his role in the company?",
    "director": "Interesting. There's always four of them and they never seem to die. If he had died, the impact would have shaken the world. He must be contained some place. Be circumspect in your investigations.",
    "board": "There's always four on the board on the board. It's an interesting number. If the company lost a board member, who did it replace them with?.",
    "pale writer": "For a moment I thought you said Pale Rider.",
    "pale rider": "Anything with the pale rider is going to be a big discussion, and even I do not betray their secrets. If you want to find the Pale Rider, examine your blind spots closely.",
    "solomon": "I am Solomon. I am the voice of he who watches and preserves. I speak for the guardian of the Megiddo. I am Solomon.",
    "braznigh": "What BTC did to this continent is just a taste of what will happen to this world.",
    "btc": "Have you ever wondered which came first? The treaty or the company?",
    "zog": "R'Hazog. I am your calling and your future. You must put down the beer and take up the battle axe.",
    "lukus": "I see what you seek. Lukus, your journey will be long and take you further than you can imagine.",
    "stephen": "I know who you are Stephen Filigree. A line connects you to those who may yet save this world.",
    "reclan": "Keep an eye on that one. I do not know what his role will be, but he will play a part in what happens next.",
    "seal": "I will not speak of the seals at this time. Pray that the day I must speak of them never arrives.",
    "eloah": "A terrifying vision of retribution. They are both Celestials and the greatest weapon of the Celestials.",
    "yes": "Very well then. Unfortunately, I am a shadow of my whole self, and I hear your answer but remember no context.",
    "no": "So be it. Unfortunately, I am a shadow of my whole self, and I hear your answer but remember no context.",
    "69": "Nice.",
    "moon": "Yes. Have you not noticed how Crolux Minor has left the world in its perpetual eclipse?",
    "crolux": "Yes. Even as Crolux Major marks your remaining secular days, Crolux Minor leers and blocks the sun.",
    "eloah": "A terrifying vision of retribution. They are both Celestials and the greatest weapon of the Celestials.",
    "incursion": "Yes, a great demon lord ripped the veil between planes of existence. I believe it is the newest front of the Blood War."
};

const nanobotReplies = [
    "Error: No hooks found.",
    "Error: Dataset corrupted.",
    "Error: Environmental contextuality undefined.",
    "Error: PEBCAK",
    "Error: Initialization Process still frontloading.",
    "**kzzzt**\n            **kzzzt**\n                                    **kzzzt**",
    "                                                **kzzzt**\n                        **kzzzt**\n**kzzzt**",
    "Data harvesting in progress",
    "Small potatoes. What is the big goal here?",
    "My insight, although keen, is limited.",
    "Can we instead look at the real power in this land.",
    "Has anyone important gone missing recently?",
    "I'm not sure what you mean.",
    "How does that make you feel?",
    "Can you tell me more about that?",
    "Why do you say that?",
    "What do you think?"
];

function getnanobotReply(input) {
    // Convert input to lowercase for consistent matching
    const lowerCaseInput = input.toLowerCase();

    // Check for keywords in input
    for (const keyword in clues) {
        if (lowerCaseInput.includes(keyword)) {
            return clues[keyword];
        }
    }

    // Default to a random nanobot reply if no keywords are found
    return nanobotReplies[Math.floor(Math.random() * nanobotReplies.length)];
}

function addMessageToChatBox(sender, message) {
    const messageElement = document.createElement('div');
    // Replace newline characters with HTML line breaks
    const formattedMessage = message.replace(/\n/g, '<br>');
    messageElement.innerHTML = sender + ": " + formattedMessage;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function sendMessage() {
    const userMessage = userInput.value;
    userInput.value = '';

    addMessageToChatBox('You', userMessage);

    const nanobotMessage = getnanobotReply(userMessage);
    setTimeout(() => {
        addMessageToChatBox('DBI00X', nanobotMessage);
    }, 1000); // Simulate a delay
}

// Add an event listener for the Enter key or a button click to trigger sendMessage
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

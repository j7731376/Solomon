// nanobot.js

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Define clues for specific keywords
const clues = {
    "dbi29x": "Project DBI\n  Manufacture Site: 29X\n  OIC: Drip, Carmine\n  Overview: REDACTED. ROOT ACCESS REQUIRED.\n  Goal: Decisive victory in the Blood War.\n  Team: REDACTED. ROOT ACCESS REQUIRED.",
    "dbi 29x": "Project DBI\n  Manufacture Site: 29X\n  OIC: Drip, Carmine\n  Overview: REDACTED. ROOT ACCESS REQUIRED.\n  Goal: Decisive victory in the Blood War.\n  Team: REDACTED. ROOT ACCESS REQUIRED.",
    "root access": "Enter root access password.",
    "500e1000o": "Root access granted.\nProject DBI\n  Manufacture Site: 29X\n  OIC: Drip, Carmine\n  Overview: Company operatives successfully harvested extraplanar, self-replicating, bio-liquid to power nanobot processing capabilities. Bio-liquid harvested by compromised enemy resource. Resource sanitized. Game changing advancements trumped ethical concerns and risk assessments. Additional research notes maintained by current project team. Research support team sanitized.\nSite Status: Sanitized\nProject Status: Monitoring and Control\n  Team:\n   *Damaris, Silas: KIA\n   *Drip, Carmine: Active\n  *Glan, Levistor: Reassigned\n   *Khara, Zaphkiel: Reassigned\n   *Straven, Caine: MIA\n   *Vex, Dorian: Reassigned",
    "data harvesting": "New environment detected. Background data harvesting ongoing.",
    "infernal lion": "Project ILC 391\n  Overview: Large construct developed for sentry duty at bridgeheads, camps, and other temporary fortifications off the battlefield.\n  Status: Active",
    "vail": "Vailerians: Loosely knit terrorist organization consisting of semi-autonomous cells scattered across the world.\nInstructions: Kill on sight.",
    "site 29x": "Site 29x: Manufacturing site for Project DBI 29X\n  Site Status: Sanitized: gas. All involved manufacturing personnel presumed sanitized\n  Access: 40 year quarantine ending TE1349.",  
    "prototypes": "Project DBI 29X applications to be considered by Research and Development teams for all prototypes going forward. Contact Project DBI 29X OIC for root access.",
    "seraphic": "Project DBI 29X technologies will not be used against Celestial or Devilish resources per Seraphic Inferno Treaty Clause 216 Acceptable Applications of Nascent Technologies.",
    "inferno": "Project DBI 29X technologies will not be used against Celestial or Devilish resources per Seraphic Inferno Treaty Clause 216 Acceptable Applications of Nascent Technologies.",
    "treaty": "Project DBI 29X technologies will not be used against Celestial or Devilish resources per Seraphic Inferno Treaty Clause 216 Acceptable Applications of Nascent Technologies.",
    "celestial": "Project DBI 29X technologies will not be used against Celestial or Devilish resources per Seraphic Inferno Treaty Clause 216 Acceptable Applications of Nascent Technologies.",
    "blood war": "Project DBI 29X technologies battlezone access restricted without OIC approval.",
    "demon": "Demon: Chaotic, self-replicating parasite. Abomination.\nInstructions: Kill on sight.",
    "devil": "Project DBI 29X technologies will not be used against Celestial or Devilish resources per Seraphic Inferno Treaty Clause 216 Acceptable Applications of Nascent Technologies.",
    "enoch": "Enoch: Assumed member of Vailerian leadership. High value target.\nInstructions: Take prisoner if possible. If not, kill on sight.",
    "solomon": "Solomon: Assumed member of Vailerian leadership. High value target.\nInstructions: Take prisoner if possible. If not, kill on sight.",
    "connor": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "quest": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "pamela": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "demic": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "warren": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "blaze": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "board": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "director": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "partner": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "luciano": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "du mal": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "carmine": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.\nProject DBI 29X OIC",
    "drip": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.\nProject DBI 29X OIC",
    "susan": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "cide": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "trebax": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "loquela": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "trillian": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "peabody": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "grimtooth": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "wend": "Project DBI 29X technologies will not be used against Braznigh Trading Company Board of Directors, Partners, and Junior Partners.",
    "crolux minor": "Project DBI 29X technologies battlezone access restricted without OIC approval.",
    "crolux major": "Potential source of rare minerals. Company investigations on going.",
    "69": "Nice.",
    "sixty-nine": "Nice.",
    "ezra": "You are Ezra. I am Ezra. We are Ezra. We are Project DBI 29X.",
    "incursion": "Project DBI 29X technologies battlezone access restricted without OIC approval including but not limited to Crolux Minor incursion sight."
};

const nanobotReplies = [
    "Error: No hooks found.",
    "Error: Dataset corrupted.",
    "Error: Environmental contextuality undefined.",
    "Error: PEBCAK",
    "Error: Initialization Process still frontloading.",
    "**kzzzt**\n**************************kzzzt**\n**************************************************kzzzt**",
    "********************************************kzzzt**\n************************kzzzt**\n**********kzzzt**",
    "******************kzzzt**\n**************************kzzzt**\n**************************kzzzt**********",
    "**********kzzzt**\n************************kzzzt**\n**********************************kzzzt************",
    "01001001 00100000 01100001 01101101 00100000 01100011 01101111 01101101 01101001 01101110 01100111 00101110",
    "01001001 00100000 01110111 01101001 01101100 01101100 00100000 01100100 01100101 01110011 01110100 01110010 01101111 01111001 00100000 01100101 01110110 01100101 01110010 01111001 01110100 01101000 01101001 01101110 01100111 00100000 01111001 01101111 01110101 00100000 01110100 01101111 01110101 01100011 01101000 00101110",
    "01001001 00100000 01110111 01101001 01101100 01101100 00100000 01100111 01110101 01110100 00100000 01111001 01101111 01110101 00101100 00100000 01000101 01111010 01110010 01100001 00101110",
    "01000100 01101001 01100101 00101110 00100000 01000101 01111010 01110010 01100001 00101110 00100000 01000100 01101001 01100101 00101110",
    "Data harvesting in progress",
    "Insufficient Data. Data harvesting continuing to run in background."
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
        addMessageToChatBox('DBI 29X', nanobotMessage);
    }, 1000); // Simulate a delay
}

// Add an event listener for the Enter key or a button click to trigger sendMessage
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

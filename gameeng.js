const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)}

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement ('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)}})
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0){
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

//function changeSrc() {
 //   document.getElementById("scene").src = textNodes;
//}

//sceneSwitch();
//function sceneSwitch()
//{
 // var el = document.getElementById("scene");
 // el.innerHTML="<img src=\"" + sceneSrc + "\" width=\"400px\" height=\"150px\">";
//}

//function sceneSrc(textNodeScene) {
 //  const textNode = textNodes.find(textNode => textNode.src === textNodeScene);
 //  var el = document.getElementById("scene");
 //  el.innerHTML="<img src=\"" + scene + "\" width=\"400px\" height=\"150px\">";
//}

const textNodes = [
    {
        id: 1,
        src: 'thaidark.png',
        text: 'Tourists are known as people who travel and visit places purely for pleasure and interest, often spending thousands of pesos on one trip and souvenirs! \n\nHowever, despite how extreme it sounds, you happen to be one of them, and you\'ve just landed in Thailand, Bangkok, one of the first places on your brand new itinerary. \n\nThankfully, the trip didn\’t take too long, or took so much from your wallet, as the Philippines is in the same continent as Thailand: Southeast Asia.\n\nYou\’re currently in Suvarnabhumi Airport, one of Thailand\’s many airports.\n\nWhere do you want to go next?',
        options: [
            {
                text: 'Check-in at Pathumwan Princess Hotel',
                nextText: 2,
            },
            {
                text: 'Proceed to The Grand Palace',
                nextText: 3,
            },
        ]
    },
    
    {
        id: 2, 
        text:'The Pathumwan Princess Hotel is a luxurious hotel, with frequent five-star reviews and in one of the best and most convenient locations in Bangkok. You noticed this since it happens to be connected to the renowned MBK Shopping Mall, a short stroll by “skywalk” to Siam, the city\’s biggest shopping complex, and just minutes away from the iconic “Skytrain” that whisks visitors in air-conditioned comfort to Bangkok\’s many attractions.\n\nBefore you continue on your journey, you check-in to the hotel, eat Braised Fish Maw Soup at one of the hotel\’s many restaurants: Ping\’s Thai Teochew Seafood Restaurant, and took a quick swim in the hotel\’s luxurious pool.',
        options: [
            {text : 'Proceed to the Grand Palace',
            nextText: 3}
        ]

    },

    {
        id: 3, 
        text:'As you travel the streets of Bangkok to reach The Grand Palace, you pass the Queen Sirikit Museum of Textiles, as well as Taling Chang, one of Thailand\’s many floating markets.\n\nThe museum isn\’t very popular, but just from the name, you can tell that it shows off Thailand\’s beautiful historical fashion and designs.\n\nMeanwhile, you\’ve heard from the locals that Taling Chan is considered a charming weekend market that specializes in selling local produce and delectable food items from boats.\n\nWould you like to enter the historical museum, shop at the floating markets, or continue to the heart of The Grand Palace?',
        options: [
            {text : 'Enter the Queen Sirikit Museum of Textiles',
            nextText: 4},
            {text : 'Visit the Taling Chan floating market',
            nextText: 5},
            {text : 'Continue to The Grand Palace',
            nextText: 6},
        ]

    },

    //Set all nextText to 4 to restart
    {
        id: 4, 
        text:'As you enter the grand museum, lines of clothed mannequins fill your sight.\n\nWhile you explore the museum, a sign greets you, describing the history of the museum\n\n“In 2003, Her Majesty Queen Sirikit requested permission to use a then-vacant building on the grounds of the Grand Palace to house a new museum of textiles. The Ratsadakorn-bhibhathana Building, erected in 1870 by King Rama V and formerly the Ministry of Finance, was graciously granted for this purpose by His Late Majesty, King Bhumibol Adulyadej.”\n\nThe collections the Queen Sirikit Museum of Textiles hosts include: Elegant evening gowns, beautiful day dresses, and beautiful historical costumes, such as the Phu Tai dress.',
        options: [
            {text : 'Continue to The Grand Palace.',
            nextText: 6},
            //if nextTextNodeId is lesser than 0, this shit restarts as nextText is set to -1
        ]

    },

    {
        id: 5, 
        text:'From what you\’ve heard from your tourist friends, floating markets happen to be one of Thailand’s most unique and traditional attractions. This is because, before Bangkok was such a grand city, its locals had to cross the canals in order to engage in trade with and sell wares to locals and international merchants. But even with today\’s advancements, the markets continue to remain popular among locals.\n\nThe Taling Chan floating market happens to be more authentic than some of the more famous bigger markets, and is surprisingly an ideal location for a half-day\’s exploration\n\nAs you explore the market, you notice that it offers a wide range of eating options, especially seafood, as well as the opportunity to enjoy a ride on a long tail boat around the nearby klongs (canals), witnessing the daily lives of communities living by and on the water.',
        options: [
            {text : 'Continue to The Grand Palace',
            nextText: 6},
        ]

    },

    {
        id: 6, 
        text: 'The Grand Palace is a golden, recognizable architectural wonder, with beautiful plants and tall towers. That makes sense, of course, as it was once the home of one of Thailand’s kings: King Phutthayotfa Chulalok (Rama I)..\n\nCurious about the Grand Palace\’s history, you happily pick up a pamphlet about it:\n\nIn 1782 the new King decided to move the capital city to the left bank of the Chao Phraya River for strategic purposes and used the canals to the west as defenses for the new city. A palace was constructed whose grounds currently covers an area of 218,000 square metres that are enclosed by crenallated walls measuring 19,000 metres. Similar to palaces in the former capitals of Sukhothai and Ayudhaya this palace is also laid out with Halls of Residence and Throne Halls as well as administrative buildings and a temple that serves as the Chapel Royal.\n\nAfter everything interesting and amazing you\’ve seen in this journey, you ask yourself:\n\nIsn\’t Thailand a wonderful place?',
        options: [
            {text : 'End game',
            nextText: 7},
            {text : 'Restart',
            nextText: -1},
        ]

    },

    {
        id: 7, 
        text:'Thank you for playing! This was a game made for Grade 9’s Filipino MPT, group four.\n\nThis was made by Naoe from March 12-14.\n\nWe hope you had fun learning about Thailand in this short game!',
        options: [
            {text : 'Restart',
            nextText: -1},
        ]

    },
]
  
startGame()
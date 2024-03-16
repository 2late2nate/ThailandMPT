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

const textNodes = [
    {
        id: 1,
        text: 'Kilala ang mga turista bilang mga taong naglalakbay at bumibisita sa mga iba’t ibang lugar para tuklasin ang kultura, tradisyon, pagkain at kung ano ano pa, kadalasang gumagastos ng libu-libong piso sa isang biyahe at mga pasalubong!\n\nGayunpaman, kahit gaano ito kamahal , ikaw ay isa sa kanila, at ngayon ay nakarating ka na sa Bangkok, Thailand, isa sa mga unang lugar sa iyong bagong talaan ng biyahe.\n\nSa kabutihang palad, hindi gaanong matagal ang biyahe at hindi rin ganun kagastos, dahil ang Pilipinas ay nasa parehong kontinente ng Thailand: Southeast Asia.\n\nSa ngayon, ikaw ay nasa Suvarnabhumi Airport, isa sa maraming paliparan sa Thailand.\n\nSaan mo nais pumunta?',
        options: [
            {
                text: 'Mag-check-in sa Pathumwan Princess Hotel',
                nextText: 2,
            },
            {
                text: 'Magpatuloy sa The Grand Palace',
                nextText: 3,
            },
        ]
    },
    
    {
        id: 2, 
        text:'Ang Pathumwan Princess Hotel ay isang marangyang hotel, na may madalas na limang-bituin na pagsusuri at sa isa sa mga pinakamahusay at pinaka-maginhawang lokasyon sa Bangkok. Napansin mo ito dahil konektado ito sa kilalang MBK Shopping Mall, isang maikling lakad sa pamamagitan ng "skywalk" papunta sa Siam, ang pinakamalaking shopping complex ng lungsod, at ilang minuto lang ang layo mula sa iconic na "Skytrain" na nagbibigay-daan sa mga bisita sa ginhawa ng naka-air condition. sa maraming atraksyon ng Bangkok.\n\nBago ka magpatuloy sa iyong paglalakbay, mag-check-in ka sa hotel, kumain ng Braised Fish Maw Soup sa isa sa maraming restaurant ng hotel: Ping\'s Thai Teochew Seafood Restaurant, at lumangoy sa marangyang pool nito.',
        options: [
            {text : 'Magpatuloy sa The Grand Palace',
            nextText: 3}
        ]

    },

    {
        id: 3, 
        text:'Habang naglalakbay ka sa mga kalye ng Bangkok upang marating ang The Grand Palace, madadaanan mo ang Queen Sirikit Museum of Textiles, gayundin ang Taling Chang, isa sa maraming floating market ng Thailand.\n\nAng museo ay hindi masyadong sikat, ngunit mula sa pangalan, masasabi mo na ito ay nagpapakita ng magandang makasaysayang fashion at mga disenyo ng Thailand.\n\nSamantala, narinig mo mula sa mga lokal na ang Taling Chan ay itinuturing na isang kaakit-akit na merkado sa katapusan ng linggo na dalubhasa sa pagbebenta ng mga lokal na ani at masasarap na pagkain mula sa mga bangka.\n\nGusto mo bang pumasok sa makasaysayang museo, mamili sa mga floating market, o magpatuloy sa gitna ng The Grand Palace?',
        options: [
            {text : 'Pumasok sa Queen Sirikit Museum of Textiles',
            nextText: 4},
            {text : 'Bisitahin ang Taling Chan floating market',
            nextText: 5},
            {text : 'Magpatuloy sa The Grand Palace',
            nextText: 6},
        ]

    },

    {
        id: 4, 
        text:'Sa pagpasok mo sa engrandeng museo, mga linya ng nakadamit na mannequin ang pumupunta sa iyong paningin.\n\nHabang ginagalugad mo ang museo, isang tanda ang bumabati sa iyo, na naglalarawan sa kasaysayan ng museo:\n\n“Noong 2003, humiling ng pahintulot ang Her Majesty Queen Sirikit na gamitin ang isang bakanteng gusali noon sa bakuran ng Grand Palace para maglagay ng bagong museo ng mga tela. Ang Ratsadakorn-bhibhathana Building, na itinayo noong 1870 ni Haring Rama V at dating Ministri ng Pananalapi, ay magiliw na ipinagkaloob para sa layuning ito ng Kanyang Huling Kamahalan, si Haring Bhumibol Adulyadej.”\n\nKasama sa mga koleksyon na host ng Queen Sirikit Museum of Textiles ang: Mga eleganteng evening gown, magagandang day dress, at magagandang historical costume, gaya ng Phu Tai dress.',
        options: [
            {text : 'Magpatuloy sa The Grand Palace',
            nextText: 6},
        ]

    },

    {
        id: 5, 
        text:'Mula sa narinig mo mula sa iyong mga kaibigang turista, ang mga floating market ay isa sa mga pinaka natatangi at tradisyonal na atraksyon ng Thailand. Ito ay dahil, bago naging napakalaking lungsod ang Bangkok, ang mga lokal nito ay kailangang tumawid sa mga kanal upang makipagkalakalan at magbenta ng mga paninda sa mga lokal at internasyonal na mangangalakal. Ngunit kahit na sa mga pagsulong ngayon, ang mga merkado ay patuloy na nananatiling popular sa mga lokal.\n\nAng Taling Chan floating market ay nangyayari na mas tunay kaysa sa ilan sa mga mas sikat na mas malaking market, at nakakagulat na isang perpektong lokasyon para sa kalahating araw na paggalugad.\n\nHabang ginalugad mo ang palengke, mapapansin mo na Nag-aalok ito ng malawak na hanay ng mga pagpipilian sa pagkain, lalo na ang pagkaing-dagat, pati na rin ang pagkakataong masiyahan sa pagsakay sa isang long tail boat sa paligid ng mga kalapit na klong (kanal), na nasaksihan ang pang-araw-araw na buhay ng mga komunidad na naninirahan sa pamamagitan at sa tubig.',
        options: [
            {text : 'Magpatuloy sa The Grand Palace',
            nextText: 6},
        ]

    },

    {
        id: 6, 
        text: 'Ang Grand Palace ay isang ginintuang, nakikilala ang kahanga-hangang arkitektura, na may magagandang halaman at mataas na tore. Makatuwiran iyon, siyempre, dahil ito ang dating tahanan ng isa sa mga hari ng Thailand: Haring Phutthayotfa Chulalok (Rama I).\n\nMaging mausisa tungkol sa kasaysayan ng Grand Palace, masaya kang kumuha ng isang pamphlet tungkol dito:\n\nNoong 1782, nagpasiya ang bagong Hari na ilipat ang kabisera ng lungsod sa kaliwang pampang ng Ilog Chao Phraya para sa mga layunin sa pang-estratehiya at ginamit ang mga kanal sa kanluran bilang mga depensa para sa bagong lungsod. Isang palasyo ang itinayo na ang bakuran nito ay kasalukuyang sakop ng isang lugar na 218,000 metro kwadrado na napapaligiran ng mga pader na may sukat na 19,000 metro. Katulad ng mga palasyo sa dating kabisera ng Sukhothai at Ayudhaya, ang palasyo ng ito ay inilatag din kasama ang mga Hall of Residence at Throne Halls pati na rin ang mga gusaling pang-administratibo at isang templo na nagsisilbing Chapel Royal.\n\nMatapos ang lahat ng nakakaaliw at kahanga-hangang bagay na iyong nakita sa paglalakbay na ito, tinatanong mo ang iyong sarili:\n\nHindi ba\'t ang Thailand ay isang kahanga-hangang lugar?',
        options: [
            {text : 'End game',
            nextText: 7},
            {text : 'Restart',
            nextText: -1},
        ]

    },

    {
        id: 7, 
        text:'Salamat sa paglalaro! Ito ay isang laro na ginawa para sa Grade 9’s Filipino MPT, pangkat apat.\n\nIto ay ginawa ni Nathaniella mula Marso 12-14.\n\nInaasahan namin na ikaw ay nag-enjoy at natuwa sa pagtuturo tungkol sa Thailand sa maikling laro na ito!',
        options: [
            {text : 'Restart',
            nextText: -1},
        ]

    },
]
  
startGame()

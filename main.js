// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// Opdracht 1
// alle originalStock optellen, alle sold er vanaf trekken
// injecteren in html pagina, rode kleur meegeven in CSS

function inStock() {
    let sum = 0;
    inventory.map(function (tv) {
        sum += (tv.originalStock - tv.sold)
    })
    return sum;
}

const opdracht1 = document.getElementById("inStock");
opdracht1.textContent += "Aantal te verkopen exemplaren: " + inStock().toString();

// Opdracht 2a
// gebruik map om array te maken met alle tv-type namen

const tvTypes = inventory.map((tv) => {
    return tv.type;
});
console.log(tvTypes);


// Opdracht 2b
// gebruik filter om array te maken met tv's die uitverkocht zijn

const soldoutTvs = inventory.filter((tv) => {
    return tv.originalStock - tv.sold === 0
});
console.log(soldoutTvs);

// Opdracht 2c
// gebruik filter om array te maken met tv's die Ambilight hebben
const ambiLight = inventory.filter((tv) => {
    return tv.options.ambiLight
});
console.log(ambiLight);

// Opdracht 2d
// gebruik sort om array om de array te sorteren op prijs

inventory.sort((a, b) => a.price - b.price);
console.log(inventory);

// Opdracht 3a
// maak een functie die loopt door alle tv's , bij elke tv wordt de prijs*Originalstock berekend
// dit wordt allemaal opgeteld
// deze som injecteren in de HTML
// blauwe kleur geven in css
function maxiProfit() {
    let sum = 0;
    inventory.map(function (tv) {
        sum += (tv.originalStock * tv.price)
    })
    return sum;
}
const opdracht3a = document.getElementById("maxiProfit");
opdracht3a.textContent += "Totale opbrengst: " + maxiProfit().toString();
console.log(maxiProfit());
// Opdracht3b
// maak functie zoals hierboven met map
// per tv wordt sold * price berekend
// dit alles optellen
// injecteren in de DOM
// groen maken in CSS
function earnt() {
    let sum = 0;
    inventory.map(function (tv) {
        sum += (tv.sold * tv.price)
    })
    return sum;
}
console.log(earnt())
const opdracht3b = document.getElementById("earnt");
opdracht3b.textContent += "We hebben in totaal: " + earnt().toString()+" verdiend!";
console.log(maxiProfit());


function SubColour(subColorName, subColorNumber, baseHex, tint) {
  this.subColorName = subColorName;
  this.subColorNumber = subColorNumber;
  this.baseHex = baseHex;
  this.tint = tint;
}

var grassyGreen = "#65A346";
var grassyGreens = [
  new SubColour("grassy-green-500", 500, grassyGreen, 0),
  new SubColour("grassy-green-400", 400, grassyGreen, 20),
  new SubColour("grassy-green-300", 300, grassyGreen, 40),
  new SubColour("grassy-green-200", 200, grassyGreen, 60),
  new SubColour("grassy-green-100", 100, grassyGreen, 80),
  new SubColour("grassy-green-50",  50,  grassyGreen, 90),
];

var honeyYellow = "#FFAF0A";
var honeyYellows = [
  new SubColour("honey-yellow-500", 500, honeyYellow, 0),
  new SubColour("honey-yellow-400", 400, honeyYellow, 20),
  new SubColour("honey-yellow-300", 300, honeyYellow, 40),
  new SubColour("honey-yellow-200", 200, honeyYellow, 60),
  new SubColour("honey-yellow-100", 100, honeyYellow, 80),
  new SubColour("honey-yellow-50",  50,  honeyYellow, 90),
];

var clarSkyBlue = "#AADCE1";
var clarSkyBlues = [
  new SubColour("clear-sky-blue-500", 500, clarSkyBlue, 0),
  new SubColour("clear-sky-blue-400", 400, clarSkyBlue, 20),
  new SubColour("clear-sky-blue-300", 300, clarSkyBlue, 40),
  new SubColour("clear-sky-blue-200", 200, clarSkyBlue, 60),
  new SubColour("clear-sky-blue-100", 100, clarSkyBlue, 80),
  new SubColour("clear-sky-blue-50",  50,  clarSkyBlue, 90),
];

var deepRose = "#B7133A";
var deepRoses = [
  new SubColour("deep-rose-500", 500, deepRose, 0),
  new SubColour("deep-rose-400", 400, deepRose, 20),
  new SubColour("deep-rose-300", 300, deepRose, 40),
  new SubColour("deep-rose-200", 200, deepRose, 60),
  new SubColour("deep-rose-100", 100, deepRose, 80),
  new SubColour("deep-rose-50",  50,  deepRose, 90),
];


var deepBlue = "#15487A";
var deepBlues = [
  new SubColour("deep-blue-500", 500, deepBlue, 0),
  new SubColour("deep-blue-400", 400, deepBlue, 20),
  new SubColour("deep-blue-300", 300, deepBlue, 40),
  new SubColour("deep-blue-200", 200, deepBlue, 60),
  new SubColour("deep-blue-100", 100, deepBlue, 80),
  new SubColour("deep-blue-50",  50,  deepBlue, 90),
];


var grayLight = "#909BA6";
var grayLights = [
  new SubColour("grey-light-500", 500, grayLight, 0),
  new SubColour("grey-light-400", 400, grayLight, 20),
  new SubColour("grey-light-300", 300, grayLight, 40),
  new SubColour("grey-light-200", 200, grayLight, 60),
  new SubColour("grey-light-100", 100, grayLight, 80),
  new SubColour("grey-light-50",  50,  grayLight, 90),
];

var grayDark = "#1B1F22";
var grayDarks = [
  new SubColour("grey-dark-900", 900, grayDark, 0),
  new SubColour("grey-dark-800", 800, grayDark, 20),
  new SubColour("grey-dark-700", 700, grayDark, 40),
  new SubColour("grey-dark-600", 600, grayDark, 60),
];





function Color(colorName, hex, rgb, cmyk, pantone, ral, tints) {
  this.colorName = colorName;
  this.rgb = rgb;
  this.hex = hex;
  this.cmyk = cmyk;
  this.pantone = pantone;
  this.ral = ral;
  this.tints = tints;
}

var corePalette = [
  new Color("Grassy Green", "#65a346", "101, 163, 70", "66, 13, 89, 1", "Pantone 362", "RAL 130 60 50", [40, 80]),
  new Color("Honey Yellow", "#ffaf0a", "255, 175, 10", "0, 37, 93, 0", "Pantone 130", "RAL 1003", [40, 80]),
  new Color("Clear Sky Blue", "#aadce1", "170, 220, 225", "38, 0, 14, 0", "Pantone 629", "RAL 210 80 15", [40, 80]),
  new Color("Deep Rose", "#b7133a", "183, 19, 58", "19, 100, 67, 11", "Pantone 1945", "RAL 3027", [40, 80]),
  new Color("Deep Blue", "#15487a", "21, 72, 122", "97, 72, 26, 11", "Pantone 541", "RAL 270 30 35", [40, 80])
];

var supportPalette = [
  new Color("Forest Green", "#1c6b4a", "R28 G107 B74", "C85 M33 Y77 K24", "", "", [40, 80]),
  new Color("Apple Green", "#c7e58a", "R199 G229 B138", "C29 M0 Y57 K0", "", "", [40, 80]),
  new Color("Deep Orange", "#bf4000", "R191 G64 B0", "C18 M84 Y100 K8", "", "", [40, 80]),
  new Color("Light Yellow", "#fff2b2", "R255 G242 B178", "C2 M3 Y39 K0", "", "", [40, 80]),
  new Color("Bright Blue", "#52c2eb", "R82 G194 B235", "C62 M0 Y3 K0", "", "", [40, 80]),
  new Color("Rose", "#f26d6d", "R242 G109 B109", "C0 M69 Y48 K0", "", "", [40, 80]),
  new Color("Blush", "#facad6", "R250 G202 B214", "C0 M29 Y7 K0", "", "", [40, 80]),
];

var neutralPalette = [
  new Color("Black", "#000000", "R0 G0 B0", "C0 M0 Y0 K100", "", "", [40, 80]),
  new Color("Grey", "#909ba6", "R144 G155 B166", "C47 M31 Y27 K7", "", "", [40, 80]),
  new Color("Off White", "#f2f2f0", "R242 G242 B240", "C6 M4 Y6 K0", "", "", []),
];

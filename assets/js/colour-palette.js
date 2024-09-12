function Palette(paletteName, paletteColors) {
  this.paletteName = paletteName;
  this.paletteColors = paletteColors;
}

function Color(colorName, colorHex, tint = 0, isCoreColor = false) {
  if (tint > 0) {
    colorHex = tinycolor.mix(colorHex, "#fff", tint).toHexString().toUpperCase();
  }
  this.colorName = colorName;
  this.colorHex = colorHex;
  this.tint = tint;
  this.accessibilityCheck = {
    whiteContrast: _getContrast(colorHex, "#fff"),
    blackContrast: _getContrast(colorHex, "#000"),
    mostReadable: tinycolor.mostReadable(colorHex, ["#fff", "#000"]).toHexString().toUpperCase()
  };
  this.isCoreColor = isCoreColor;
}

function _round(num, decimalPlaces = 0) {
  num = Math.round(num + "e" + decimalPlaces);
  return Number(num + "e" + -decimalPlaces);
}

function _getContrast(foregroundColor, backgroundColor) {
  var contrastRatio = tinycolor.readability(foregroundColor, backgroundColor);
  return _round(contrastRatio, 2);
}

var grassyGreenHex = "#65A346";
var grassyGreenPalette = new Palette("Grassy green", [
  new Color("500", grassyGreenHex, 0, true),
  new Color("400", grassyGreenHex, 20),
  new Color("300", grassyGreenHex, 40),
  new Color("200", grassyGreenHex, 60),
  new Color("100", grassyGreenHex, 80),
  new Color("50",  grassyGreenHex, 90)
]);

var honeyYellowHex = "#FFAF0A";
var honeyYellowPalette = new Palette("Honey yellow", [
  new Color("500", honeyYellowHex, 0, true),
  new Color("400", honeyYellowHex, 20),
  new Color("300", honeyYellowHex, 40),
  new Color("200", honeyYellowHex, 60),
  new Color("100", honeyYellowHex, 80),
  new Color("50",  honeyYellowHex, 90)
]);

var clearSkyBlueHex = "#AADCE1";
var clearSkyBluePalette = new Palette("Clear sky blue", [
  new Color("500", clearSkyBlueHex, 0, true),
  new Color("400", clearSkyBlueHex, 20),
  new Color("300", clearSkyBlueHex, 40),
  new Color("200", clearSkyBlueHex, 60),
  new Color("100", clearSkyBlueHex, 80),
  new Color("50",  clearSkyBlueHex, 90)
]);

var deepRoseHex = "#B7133A";
var deepRosePalette = new Palette("Deep rose", [
  new Color("500", deepRoseHex, 0, true),
  new Color("400", deepRoseHex, 20),
  new Color("300", deepRoseHex, 40),
  new Color("200", deepRoseHex, 60),
  new Color("100", deepRoseHex, 80),
  new Color("50",  deepRoseHex, 90)
]);

var deepBlueHex = "#15487A";
var deepBluePalette = new Palette("Deep blue", [
  new Color("500", deepBlueHex, 0, true),
  new Color("400", deepBlueHex, 20),
  new Color("300", deepBlueHex, 40),
  new Color("200", deepBlueHex, 60),
  new Color("100", deepBlueHex, 80),
  new Color("50",  deepBlueHex, 90)
]);

var neutralPalette = new Palette("Neutral", [
  new Color("Off-white", "#F2F2F0", 0),
  new Color("Pure white", "#FFFFFF", 0),
  new Color("Pure black", "#000000", 0),
]);

var grayLightHex = "#909BA6";
var grayLightPalette = new Palette("Grey - lighter shades", [
  new Color("500", grayLightHex, 0, true),
  new Color("400", grayLightHex, 20),
  new Color("300", grayLightHex, 40),
  new Color("200", grayLightHex, 60),
  new Color("100", grayLightHex, 80),
  new Color("50",  grayLightHex, 90)
]);

var grayDarkHex = "#1B1F22";
var grayDarkPalette = new Palette("Grey - darker shades", [
  new Color("900", grayDarkHex, 0),
  new Color("800", grayDarkHex, 20),
  new Color("700", grayDarkHex, 40),
  new Color("600", grayDarkHex, 60),
]);

var colorMatrix = {};
colorMatrix["core"] = [grassyGreenPalette, honeyYellowPalette, clearSkyBluePalette, deepRosePalette, deepBluePalette];
colorMatrix["neutral"] = [neutralPalette, grayLightPalette, grayDarkPalette];

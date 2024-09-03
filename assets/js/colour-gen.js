$(document).ready(function() {

  var clipboard = new ClipboardJS('.btn-clipboard', {
    target: function(trigger) {
      return trigger.previousElementSibling ;
    }
  });

  clipboard.on('success', function(e) {
    $(e.trigger).addClass("copied")
    e.clearSelection();
    setTimeout(
      function() {
        $(e.trigger).removeClass("copied")
      }, 3000);
  });

  var coreColorsHtml = "";
  coreColorsHtml += renderStrip("Grassy green", grassyGreens)
  coreColorsHtml += renderStrip("Honey yellow", honeyYellows)
  coreColorsHtml += renderStrip("Clear sky blue", clarSkyBlues)
  coreColorsHtml += renderStrip("Deep rose", deepRoses)
  coreColorsHtml += renderStrip("Deep blue", deepBlues)
  $(".js-core-colors").html(coreColorsHtml);


  var naturalColorsHtml = "";
  naturalColorsHtml += renderStrip("Grey light shades", grayLights)
  naturalColorsHtml += renderStrip("Grey darker shades", grayDarks)
  $(".js-natural-colors").html(naturalColorsHtml);


  function renderStrip(colourSetName, colourSet) {

    var html = "<div class=\"color-strip-name\"><strong>" + colourSetName + "</strong></div>";
    html += "<div class=\"color-strip\">";

    colourSet.forEach(function (subColor) {

      var colourMix = tinycolor.mix(subColor.baseHex, "#fff", subColor.tint).toHexString();

      console.log(subColor.subColorName + " - " + colourMix);

      html += "<div class=\"color-card-wrapper\">";
      html += "<div class=\"color-sample\" style=\"background-color:" + colourMix + "\">";

      html += "<div class=\"color-sample-number\">";
      html += subColor.subColorNumber;
      html += "</div>";

      html += "</div>";
      html += "<div class=\"color-info\">";
      html += "<span>" + colourMix.toUpperCase() + "</span>" + renderClipboardCopy();

      html += renderAccessibilityCheck(colourMix);

      html += "</div>";
      html += "</div>";


    });
    html += "</div>";

    return html;

  }

  function renderAccessibilityCheck(color) {

    var blackContrast = tinycolor.readability("#000", color);
    blackContrast = round(blackContrast, 2);

    var whiteContrast = tinycolor.readability("#FFF", color);
    whiteContrast = round(whiteContrast, 2);

    var html = "";

    html += "<div class=\"accessibility-test-sample-wrapper\" style=\"margin-top:15px;margin-bottom:5px;\">";

    html += "<div class=\"accessibility-test-sample\" style=\"background-color:" + color + "\">";
    html += "A";
    html += "</div>";

    html += "<div class=\"accessibility-test-contrast\">";
    html += blackContrast;
    html += "</div>";

    html += "<div class=\"accessibility-test-result\">";
    html += renderAccessibilityCheckResult(blackContrast);
    html += "</div>";

    html += "</div>";

    html += "<div class=\"accessibility-test-sample-wrapper\">";

    html += "<div class=\"accessibility-test-sample\" style=\"color:#FFF;background-color:" + color + "\">";
    html += "A";
    html += "</div>";

    html += "<div class=\"accessibility-test-contrast\">";
    html += whiteContrast;
    html += "</div>";

    html += "<div class=\"accessibility-test-result\">";
    html += renderAccessibilityCheckResult(whiteContrast);
    html += "</div>";

    html += "</div>";

    return html;
  }

  function renderAccessibilityCheckResult(contrast) {
    var html = "";
    if (contrast < 4.5) {
      html = "<span style=\"color:#d7373f\">Fail</span>";
    } else {
      html = "<span style=\"color:#268e6c\">Pass</span>";
    }
    return html;
  }

  function renderClipboardCopy() {
    return '<button class="btn-clipboard" title="Copy HEX colour value"></button>';
  }

  function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
  }

});

$(document).ready(function() {

  var $iconTiles = $('.js-sprite-icon-item');
  var $btnSpriteDownload = $('.js-download-svg-sprite');
  var $btnSpriteDownloadValidation = $('.js-download-feedback');

  $iconTiles.click(function() {
    $(this).toggleClass('sprite-icon-item-selected js-sprite-icon-item-selected');
  });

  $btnSpriteDownload.click(function() {
    var $selectedSvgs = $('.js-sprite-icon-item-selected').children('svg');
    var countSelected = $selectedSvgs.length;

    if (countSelected == 0) {
      $btnSpriteDownloadValidation.show();
    } else {
      $btnSpriteDownloadValidation.hide();
      var spriteXml           = createSpriteXml($selectedSvgs);
      var spriteConfigJson    = createSpriteConfigFile($selectedSvgs);
      var spriteDemoPage      = createSpriteDemoPage($selectedSvgs, spriteXml);
      createZipDownload(spriteXml, spriteConfigJson, spriteDemoPage);
    }
    return false;
  });

  function createSpriteXml($selectedSvgs) {
    var $sprite = $('<svg xmlns="http://www.w3.org/2000/svg" style="display:none;"></svg>');
    $sprite.html('\n');

    $selectedSvgs.each(function() {
      var $svg = $(this).clone();

      // Create a new <symbol> element
      var $symbol = $('<symbol></symbol>');

      // Copy attributes from the <svg> to the <symbol>
      $.each(this.attributes, function() {
        $symbol.attr(this.name, this.value);
      });

      // Copy the contents from the <svg> to the <symbol>
      $symbol.html($svg.html());
      $sprite.append($symbol).append('\n');
    });

    var spriteXml = $sprite[0].outerHTML;
    spriteXml = spriteXml.replace(/viewbox=/g, "viewBox=");
    return spriteXml;
  }

  function createSpriteConfigFile($selectedSvgs) {

    var spriteConfig = {
      name: "est-icons",
      prefix_text: "esti-",
      created_on: new Date().toISOString(),
      images: []
    };

    $selectedSvgs.each(function() {
      var $svg = $(this);

      spriteConfig.images.push({
        id: $svg.attr('id')
      })
    });

    var spriteConfigJson    = JSON.stringify(spriteConfig);
    return spriteConfigJson;

  }

  function createSpriteDemoPage($selectedSvgs, spriteXml) {

    const demoPageHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
        <meta charset="utf-8">
        <title></title>
        </head>
        <body>
          DEMO
          ${spriteXml}
        </body>
      </html>

    `;
    return demoPageHtml;

  }



  function createZipDownload(spriteXml, spriteConfig, spriteDemoPage) {

    var max = 1000000;
    var min = 10000;

    var rand = Math.floor(Math.random() * (max - min + 1) + min);

    // Create a new JSZip instance
    var zip = new JSZip();

    // Add files to the zip
    zip.file("icons-svg-sprite.svg", spriteXml);
    zip.file("config.json", spriteConfig);
    zip.file("demo.html", spriteDemoPage);

    // Generate the zip and trigger the download
    zip.generateAsync({
        type: "blob"
      })
      .then(function(content) {
        // Create a link to download the zip
        var element = document.createElement("a");
        element.href = URL.createObjectURL(content);
        element.download = "sprite-" + rand + ".zip";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      });
  }


  const $dropArea = $('.js-sprite-config-drop-area');

  // Prevent default drag behaviors
  $dropArea.on('dragenter dragover dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // Highlight drop area when item is dragged over it
  $dropArea.on('dragenter dragover', function() {
    $dropArea.addClass('hover');
  });

  $dropArea.on('dragleave drop', function() {
    $dropArea.removeClass('hover');
  });

  // Handle drop event
  $dropArea.on('drop', function(e) {
    const dt = e.originalEvent.dataTransfer;
    const files = dt.files;

    if (files.length) {
      const file = files[0];

      // Ensure the dropped file is a JSON file
      if (file.type === 'application/json') {
        const reader = new FileReader();
        reader.onload = function(event) {
          try {
            const json = JSON.parse(event.target.result);
            restoreFromConfig(json);
          } catch (error) {
            setDropAreaMessage('Error parsing JSON file');
          }
        };
        reader.readAsText(file);
      } else {
        setDropAreaMessage('Please drop a valid JSON file');
      }
    }
  });

  function restoreFromConfig(config) {
    $iconTiles.removeClass('sprite-icon-item-selected js-sprite-icon-item-selected');
    $.each(config.images, function(key, value) {
      $('.js-sprite-icon-item').has('#' + value.id).addClass('sprite-icon-item-selected js-sprite-icon-item-selected');
    });
    var msgSuccess = "Success! Previous config was restored.";
    setDropAreaMessage(msgSuccess);
  }

  function setDropAreaMessage(messageText) {
    var defaultMessageText = $dropArea.html();
    $dropArea.html(messageText);
    setTimeout(function() {
      $dropArea.html(defaultMessageText);
    }, 5000);
  }


});
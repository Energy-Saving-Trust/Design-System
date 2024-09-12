$(document).ready(function() {

  let colorPalette = (() => {

    class Templates {

      colorPalette(data) {
        console.log(data);
        var tpl = _.template(`
          <div class="color-palette-wrapper">
            <div class="color-palette-title">
              <h4><%= paletteName %></h4>
            </div>
            <div class="color-palette">
              <% for (var i = 0; i < paletteColors.length; ++i) { %>

                <div class="color-card">

                  <div class="color-preview-tile<%= paletteColors[i].isCoreColor ? ' color-preview-tile-primary' : '' %>" style="color:<%= paletteColors[i].accessibilityCheck.mostReadable %>;background-color:<%= paletteColors[i].colorHex %>;">
                    <div class="color-sample-number"><%= paletteColors[i].colorName %></div>
                  </div>

                  <div class="color-info">
                    <span><%= paletteColors[i].colorHex %></span><button class="btn-clipboard js-btn-clipboard" title="Copy HEX colour value"></button>

                    <div class="accessibility-test-header"><%= i == 0 ? 'Contrast check' : '' %></div>
                    <div class="accessibility-test-wrapper">
                      <div class="accessibility-test-sample" style="background-color:<%= paletteColors[i].colorHex %>">A</div>
                      <div class="accessibility-test-contrast"><%= paletteColors[i].accessibilityCheck.blackContrast %></div>
                      <div class="accessibility-test-result">
                        <% if (paletteColors[i].accessibilityCheck.blackContrast > 4.5) { %>
                          <span style="color:#268e6c">pass</span>
                        <% } else { %>
                          <span style="color:#d7373f">fail</span>
                        <% } %>
                      </div>
                    </div>

                    <div class="accessibility-test-wrapper">
                      <div class="accessibility-test-sample" style="color:#FFF;background-color:<%= paletteColors[i].colorHex %>">A</div>
                      <div class="accessibility-test-contrast"><%= paletteColors[i].accessibilityCheck.whiteContrast %></div>
                      <div class="accessibility-test-result">
                        <% if (paletteColors[i].accessibilityCheck.whiteContrast > 4.5) { %>
                          <span style="color:#268e6c">pass</span>
                        <% } else { %>
                          <span style="color:#d7373f">fail</span>
                        <% } %>
                      </div>
                    </div>

                  </div>
                </div>

              <% } %>
            </div>

          </div>
        `);
        return tpl(data);
      }
    }

    var _tpl = new Templates();

    const _init = (selector) => {
      _displayPalette(selector);
    }

    var _displayPalette = (selector) => {
      $(selector).each(function( index ) {
        var $container    = $(this);
        var colorGroup    = $container.data("color-group");
        var palettes      = colorMatrix[colorGroup];
        var html          = "";
        $(palettes).each(function() {
          var palette = this;
          html += _tpl.colorPalette(palette);
        });
        $container.html(html);
      });
    }

    // public
    return {
      init: _init
    };

  })();

  colorPalette.init(".js-color-block");

  var clipboard = new ClipboardJS('.js-btn-clipboard', {
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

});
// Prevent maximized argument maps from overlapping with MediaWiki navigation
$(".argdown-figure argdown-map").each((index, element) => {
    // Using $(button).click() only works once, because the maximize button gets deleted and recreated as a minimize button. Instead we attach to <div class="component"> and watch events as they bubble up.
    $(".component header", element.shadowRoot).on("click", event => {
        if (
            event.target.title == "Expand" ||
            event.target.title == "Minimize" ||
            event.target.localName == "svg"
        ) {
            if ($('body').hasClass('skin-timeless')) {
                $('#mw-header-container, #mw-header-hack').toggle();
            }
            $('#mw-navigation').toggle();
        }
    });
});

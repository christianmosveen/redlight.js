(function($) {
    $.fn.redlight = function(value, max, cutoff) {

        var red, green, blue;
        red = 0;
        green = 0;
        blue = 100;

        var halfmark = cutoff / 2;
        var ratio = value / max;

        if (ratio > 0) {
            if (ratio < halfmark) {
                green = 255;
                red = Math.round(ratio * 10 * 255);
            } else if (ratio >= halfmark && ratio < cutoff) {
                green = Math.round(255 - ((ratio - 0.1) * 10 * 255));
                red = 255;
            } else if (ratio >= cutoff) {
                red = 255;
            }
        }

        var rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
        this.css('color', rgb);

        return this;
    };
})(jQuery);
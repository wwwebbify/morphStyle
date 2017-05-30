/*
        @private
        @function morphStyle
        @description - picks a random (preset) style to morph, then picks a random value for that style, then animates the element to that style
        @param {object} [element] - the element to be morphed
        @return {object} - returns the element
        @dependencies - GSAP TweenLite, randomize(), objLength()
    */

    function morphStyle(element) {
        function pickRGB() {
            return 'rgb(' + randomize(50, 200, NaN, 'morphStyle 2') + ',' + randomize(50, 200, NaN, 'morphStyle 3') + ',' + randomize(50, 200, NaN, 'morphStyle 4') + ')';
        }

        var styles = {};
        styles[1] = { 'style': 'background', 'value': function () { return pickRGB(); } };
        styles[2] = styles[1];
        styles[3] = { 'style': 'color', 'value': function () { return pickRGB(); } };
        styles[4] = styles[3];
        styles[5] = { 'style': 'zoom', 'value': function () { return randomize(1000, 1500, NaN, 'morphStyle 1') / 1000 } };

        var number = (function () { return randomize(1, objLength(styles), NaN, 'morphStyle') })();

        var stylesObj = {};
            stylesObj[styles[number].style] = styles[number].value();;

        TweenLite.to(element, 1, stylesObj);
        return element;

    }

@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/color-thief.umd.js')




        const colorThief = new ColorThief();
        let containers = document.querySelectorAll('.js-gradient');

        for (var i = 0; i < containers.length; i++) {
            let container = containers[i];
            let img = container.querySelector('img');
            let imageURL = img.getAttribute('src');
            let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
            img.crossOrigin = 'anonymous';
            img.src = googleProxyURL + encodeURIComponent(imageURL);
            img.addEventListener('load', function () {
                let color = colorThief.getColor(img);
                container.style.backgroundImage = 'radial-gradient(49.83% 165.14% at 50% 50%, rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ') -50%, #1A1A1A 100%)';
            })
        }





//Функция для радиального градиента блока FastAverageColor
function gradiendBlock2() {
    window.addEventListener('load', function () {
        var fac = new FastAverageColor();
        containers = document.querySelectorAll('.js-gradient');
        for (var i = 0; i < containers.length; i++) {
            container = containers[i];
            color = fac.getColor(container.querySelector('img'));
            container.style.backgroundImage = 'radial-gradient(49.83% 165.14% at 50% 50%, ' + color.rgba + ' -50%, #1A1A1A 100%)';
        }
    }, false);
}

//Функция для радиального градиента блока gradiendBlock('.js-gradient img');
function gradiendBlock(selector) {
    var img = document.querySelectorAll(selector);
    for (let elem2 of img) {
        var vibrant = new Vibrant(elem2);
        var swatches = vibrant.swatches();
        for (var swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
                if (swatch == 'Vibrant') {
                    elem2.closest('.js-gradient').style.backgroundImage = 'radial-gradient(49.83% 165.14% at 50% 50%, ' + swatches[swatch].getHex() + ' -50%, #1A1A1A 100%)';
                }
            }
        }

    }
}
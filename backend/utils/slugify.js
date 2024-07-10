// Source : https://jasonwatmore.com/vanilla-js-slugify-a-string-in-javascript
module.exports = function slugify(str) {
    if (!str)
        return '';

    // make lower case and trim
    str = str.toLowerCase().trim();

    // remove accents from charaters
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    // replace invalid chars with spaces
    str = str.replace(/[^a-z0-9\s-]/g, ' ').trim();

    // replace multiple spaces or hyphens with a single hyphen
    str = str.replace(/[\s-]+/g, '-');

    return str;
}
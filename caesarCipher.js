function addByModuleN(num1, num2, module) {
    return (num1 + num2) % module;
}

function isUpperCase(char) {
    return char.toUpperCase() === char;
}

function shiftText(text, nShift) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if(nShift < 0) {
        alphabet = alphabet.split('').reverse().join('');
        nShift = -nShift;
    }
    return text.toLowerCase().split('').map((el, i) => {
      if(alphabet.includes(el)) {
        const sym = alphabet[addByModuleN(nShift, alphabet.indexOf(el), alphabet.length)];
        return (isUpperCase(text[i]))? el.toUpperCase() : sym;
      } else return text[i];
    }).join('');
}

module.exports = shiftText;

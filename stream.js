const shiftText = require('./caesarCipher');
const { Transform } = require('stream');


class myTrans extends Transform {

    constructor(shift) {
        super();
        this.shift = shift;
    }

    _transform(chunk, encoding, callback) {
        let str = chunk.toString("utf-8");
        callback(null, shiftText(str, this.shift))
    }

}

module.exports = myTrans

const tenMoreShapes = require('./moreShapes');
const CONSTANT = require('../constants');

const newquickplay = (nameIndex) => {
    return {
        status: CONSTANT.NEW,
        name: "quickplayRoom"+nameIndex, //name[13] = 1
        owner: "",
        users: [],
        shapes: tenMoreShapes([]),
    }
}

module.exports = newquickplay;
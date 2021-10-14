const Mark = require("./Mark");

class Italic extends Mark {
    matching () {
        return this.DOMNode.nodeName === "EM" || this.DOMNode.nodeName === 'I';
    }

    data () {
        return {
            type: "italic"
        };
    }
}

module.exports = Italic;
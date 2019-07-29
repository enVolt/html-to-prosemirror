const Mark = require("./Mark");

class Italic extends Mark {
    matching () {
        return this.DOMNode.nodeName === "EM";
    }

    data () {
        return {
            type: "italic"
        };
    }
}

module.exports = Italic;
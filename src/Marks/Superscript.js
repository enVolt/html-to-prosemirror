const Mark = require("./Mark");

class Superscript extends Mark {
    matching () {
        return this.DOMNode.nodeName === "SUP"
    }

    data () {
        return {
            type: "superscript",
        };
    }
}

module.exports = Superscript;
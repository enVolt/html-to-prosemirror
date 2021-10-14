const Mark = require("./Mark");

class Underline extends Mark {
    matching () {
        return this.DOMNode.nodeName === "U"
    }

    data () {
        return {
            type: "underline",
        };
    }
}

module.exports = Underline;
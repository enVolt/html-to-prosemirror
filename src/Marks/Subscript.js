const Mark = require("./Mark");

class Subscript extends Mark {
    matching () {
        return this.DOMNode.nodeName === "SUB"
    }

    data () {
        return {
            type: "subscript",
        };
    }
}

module.exports = Subscript;
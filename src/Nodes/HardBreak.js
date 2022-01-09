const Node = require("./Node");

class HardBreak extends Node {
    matching () {
        return this.DOMNode.nodeName === "BR";
    }

    data () {
        return {
            type: "hardBreak"
        };
    }
}

module.exports = HardBreak;
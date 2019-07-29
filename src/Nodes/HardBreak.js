const Node = require("./Node");

class HardBreak extends Node {
    matching () {
        return this.DOMNode.nodeName === "BR";
    }

    data () {
        return {
            type: "hard_break"
        };
    }
}

module.exports = HardBreak;
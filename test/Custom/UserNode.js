const Node = require("../../src/Nodes/Node");

class UserNode extends Node {

    matching () {
        return this.DOMNode.nodeName === "USER";
    }

    data () {
        return {
            type: "user",
            attrs: {
                id: this.DOMNode.getAttribute("data-id")
            }
        };
    }
}

module.exports = UserNode;
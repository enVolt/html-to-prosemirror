const Node = require("./Node");

class Heading extends Node {

    getLevel () {
        const matches = this.DOMNode.nodeName.match(/^H([1-6])/);
        return matches ? matches[1] : null;
    }

    matching () {
        return Boolean(this.getLevel());
    }

    data () {
        return {
            type: "heading",
            attrs: {
                level: this.getLevel()
            }
        };
    }
}

module.exports = Heading;
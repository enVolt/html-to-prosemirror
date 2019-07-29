const Node = require("./Node");

class BulletList extends Node {
    matching () {
        return this.DOMNode.nodeName === "UL";
    }

    data () {
        return {
            type: "bullet_list"
        };
    }
}

module.exports = BulletList;
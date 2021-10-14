const Mark = require("./Mark");

class Bold extends Mark {
    matching () {
        return this.DOMNode.nodeName === "STRONG" || this.DOMNode.nodeName === "B";
    }

    data () {
        return {
            type: "bold"
        };
    }
}

module.exports = Bold;
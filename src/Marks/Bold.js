const Mark = require("./Mark");

class Bold extends Mark {
    matching () {
        return this.DOMNode.nodeName === "STRONG";
    }

    data () {
        return {
            type: "bold"
        };
    }
}

module.exports = Bold;
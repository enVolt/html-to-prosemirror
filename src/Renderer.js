const { JSDOM } = require("jsdom");
const { minify } = require("html-minifier");
const { htmlEntities, arrayify } = require("./utils");

class Renderer {
    constructor () {
        this.document = undefined;
        this.storedMarks = [];

        this.nodes = [
            require("./Nodes/BulletList"),
            require("./Nodes/CodeBlock"),
            require("./Nodes/CodeBlockWrapper"),
            require("./Nodes/HardBreak"),
            require("./Nodes/Heading"),
            require("./Nodes/Image"),
            require("./Nodes/ListItem"),
            require("./Nodes/OrderedList"),
            require("./Nodes/Paragraph"),
            require("./Nodes/Text")
        ];

        this.marks = [
            require("./Marks/Bold"),
            require("./Marks/Code"),
            require("./Marks/Italic"),
            require("./Marks/Link")
        ];
    }

    setDocument (value) {
        this.document = new JSDOM(this.stripWhitespace(value));
    }

    stripWhitespace (value) {
        return minify(value, {
            collapseWhitespace: true
        });
    }

    getDocumentBody () {
        return this.document.window.document.querySelector("body");
    }

    render (value) {
        this.setDocument(value);

        const content = this.renderChildren(this.getDocumentBody());

        return {
            type: "doc",
            content
        };
    }

    renderChildren (node) {
        let nodes = [];

        node.childNodes.forEach(child => {
            const NodeClass = this.getMatchingNode(child);

            if (NodeClass) {
                let item = NodeClass.data();

                if (!item) {
                    if (child.hasChildNodes()) {
                        nodes.push(...(this.renderChildren(child)));
                    }
                    return;
                }

                if (child.hasChildNodes()) {
                    item = {
                        ...item,
                        content: this.renderChildren(child)
                    };
                }

                if (this.storedMarks.length) {
                    item = {
                        ...item,
                        marks: this.storedMarks
                    };
                    this.storedMarks = [];
                }

                if (NodeClass.wrapper) {
                    item.content = [
                        {
                            ...(NodeClass.wrapper),
                            content: item.content || []
                        }
                    ];
                }

                nodes.push(item);
            }

            let MarkClass = this.getMatchingMark(child);

            if (MarkClass) {
                this.storedMarks.push(MarkClass.data());

                if (child.hasChildNodes()) {
                    nodes.push(...(this.renderChildren(child)));
                }
            }
        });

        return nodes;
    }

    getMatchingNode (item) {
        return this.getMatchingClass(item, this.nodes);
    }

    getMatchingMark (item) {
        return this.getMatchingClass(item, this.marks);
    }

    getMatchingClass (node, classes) {
        for (let i in classes) {
            const Class = classes[i];
            const instance = new Class(node);
            if (instance.matching()) {
                return instance;
            }
        }

        return false;
    }

    addNode (node) {
        this.nodes.push(node);
    }

    addNodes (nodes) {
        for (const i in nodes) {
            this.addNode(nodes[i]);
        }
    }

    addMark (mark) {
        this.marks.push(mark);
    }

    addMarks (marks) {
        for (const i in marks) {
            this.addMark(marks[i]);
        }
    }
}

module.exports = Renderer;
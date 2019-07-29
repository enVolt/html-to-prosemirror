const assert = require("assert");
const Renderer = require("../../src/Renderer");

const UserNode = require("./UserNode");

describe("Custom Node Tests", function () {
    it("Single Node", function () {
        const html = `<user data-id="123" />`;

        const json = {
            "type": "doc",
            "content": [
                {
                    "type": "user",
                    "attrs": {
                        "id": 123
                    }
                }
            ]
        };

        const renderer = new Renderer();
        renderer.addNode(UserNode);

        assert.deepEqual(json, renderer.render(html));
    });

    it("Single Node with Text", function () {
        const html = `<user data-id="123">Johnie</user>`;

        const json = {
            "type": "doc",
            "content": [
                {
                    "type": "user",
                    "attrs": {
                        "id": "123"
                    },
                    "content": [
                        {
                            "text": "Johnie",
                            "type": "text"
                        }
                    ]
                }
            ]
        };

        const renderer = new Renderer();
        renderer.addNode(UserNode);

        assert.deepEqual(json, renderer.render(html));
    });

    it("Node Array", function () {
        const html = `<user data-id="123">Johnie</user>`;

        const json = {
            "type": "doc",
            "content": [
                {
                    "type": "user",
                    "attrs": {
                        "id": "123"
                    },
                    "content": [
                        {
                            "text": "Johnie",
                            "type": "text"
                        }
                    ]
                }
            ]
        };

        const renderer = new Renderer();
        renderer.addNodes([UserNode]);

        assert.deepEqual(json, renderer.render(html));
    });
});
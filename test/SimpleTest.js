const assert = require("assert");
const Renderer = require("../src/Renderer");

describe("Simple Tests", function () {
    it("Should transform emojis correctly 🔥", function () {
        const html = "<p>🔥</p>";

        const json = {
            type: "doc",
            content: [
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "🔥"
                        }
                    ]
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));
    });

    it ("Empty Text Nodes", function () {
        const html = "<em><br />\n</em>";
        const json = {
            type: "doc",
            content: [
                {
                    type: "hard_break",
                    marks: [
                        {
                            type: "italic"
                        }
                    ]
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));
    });

    it ("Extended Emojis are transformed correctly", function () {
        const html = "<p>👩‍👩‍👦</p>";
        const json = {
            type: "doc",
            content: [
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "👩‍👩‍👦"
                        }
                    ]
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));
    });

    it("Whitespace at the beginning is stripped", function () {
        const html = "<p>\nExample\n Text</p>";
        const json = {
            type: "doc",
            content: [
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "Example Text"
                        }
                    ]
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));
    });

    it ("Whitespace in code blocks is ignored", function () {
        const html = "<p>\n"
            + "    Example Text\n"
            + "</p>\n"
            + "<pre><code>\n"
            + "Line of Code\n"
            + "    Line of Code 2\n"
            + "Line of Code</code></pre>";

        const json = {
            "type": "doc",
            "content": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Example Text"
                        }
                    ]
                },
                {
                    "type": "code_block",
                    "content": [
                        {
                            "type": "text",
                            "text": "Line of Code\n    Line of Code 2\nLine of Code"
                        }
                    ]
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));
    });

    it ("Umlauts are transformed correctly", function () {
        const html = "<p>äöüÄÖÜß</p>";
        const json = {
            type: "doc",
            content: [
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "äöüÄÖÜß"
                        }
                    ]
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));
    });

    it ("Html entities are transformed correctly", function () {
        const html = "<p>&lt;</p>";
        const json = {
            type: "doc",
            content: [
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "<"
                        }
                    ]
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));
    });
});
const assert = require("assert");
const Renderer = require("../src/Renderer");

describe("Marks Tests", function () {
    it ("Strong gets rendered correctly", function () {
        const html = '<p><strong>Example Text</strong></p>';

        const json = {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Example Text","marks":[{"type":"bold"}]}]}]};

        assert.deepEqual(json, (new Renderer()).render(html));
    });

    it ("Code gets rendered correctly", function () {
        const html = `<p><code>Example Text</code></p>`;

        const json = {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Example Text","marks":[{"type":"code"}]}]}]};

        assert.deepEqual(json, (new Renderer()).render(html));
    });

    it ("Image gets rendered as link", function () {
        const html = `<img src="https://example.com/eggs.png" alt="The Finished Dish" />`;

        const json = {
            "type": "doc",
            "content": [
                {
                    "type": "image",
                    "attrs": {
                        "alt": "The Finished Dish",
                        "src": "https://example.com/eggs.png",
                        "class": undefined,
                        "title": undefined
                    }
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));
    });

    it ("Link gets rendered correctly", function () {
        const html = `<a href="https://scrumpy.io">Example Link</a>`;

        const json = {
            "type": "doc",
            "content": [
                {
                    "type": "text",
                    "text": "Example Link",
                    "marks": [
                        {
                            "type": "link",
                            "attrs": {
                                "href": "https://scrumpy.io"
                            }
                        }
                    ]
                }
            ]
        };

        assert.deepEqual(json, (new Renderer()).render(html));
    });
});
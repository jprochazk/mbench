
import { greet } from "./";

describe("library", function () {
    it("works", function () {
        expect(greet("world")).toEqual("Hello, world!");
    });
});
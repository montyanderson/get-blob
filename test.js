const assert = require("assert");
const getBlob = require("./");

describe("get-blob", () => {
	describe("getBlob()", () => {
		it("should return the exact data", () => {
			const original = new Blob(new ArrayBuffer(2));

			original[0] = 0x00;
			original[1] = 0xff;

			return getBlob(original).then(buf => {
				assert(original[0] == buf[0]);
				assert(original[1] == buf[1]);
			});
		});
	});
});

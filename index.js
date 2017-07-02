const FileReader = require("./FileReader");

module.exports = function getBlob(blob) {
	const fileReader = new FileReader();

	return new Promise((resolve, reject) => {
		fileReader.onload = resolve;
		fileReader.onerror = reject;

		fileReader.readAsArrayBuffer(blob);
	});
}

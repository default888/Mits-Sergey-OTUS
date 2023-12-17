const fs = require("fs");
const stream = require("stream");

const objectNames = {};

const readFile = (() => {
  const data = "";
  const strm = new stream.Readable({ objectMode: false, read() {} });
  fs.readFile("./text.txt", { encoding: "utf-8" }, (err, text) => {
    strm.push(text);
  });
  return strm;
})();

readFile.on("data", (data) => {
  const temp = data
    .toString()
    .toLowerCase()
    .replace(/[^A-Za-z\s]+/g, "")
    .split(" ")
    .sort();
  temp.forEach((index) => (objectNames[index] = (objectNames[index] || 0) + 1));

  console.log(objectNames, "\n", Object.values(objectNames));
});

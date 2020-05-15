const fs = require("fs");

function getBookList() {
  let booksInFolder = [];
  const dir = fs.readdirSync(".", { withFileTypes: true });
  for (const dirent of dir) {
    if (dirent.isDirectory()) booksInFolder = [...booksInFolder, dirent.name];
  }
  return booksInFolder;
}

function getIndexList(bookFolder) {
  const { indexList } = require(`./${bookFolder}/index.js`);
  return indexList;
}

module.exports = {
  getBookList,
  getIndexList,
};

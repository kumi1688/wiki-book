const { getBookList, getIndexList } = require("./bookList");

const bookList = getBookList();
const indexList = bookList.map((book) => getIndexList(book));

module.exports = { bookList, indexList };

import axios from "axios";

export default {
  findAll: function (query) {
    return axios.get("/api/books");
  },
  create: function (book) {
    return axios.post("/api/books", book);
  },
  findById: function (query) {
    return axios.get("/api/books/", { params: { q: query } })
  },
  update: function (query, book) {
    return axios.put("api/books/", { params: { q: query }, body: book })
  },
  remove: function (query) {
    return axios.delete(`api/books/${query}`)
  },
  getBooks: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?", { params: { q: query } })
  }
};

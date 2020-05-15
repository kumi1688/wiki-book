<template>
  <v-container> </v-container>
</template>

<script>
// fs 모듈은 서버쪽에서 쓰이는 모듈이므로 쓰지 말 것
// import bookList from "../../../public/bookList";

export default {
  data: function() {
    return {
      books: null,
    };
  },
  methods: {},
  created: function() {
    // this.books = bookList;
  },
};
</script>

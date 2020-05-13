<template>
  <v-row>
    <v-col cols="12" md="8">
      <h1>MQTT 실습</h1>
      <hr />
      <ol>
        <li v-for="(index, i) in indexes" :key="i">{{ index }}</li>
      </ol>
    </v-col>

    <v-col cols="12" md="8">
      <h1>1. 프로젝트 준비</h1>
      <hr />
      <p>
        프로젝트 생성
        <code>$ mkdir test</code>
      </p>
      <p>
        프로젝트 폴더 진입
        <code>$ cd test</code>
      </p>
      <p>
        npm 초기화
        <code>$ npm init</code>
      </p>
      <p>
        mqtt 라이브러리 설치
        <code>$ npm install mqtt</code>
      </p>
      <p>
        pub.js 파일 생성
        <code>$ touch pub.js</code>
      </p>
      <p>
        sub.js 파일 생성
        <code>$ touch sub.js</code>
      </p>
    </v-col>

    <v-col cols="12" md="12">
      <v-row>
        <v-col>
          <h2><code>pub.js</code></h2>
          <editor
            v-model="pubContent"
            @init="editorInit"
            lang="html"
            width="500"
            height="300"
          ></editor>
        </v-col>

        <v-col>
          <h2><code>sub.js</code></h2>
          <editor
            v-model="subContent"
            @init="editorInit"
            lang="html"
            width="500"
            height="300"
          ></editor>
        </v-col>
      </v-row>
    </v-col>

    <v-col md="12" cols="12">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <v-img :src="pub_picture" />
          <p>메시지 송신 <code>$ node pub.js </code></p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img :src="sub_picture" />
          <p>메시지 수신<code>$ node sub.js </code></p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import pub_js from "../../../public/pub.js.txt";
import sub_js from "../../../public/sub.js.txt";
import sub_picture from "../../../public/recv.png";
import pub_picture from "../../../public/send.png";

export default {
  data() {
    return {
      pubContent: pub_js,
      subContent: sub_js,
      sub_picture,
      pub_picture,
      indexes: [
        "프로젝트 준비",
        "브로커 설치",
        "브로커 확인",
        "방화벽 열기",
        "클라이언트 설치",
        "메시지 전송 테스트",
        "Node.js Client 개발",
      ],
    };
  },
  components: {
    editor: require("vue2-ace-editor"),
  },
  created() {},
  methods: {
    editorInit() {
      require("brace/mode/html");
      require("brace/theme/chrome");
    },
  },
};
</script>

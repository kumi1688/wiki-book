<template>
  <v-row>
    <v-col cols="12" md="8">
      <h1>MQTT 소개</h1>
      <hr />
      <v-textarea
        solo
        name="input-7-4"
        label="Filled textarea"
        value="MQTT는 경량의 Publish/Subscribe(Pub/Sub) 메시징 프로토콜이다. M2M(machine-to-machine)와 IoT(Internet of things)에서의 사용하려고 만들었다. IoT를 위해서 낮은 전력, 낮은 대역폭 환경에서도 사용할 수 있도록 설계됐다."
        full-width
        no-resize
        readonly
      ></v-textarea>
    </v-col>

    <v-col cols="12" md="8">
      <h1>1.응용분야</h1>
      <hr />
      <v-img :src="mqttPic" />
      <p>
        MQTT는 저전력, 신뢰할 수 없는 네트워크, No TCP/IP 기반에서 운용할 수
        있다는 장점이 있다. 소형기기의 제어와 센서정보 수집에 유리하다. 이런
        특징들로 특히 IoT 영역에서 주목받고 있다.
      </p>
    </v-col>

    <v-col cols="12" md="8">
      <h2>1.1 센서 정보 수집</h2>
      <hr />
      <p>
        가전기기, 빌딩, 도시, 산업, 개인 등 다양한 영역에서의 센서정보를 수집할
        수 있다. 네트워크 영역으로 보자면 LAN(가정/소규모 오피스), PAN(개인
        네트워크), BAN(빌딩 네트워크), MAN(도시영역 네트워크)등에서 사용할 수
        있다. 개인적으로 건강과 질병관리 분야에 관심이 간다. 지금 당장 서비스를
        개발하기에는 센서장비의 품질 개선이 필요한 것 같다. 지금의 헬스케어
        센서들은 "건강한 사람을 위한 악세사리"정도 인것 같다. 이런 용도로
        사용하기에는 센서 품질이 별로 중요하지 않겠지만 질병/건강관리를 위해서
        본격적으로 사용하려면 품질개선이 필요 할 것 같다.
      </p>
    </v-col>

    <v-col cols="12" md="8">
      <h2>1.2 제어</h2>
      <hr />
      <p>
        센서로 부터 받은 데이터를 토대로 기기들을 제어할 수 있다. 기기제어 역시
        MQTT를 이용하면 된다. 이를 위해서는 각 기기에 MQTT broker를 설치하거나
        혹은 중앙에 있는 MQTT broker에 bind할 수 있어야 한다.
      </p>
    </v-col>

    <v-col cols="12" md="8">
      <h2>1.3 Message Push Server</h2>
      <hr />
      <p>
        모바일 애플리케이션을 위한 메시지 Push 서버로 사용 할 수 있다. MQTT의
        특징을 살려서 낮은 전력에서 작동하는 Push 서비스를 만들 수 있다.
        페이스북의 경우 MQTT를 이용해서 메시지를 push 하고 있다.
      </p>
    </v-col>

    <v-col cols="12" md="8">
      <h1>2. MQTT 특징</h1>
      <hr />
    </v-col>

    <v-col cols="12" md="8">
      <h2>2.1 Publish/Subscribe</h2>
      <hr />
      <img :src="mqttPubSub" />
    </v-col>

    <v-col cols="12" md="8">
      <h2>2.2 토픽</h2>
      <hr />
      <img :src="mqtt_3_2" />
      <p>
        Pub와 Sub는 토픽을 기준으로 작동한다. 토픽은 슬래시(/)를 이용해서
        계층적으로 구성할 수 있어서 대량의 센서 기기들을 효율적으로 관리 할 수
        있다. 예를들어 컴퓨터의 다양한 상태를 측정하는 센서가 있다고 다음과 같이
        구성할 수 있을 것이다.
      </p>
    </v-col>

    <v-col cols="12" md="8">
      <h2>2.3 메시지 버스</h2>
      <hr />
      <img :src="mqtt_3_3" />
      <p>
        MQTT는 메시지 버스 시스템이다. MQTT Broker가 메시지 버스를 만들고 여기에
        메시지를 흘려보내면, 버스에 붙은 애플리케이션들이 메시지를 읽어가는
        방식이다. 메시지 버스에는 다양한 주제의 메시지들이 흐를 수 있는데,
        메시지를 구분하기 위해서 "Topic"을 이름으로 하는 메시지 채널을 만든다.
      </p>
    </v-col>
  </v-row>
</template>

<script>
import mqttPic from "../../../public/mqtt.png";
import mqttPubSub from "../../../public/mqtt_pubsub.png";
import mqtt_3_2 from "../../../public/mqtt_3.2.png";
import mqtt_3_3 from "../../../public/mqtt_3.3.png";

export default {
  data() {
    return {
      mqttPic,
      mqttPubSub,
      mqtt_3_2,
      mqtt_3_3,
    };
  },
};
</script>

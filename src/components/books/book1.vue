<template>
    <v-row>
        <v-col cols='12' md='8'><h1>1.MQTT 소개</h1></v-col>
        <v-col cols='12' md='8'><hr/></v-col>
        <v-col cols="12" md="8">
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
      <v-col cols='12' md='8'><h1>2.응용분야</h1></v-col>
        <v-col cols='12' md='8'><hr/></v-col>
        <v-col cols="12" md="8">
        <v-img :src="mqttPic"/>
        <v-col cols='12' md='12'>
          <p>MQTT는 저전력, 신뢰할 수 없는 네트워크, No TCP/IP 기반에서 운용할 수 있다는 장점이 있다. 
            <br>
            소형기기의 제어와 센서정보 수집에 유리하다. 이런 특징들로 특히 IoT 영역에서 주목받고 있다.
            </p>
        </v-col>
        <v-col cols='12' md='8'><h1>3.센서 정보 수집</h1></v-col>
        <v-col cols='12' md='8'><hr/></v-col>
        <v-col cols='12' md='12'>
          <p>
            가전기기, 빌딩, 도시, 산업, 개인 등 다양한 영역에서의 센서정보를 수집할 수 있다. 네트워크 영역으로 보자면 LAN(가정/소규모 오피스), PAN(개인 네트워크), BAN(빌딩 네트워크), MAN(도시영역 네트워크)등에서 사용할 수 있다.
개인적으로 건강과 질병관리 분야에 관심이 간다. 지금 당장 서비스를 개발하기에는 센서장비의 품질 개선이 필요한 것 같다. 지금의 헬스케어 센서들은 "건강한 사람을 위한 악세사리"정도 인것 같다. 이런 용도로 사용하기에는 센서 품질이 별로 중요하지 않겠지만 질병/건강관리를 위해서 본격적으로 사용하려면 품질개선이 필요 할 것 같다.
          </p>
        </v-col>
      </v-col>
      
    </v-row>
</template>

<script>
import mqttPic from '../../../public/mqtt.png'
export default {
    data(){
      return{
        mqttPic
      }
    }
}
</script>
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
        />
      </v-col>
      <v-col cols='12' md='8'><h1>1.MQTT 설정2</h1></v-col>
        <v-col cols='12' md='8'><hr/></v-col>
        <v-col cols="12" md="8">
            <code>console.log('hello world')</code>
            <code>console.log('너는 누구니')</code>
      </v-col>

      
    </v-row>
</template>

<script>

export default {
    data(){
        return{
            
        }
    }    
}
</script>
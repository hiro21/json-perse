<template>
  <div>
  <JsonPerse 
    @jsonInput="onClickEventPerse"
    @jsonPostInput="onClickEventPostPerse"
  >
  </JsonPerse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { AxiosResponse } from 'axios'
import JsonPerse from '../components/JsonPerse.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    JsonPerse
  },
  methods: {
        onClickEventPerse(jsonVal: string): void {
          console.log(jsonVal)
          // perseを呼ぶ
          const header = {
            'Content-Type':'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
          }
          this.$axios.get('/server')
          .then((response: AxiosResponse) => {
            console.log("result ok")
            console.log(response)
          })
          .catch((error: AxiosResponse) => {
            console.log("result ng")
            console.log(error)
          })
        },
        onClickEventPostPerse(jsonVal: string): void {
          const header = {
            'Content-Type':'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
          }
          this.$axios.post('/server',{testval: jsonVal}, {headers: header})
          .then((response: AxiosResponse) => {
            console.log("post result ok")
            console.log(response)
          })
          .catch((error: AxiosResponse) => {
            console.log("post result ng")
            console.log(error)
          })
          
        }
    }
})
</script>

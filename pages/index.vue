<template>
  <div>
  <JsonPerse 
    @jsonInput="onClickEventPerse"
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
          this.$axios.get('/server')
          .then((response: AxiosResponse) => {
            console.log(response)
          })
          .catch((error: AxiosResponse) => {
            console.log(error)
          })
        }
    }
})
</script>

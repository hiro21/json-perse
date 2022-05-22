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
        }
    }
})
</script>

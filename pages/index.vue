<template>
  <div>
  <JsonPerse 
    perseJsonTest.sync="perseJsonTest"
    perseResultTextarea.sync="perseResultTextarea"
  >
  </JsonPerse>
  <button type="button" class="btn btn-dark" @click="onClickEventPerse">submit</button>
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
        onClickEventPerse(event: Event): void {
          console.log(event)
        }
    }
})
</script>

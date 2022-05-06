<template>
     <div class="mb-3">
      <label for="perseJsonTextarea" class="form-label">before json text</label>
      <textarea class="form-control" id="perseJsonTextarea" rows="3"></textarea>
      <label for="perseResultTextarea" class="form-label">after json text</label>
      <textarea class="form-control" id="perseResultTextarea" rows="3"></textarea>
      <button type="button" class="btn btn-dark" @click="onClickEventPerse">submit</button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods: {
        onClickEventPerse(event: Event): void {
            console.log("test")
        }
    }
})

</script>
<template>
     <div class="mb-3">
      <label for="perseJsonTextarea" class="form-label">before json text</label>
      <textarea v-model="perseJsonTest" class="form-control" id="perseJsonTextarea" rows="3"></textarea>
      <label for="perseResultTextarea" class="form-label">after json text</label>
      <textarea v-model="perseResultTextarea" class="form-control" id="perseResultTextarea" rows="3"></textarea>
      <button type="button" class="btn btn-dark" @click="onClickEventPerse">submit</button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'perseJson',
    data: function() {
        return {
            perseJsonTest: "",
            perseResultTextarea: "",
        }
    },
    methods: {
        onClickEventPerse(event: Event): void {
            console.log(this.perseJsonTest)
            console.log(this.perseResultTextarea)
            console.log("test")
        }
    }
})

</script>
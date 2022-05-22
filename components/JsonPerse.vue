<template>
     <div class="mb-3">
      <label for="perseJsonTextarea" class="form-label">before json text</label>
      <textarea v-model="perseJsonText" class="form-control" id="perseJsonTextarea" rows="3"></textarea>
      <button type="button" class="btn btn-dark" @click="onClickEventPerse">submit</button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'perseJson',
    data: function() {
        return {
            perseJsonText: ''
        }
    },
    methods: {
        bindInputData() {
            this.$emit("jsonInput", this.perseJsonText)
        },
        onClickEventPerse(): void {
            this.$emit("jsonInput", this.perseJsonText)
        },
    },
})

</script>
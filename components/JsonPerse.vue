<template>
     <div class="mb-3">
      <label for="perseJsonTextarea" class="form-label">before json text</label>
      <textarea v-model="perseJsonTest" class="form-control" id="perseJsonTextarea" rows="3"></textarea>
      <label for="perseResultTextarea" class="form-label">after json text</label>
      <textarea v-model="perseResultTextarea" class="form-control" id="perseResultTextarea" rows="3"></textarea>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'perseJson',
    props: {
        perseJsonTest: {
            type: String,
        },
        perseResultTextarea: {
            type: String,
        },
    },
    // computed: {
    //     perseJsonTest: {
    //         get(): string {
    //             return this.perseJsonTest
    //         },
    //     },
    //     perseResultTextarea: {
    //         get(): string {
    //             return this.perseResultTextarea
    //         },
    //     },
    // },
    data: function() {
        return {
            perseJsonTest: "",
            perseResultTextarea: "",
        }
    },
})

</script>
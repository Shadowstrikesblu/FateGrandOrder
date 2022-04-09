<template>
    <div>
    <Characters v-for="character in characters" 
    :key="character.id" 
    :name="character.name" />
    </div>
</template>
<script>

import { defineComponent } from "vue";

export default defineComponent({
    props: {
        character: {
            Type: Object,
        }
    },
    components: { Characters }
})

</script>
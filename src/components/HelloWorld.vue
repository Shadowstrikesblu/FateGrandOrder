<script>
import { ref } from 'vue';
// import axios from 'axios';
import { defineComponent } from 'vue';
//coucou le pull
export default defineComponent({
    props: ['name']
})
</script>

<template>
  <h4>{{name}}</h4>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

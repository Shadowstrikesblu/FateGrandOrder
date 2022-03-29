<script>
import { defineComponent } from '@vue/runtime-core'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  components: {HelloWorld},
  computed:{},
  methods:{

  }
})
</script>

<template>
  <img alt="Vue logo" src="./assets/fgo.png" />
  <HelloWorld/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

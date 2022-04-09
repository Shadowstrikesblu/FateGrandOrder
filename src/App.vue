<script>
import { defineComponent } from '@vue/runtime-core'
// import HelloWorld from './components/HelloWorld.vue'
import Characters from './components/HelloWorld.vue'
import axios from 'axios'

export default defineComponent({
  components:{
    Characters
  },
    data(){
      return{
        characters:[]
      }
    },
    mounted(){
      axios.get("https://api.atlasacademy.io/basic/NA/servant/search?lang=en&type=normal&flag=normal&rarity=5&rarity=4&className=saber&gender=female" ,{

      }).then((resultats)=>{
        this.characters.push(resultats.data)
        console.log(resultats.data)
      })
    },
})

</script>


<template>
  <img alt="Vue logo" src="./assets/fgo.png" />
  <ul>
    <Characters v-for=" character in characters" 
    :key="character.id" 
    :name="character.name"
    :char="character" ></Characters>
  </ul>
</template>

<style>

</style>

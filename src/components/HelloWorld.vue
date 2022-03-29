<script>
import { ref } from 'vue';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
      return{
        characters:[]
      }
    },
    mounted(){
      axios.get("https://api.atlasacademy.io/nice/NA/servant/113",{

      }).then((resultats)=>{
        this.characters.push(resultats.data)
        console.log(resultats.data)
      })
    },
})
</script>

<template>
  <ul>
    <li v-for="chara in characters" :key="chara" >
      <li v-for="char in chara" :key="char">
        {{char}}
      </li>
    </li>
  </ul>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

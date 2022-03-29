<script>
import { ref } from 'vue';
import axios from 'axios';
import { defineComponent } from 'vue';
//coucou le pull
export default defineComponent({
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

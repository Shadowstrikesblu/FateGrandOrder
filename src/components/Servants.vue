<script>
import { defineComponent } from '@vue/runtime-core'
import Characters from '../components/HelloWorld.vue'
import axios from 'axios'

export default defineComponent({
    components:{
    // Header,
    Characters
  },
    data(){
      return{
         characters:[],
         NP:[]
      }
    },
    mounted(){
      axios.get("https://api.atlasacademy.io/basic/NA/servant/search?lang=en&excludeCollectionNo=0&type=normal" ,{

      }).then((servants)=>{
        // this.characters.push(resultats.data)
        this.characters = (servants.data)
        // console.log(servants.data)
        
      })
    }
})
</script>
<template>
        <Characters v-for=" character  in characters"
          :key="character.id" 
          :name="character.name"
          :char="character" 
          :face="character.face"
          :atk="character.atkMax"
          :class="character.className"
          :hp="character.hpMax"
          :rarity="character.rarity">
        </Characters>
</template>

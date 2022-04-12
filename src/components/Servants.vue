<script>
import { defineComponent } from '@vue/runtime-core'
import Characters from '../components/HelloWorld.vue'
import axios from 'axios'

export default defineComponent({
  components: {
    // Header,
    Characters
  },
  data() {
    return {
      characters: [],
      NP: [],
      search: '',
    }
  },
  mounted() {
    axios.get("https://api.atlasacademy.io/basic/NA/servant/search?lang=en&excludeCollectionNo=0&type=normal", {

    }).then((servants) => {
      // this.characters.push(resultats.data)
      this.characters = (servants.data)
      console.log(servants.data)

    })

  },

  computed: {
    filteredcharacters() {
      return this.characters?.filter((character) =>
        character?.name.toLowerCase().includes(this.search));
    }
  }

})



</script>
<template>
  <!-- <div id="demo">
  <div class="search-bar">
    <input type="text" v-model="search" placeholder="Search" /> <br> <br>
  </div>  
  <table class="table" id="myTable">
      <tbody>
      <tr v-for="nom in characters" :key="characters.id">
          <td>{{ characters.name }}</td>
      </tr>
      </tbody>
  </table>
</div> -->

  <input text="text" v-model="search" placeholder="search name" />
  <div v-if="search">
    <Characters v-for=" character  in filteredcharacters" :key="character.id" :name="character.name" :char="character"
      :face="character.face" :atk="character.atkMax" :category="character.className" :hp="character.hpMax"
      :rarity="character.rarity">
    </Characters>

    <!-- <Characters :key="filteredcharacter.id" :name="filteredcharacter.name" :char="filteredcharacter"
      :face="filteredcharacter.face" :atk="filteredcharacter.atkMax" :category="filteredcharacter.className"
      :hp="filteredcharacter.hpMax" :rarity="filteredcharacter.rarity">
      >

    </Characters> -->
  </div>
  <div v-else>
    <Characters v-for=" character  in characters.slice(0, 21)" :key="character.id" :name="character.name"
      :char="character" :face="character.face" :atk="character.atkMax" :category="character.className"
      :hp="character.hpMax" :rarity="character.rarity">
    </Characters>
  </div>

</template>

<style>
</style>
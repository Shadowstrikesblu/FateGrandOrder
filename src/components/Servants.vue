<script>
import { defineComponent } from '@vue/runtime-core'
import Characters from '../components/HelloWorld.vue'
import axios from 'axios'

export default ({
  components: {
    // Header,
    Characters
  },
  data() {
    return {
      characters: [],
      search: '',
      // "https://api.atlasacademy.io/nice/NA/servant/search?excludeCollectionNo=0&type=normal&className=saber&attribute=human&lang=en"
      //https://api.atlasacademy.io/basic/NA/servant/search?lang=en&excludeCollectionNo=0&type=normal
    }
  },
  mounted() {
    axios.get("https://api.atlasacademy.io/nice/NA/servant/search?excludeCollectionNo=0&type=normal&className=saber&lang=en", {

    }).then((servants) => {
      // this.characters.push(servants.data)
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

  <input text="text" v-model="search" placeholder="Chercher un perso (en minuscules)" />
  <div v-if="search">
    <Characters v-for=" character  in filteredcharacters" :key="character.id" :name="character.name" :char="character"
      :face="character.extraAssets.faces.ascension[4]" :atk="character.atkMax" :category="character.className" :hp="character.hpMax"
      :rarity="character.rarity" :npname="character.noblePhantasms">
    </Characters>

    <!-- <Characters :key="filteredcharacter.id" :name="filteredcharacter.name" :char="filteredcharacter"
      :face="filteredcharacter.face" :atk="filteredcharacter.atkMax" :category="filteredcharacter.className"
      :hp="filteredcharacter.hpMax" :rarity="filteredcharacter.rarity">
      >

    </Characters> -->
  </div>
  <div v-else>
    <Characters v-for=" character  in characters" :key="character.id" :name="character.name"
       :face="character.extraAssets.faces.ascension[4]" :atk="character.atkMax" :category="character.className"
      :hp="character.hpMax" :rarity="character.rarity" :npname="character.noblePhantasms">
    </Characters>
  </div>

</template>

<style>
input{
  margin:1%;
}
</style>
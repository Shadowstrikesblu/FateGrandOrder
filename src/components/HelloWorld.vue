<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Service après vente bonjours
    <a href="https://serviceapresvente.fr/" target="_blank">Clic pas ici</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Ici non plus</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Lent Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Pourquoi ya autant de texte ici ?</a>
  </p>

  <button type="button" @click="count++">Hit me Senpai: {{ count }}</button>
  <p>
    c'est tout piti
    <code>plisse les yeux pour me lire :o</code> Voila j'ai fini...
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

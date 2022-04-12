<script>
import { ref } from 'vue';
// import axios from 'axios';
import { defineComponent } from 'vue';
//coucou le pull
export default defineComponent({
    props: ['name','face','atk','category','hp','rarity'],
});

</script>

<template>
  <div class="card">
    <div class="container">
      <router-link :to="{name:'Details',params:{name : name,atk: atk ,face: face,category:category,hp:hp,rarity:rarity} }" >{{name}}</router-link>
    <br>
    <img :src="face" v-bind:alt="Face">
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
div{
  text-align: center;
  /* display: inline; */
}
.container{
  padding: 2px 4px;

}
.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 10%;
  margin:5%;
  /* background-color: gold; */
}
.card:hover {
  box-shadow: 0 32px 64px 0 rgba(0,0,0,0.2);
} 

</style>

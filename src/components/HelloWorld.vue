<script>
// import { ref } from 'vue';
// import axios from 'axios';

// import { defineComponent } from 'vue';

//coucou le pull
export default ({
    props: ['name','face','atk','category','hp','rarity','npname',],
    created(){
      console.log(JSON.parse(JSON.stringify(this.npname)));
      const npdet = JSON.parse(JSON.stringify(this.npname)) 
      // console.log('coucou',target)
       
    },
});

</script>

<template>
  <div class="card">
    <div class="container">
      <router-link :to="{name:'Details',params:
      {name : name,atk: atk ,face: face,category:category,hp:hp,rarity:rarity,npdet:npname,atkname:atkname}}">
      {{name}}
      </router-link>
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
  display: inline-block;
  /* background-color: gold; */
}
.card:hover {
  box-shadow: 0 32px 64px 0 rgba(0,0,0,0.2);
} 

</style>

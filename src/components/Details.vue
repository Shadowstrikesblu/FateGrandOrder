<script>
import { defineComponent } from '@vue/runtime-core'
import VGauge from 'vgauge';

export default defineComponent({
    name:'Details',
    props:['name','face','atk','category','hp','rarity'],
})
</script>
<template>
<div class="mycard">
  <div class="card">
        <h1 class="title">Servant Details</h1>
        <p class="title"> {{category}} : {{name}} </p>   
        <div class="container">
            <!-- <p>{{class}}</p> -->
            <div class="details">
              <img :src="face" v-bind:alt="face" class="center">
              <p> Attaque : {{atk}}</p>
              <p>Nombre de Pts de Vie :{{hp}}</p>
              <p> Rareté du personnage :{{rarity}} étoiles</p>
            </div>
        </div>
    </div>
</div>

</template>
<style scoped>
.container{
  padding: 12px 16px;
  background-image:url("https://static.wikia.nocookie.net/fategrandorder/images/0/0d/SaberBackGold.png/") ;
  background-size:100% ;
  /* height: 360px;
  width: 180px; */
  
}
.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 10%;
  margin:5%;
  height: 360px;
  width: 180px;
  background-image:url("../assets/frame.jpg");
  background-size:100% ;
  text-align:center;
  margin:0 auto;
  /* background-color: gold; */
}
.card:hover {
  box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
}
.center{
    position: relative;
    width: 50%;
    /* height: 100%; */
    /* object-fit:cover;  */
}
.title{
  color:rgb(191, 191, 190);
  text-transform: capitalize;
}
.details{
  color:rgb(244, 244, 244)
}
.mycard{
  margin-top:80px ;
}
</style>
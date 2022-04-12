<script>
import { defineComponent } from '@vue/runtime-core'
// import HelloWorld from './components/HelloWorld.vue'
import Characters from './components/HelloWorld.vue'
import axios from 'axios'



export default defineComponent({
  // components:{
  //   // Header,
  //   Characters
  // },
  //   data(){
  //     return{
  //        characters:[],
  //        NP:[]
  //     }
  //   },
  //   mounted(){
  //     axios.get("https://api.atlasacademy.io/basic/NA/servant/search?lang=en&excludeCollectionNo=0&type=normal" ,{

  //     }).then((servants)=>{
  //       // this.characters.push(resultats.data)
  //       this.characters = (servants.data)
  //       // console.log(servants.data)
        
  //     })
  //   },
    // mounted(){
    //   axios.get("https://api.atlasacademy.io/basic/NA/NP/search?card=buster&lang=en" ,{
    //   }).then((buster)=>{
    //     this.NP = (buster.data)
    //     console.log(buster.data)
    //   })
    // },
})

</script>
<template>
  <img class="center" alt="Vue logo" src="./assets/fgo.png" />
    <nav class="nav">
      <router-link to="/Servants">Liste des servants</router-link>
      <router-link to="/">Evenements</router-link>
      <router-link to="/">Nobles Phantasms</router-link>
    </nav>
    <router-view/>
  <br>

</template>

<style>
  @font-face {
    font-family: "fgofont";
    /* src: url("https://en.fontworks.co.jp/fontsearch/skippro-l/"); */
    src: url("https://fonts.google.com/specimen/Open+Sans");
  }
  div{
    font-family: sans-serif;
  }
  .center{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
  body{
    background-image: url("./assets/mainmenu.png");
    /* background-size: 150%; */
    
  }
  .nav{
    background-color: #b3cdd1 ;
    position: fixed;
    overflow: hidden;
    padding: 10px;
    text-align: center;
    color: white;
    font-size: 20px;
    margin:0.5em;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a:hover{
    background-color:yellow;
    height:20%;
}

</style>

<template>

<div class="perso">



</div>

</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
    props:{
        character:{
            Type : Object,
        }
    }
})

</script>

<style scoped>
.calculator {
  background-color: rgba(15, 26, 75, 0.911);
  /* margin: 1em; */
  padding: 1em;
  width: 200px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
</style>
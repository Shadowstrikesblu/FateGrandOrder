<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name:'Details',
    props:['name','face','atk','class','hp','rarity']
})
</script>
<template>
    <h1>Servants</h1>
    <p>{{name}}</p>
</template>
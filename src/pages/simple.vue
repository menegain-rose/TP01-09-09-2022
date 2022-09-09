<template>
    <div>
        <h2>
            Page simple
        </h2>
        <card v-bind=unObjet
         />
        
    </div>


    
</template>


<script setup lang="ts">
import card from "../components/card.vue";
    const props = defineProps({
      foo: Number

    })

    </script>
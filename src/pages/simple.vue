<template>
    <div>
        <h2>
            Page simple
        </h2>
        <card v-bind="objet0"
         />
        
    </div>


    
</template>


<script setup lang="ts">
import card from "../components/card.vue";
    const objet0 ={
       price:2800,
         nbrDim:"35m²",
         nbrbed:4,
         nbrSDB:2,
         titre:"Beverly Springfield",
         adress:"Midland City, Alabama(AL), 36350 1265 King St",
         image:"/images-maisons/Chalet.jpg",
         favori:false,

    }

    </script>
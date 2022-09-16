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
      //  price:2800,
        //  nbrbath:1,
        //  nbrbed:4,
        //  nbrSDB:2,
        //  adress:"Midland City, Alabama(AL), 36350 1265 King St",
        //  image:"/images-maisons/maison-1.jpg",
        //  favori:false,
        //  location:"Beverly Springfield",
        

    })

    </script>
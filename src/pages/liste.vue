<template>
    <div>
        <h2>
            Page liste
        </h2>
        <card v-bind="objet0"
         />
         <card v-bind="objet1"
         />
         <card v-bind="objet2"
         />
        
    </div>
</template>

<script  setup lang="ts">
    import card from "../components/card.vue";
    const objet0 ={
       price:2800,
         nbrDim:35,
         nbrbed:4,
         nbrSDB:2,
         titre:"Beverly Springfield",
         adress:"Midland City, Alabama(AL), 36350 1265 King St",
         image:"/images-maisons/Chalet.jpg",
         favori:false,
    }
    const objet1 ={
       price:2800,
         nbrDim:35,
         nbrbed:4,
         nbrSDB:2,
         titre:"Beverly Springfield",
         adress:"Midland City, Alabama(AL), 36350 1265 King St",
         image:"/images-maisons/Chalet.jpg",
         favori:false,
    }
    const objet2 ={
       price:2800,
         nbrDim:35,
         nbrbed:4,
         nbrSDB:2,
         titre:"Beverly Springfield",
         adress:"Midland City, Alabama(AL), 36350 1265 King St",
         image:"/images-maisons/Chalet.jpg",
         favori:false,
    }


    //const maisons = [ {/* Obj 1re maison */}, { /* Obj 2nd */ }, /* ... */ ];

</script>


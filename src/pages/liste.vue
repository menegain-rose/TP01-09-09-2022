<template>
    <div>
        <h2>
            Page liste
        </h2>
        <!-- <card v-bind="maisons[0]" />
        <card v-bind="maisons[1]" /> -->
         <card v-for="maison of maisons" :key="maison.titre" v-bind="maison"/>

        
    </div>
</template>

<script  setup lang="ts">
    import card from "../components/card.vue";
    const maisons = [

        {
           price:2800,
             nbrDim:"35m²",
             nbrbed:4,
             nbrSDB:2,
             titre:"Beverly Springfield",
             adress:"Midland City, Alabama(AL), 36350 1265 King St",
             image:"/images-maisons/Chalet.jpg",
             favori:false,
        
        },
        {
           price:1200,
             nbrDim:"72m²",
             nbrbed:4,
             nbrSDB:1,
             titre:"Petite maison",
             adress:"Fanshawe Pioneer Village, London, Canada",
             image:"/images-maisons/MaisonCanada.jpg",
             favori:false,
        },
        {
           price:3500,
             nbrDim:"115m²",
             nbrbed:4,
             nbrSDB:2,
             titre:"Maison de Belgique",
             adress:"Narvik HomeParc Mooi Zutendaal, Zutendaal, Belgium",
             image:"/images-maisons/MaisonBelgique.jpg",
             favori:false,
        }

    ];
    


    //const maisons = [ {/* Obj 1re maison */}, { /* Obj 2nd */ }, /* ... */ ];

</script>


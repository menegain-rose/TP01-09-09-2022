<template>
    <figure class="flex.flex-col m-5 bg-gray-50">
        <img class="w-96px h-auto object-cover rounded-t-lg" :src="image" alt=""
            />

        <figcaption class="relative p-5 pt-8 border-2 border-t-0 rounded-lg border-indigo-100 flex flex-col">

            <section>
                <div class="text-xl font-bold text-left text-indigo-500">${{ price }}</div>
                <div class="text-gray-500 text-base inline-block">/month</div>
                <h3 class="text-xl text-gray-900">{{titre}}</h3>
                <p class="text-gray-500">{{ adresse }}</p>
                <hr class="m-4 border-indigo-100" />
                <div class="flex flex-row justify-between text-sm">
                    <div  class="w-max"><bed class="h-5 w-5 mr-1 inline-block" />{{ nbrBed }}</div>
                    <div class="w-max"><bath class="h-5 w-5 mr-1 inline-block" />{{ nbrSDB }}</div>
                    <div class="w-max"><dimensions class="h-5 w-5 mr-1 inline-block1" />{{ nbrDim }}</div>
                </div>
                <div class="absolute top-7 right-7 w-10 h-10 grid place-items-center rounded-full">
                    <heart class="h-15 w-15 mr-1"/> {{ favori }}
                </div>
            </section>
        </figcaption>
    </figure>
</template>



<script setup lang="ts">
    import bed from "./icones/beds.vue";
    import bath from "./icones/bath.vue";
    import dimensions from './icones/dimensions.vue';
    import heart from './icones/heart.vue';
        
    
    defineProps({
        price:Number,
        nbrSDB:Number,
        nbrBed:Number,
        nbrDim:String,
        titre:String,
        adresse:String,
        image:String,
        favori: Boolean,
        })
    
        </script>
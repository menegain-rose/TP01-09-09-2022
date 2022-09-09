<template>
    <div>
        <h2>
            Page simple
        </h2>
        <card image="une.jpg"
         />
         <img v-bind:src="image" />
        
    </div>
</template>


<script setup lang="ts">
import card from "../components/card.vue";
    const props = defineProps({
      foo: Number

    })

    </script>
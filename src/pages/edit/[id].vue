<script setup lang="ts">
import FormulaireOffreMaison from "../../components/FormulaireOffreMaison.vue";

defineProps({id:String});
</script>

<template>
    <FormulaireOffreMaison :id="id"/>
</template>
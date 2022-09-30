<script setup lang="ts">
  
      import card from "../components/card.vue";
  
  
  
      import { supabase } from "../supabase";
      console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
      const Maisons = []; // à remplacer par l'appel à Supabase
  
    let { data, error } = await supabase
    .from('Maison')
    .select('*')
  
  </script>
  
  <template>
  <p>
      Liste supabase
  </p>

  <card v-for="m in data" :key="m" v-bind="m"></card>


  </template>




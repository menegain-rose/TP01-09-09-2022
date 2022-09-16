<script setup lang="ts">
    import { ref } from "@vue/reactivity";
import Card from "./card.vue";
    // On fait une variable réactive qui réference les données
    // ATTENTION : faire une ref pas une Reactive car :
    // c'est l'objet qui doit être réactif, pas ses props
    const maison = ref({});
    
    </script>
    
    <template>
        <div>
            <div class="p-2">
                <h2 class="text-2xl">
                    Résultat (Prévisualisation)
                </h2>
                <!--Optionnel on affiche les données-->
                <Card v-bind="maison" />
            </div>
            <div class="p-2">
                <!-- On passe la "ref" à FormKit-->
                <FormKit type="form" v-model="maison" 
                :config="{
                classes: {
                input: 'p-1 rounded border-gray-300 shadow-sm border',
                label: 'text-gray-600',
                },
                }"
                >
                    <FormKit name="titre" label="titre" />
                    <FormKit name="price" label="prix" type="number" />
                    <FormKit name="nbrSDB" label="nbrSDB" type="number" />
                    <FormKit name="nbrBed" label="nbrBed" type="number" />
                    <FormKit name="nbrDim" label="nbrDim" type="number" />
                    <FormKit name="favori" label="mettre en valeur" type="checkbox" wrapper-class="flex" />
                </FormKit>
            </div>
        </div>

    </template>
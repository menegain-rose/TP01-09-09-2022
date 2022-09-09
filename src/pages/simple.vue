<template>
        <section>
          <div class="">
            <bouton class="content-center">Voir plus</bouton>
            <card :price="2700" 
                   titre="Beverly Springfield" 
                   nbrSDB="2"
                   nbrBed="6"
                   nbrDim="120m²"
                   adresse="2821 Lake Savilla, Palm Harbor, TX"
                   image="/images-maisons/MaisonBeverly.jpg"
                   favori="false"
                   />
          </div>
        </section>
        <section>
          <div class="">
            <card :price="1200" 
                   titre="Petite maison" 
                   nbrSDB="1"
                   nbrBed="4"
                   nbrDim="72m²"
                   adresse="Fanshawe Pioneer Village, London, Canada"
                   image="/images-maisons/MaisonCanada.jpg"
                   favori="false"/>
          </div>
        </section>
                <section>
          <div class="">
            <card :price="3500" 
                   titre="Maison de Belgique" 
                   nbrSDB="2"
                   nbrBed="4"
                   nbrDim="115m²"
                   adresse="Narvik HomeParc Mooi Zutendaal, Zutendaal, Belgium"
                   image="/images-maisons/MaisonBelgique.jpg"
                   favori="true"/>
          </div>
        </section>
                <section>
          <div class="">
            <card :price="800" 
                   titre="Chalet de montagne" 
                   nbrSDB="1"
                   nbrBed="1"
                   nbrDim="25m²"
                   adresse="Westfjords Region, Iceland"
                   image="/images-maisons/Chalet.jpg"
                   favori="false"/>
          </div>
        </section>
</template>

<script >
    import card from "./components/card.vue";
    import bouton from "./components/bouton.vue";
    import { ArchiveIcon, BellIcon, AdjustmentsIcon, SearchIcon, UserAddIcon, ChatIcon, HomeIcon, MailOpenIcon, MenuAlt4Icon, ChevronRightIcon, ChevronLeftIcon, AtSymbolIcon, QuestionMarkCircleIcon, ChatAltIcon, GiftIcon } from "@heroicons/vue/outline";
    export default {
      name: "App",
      components: { card, bouton, ArchiveIcon, BellIcon, AdjustmentsIcon, SearchIcon, UserAddIcon, ChatIcon, HomeIcon, MailOpenIcon, MenuAlt4Icon, ChevronRightIcon, ChevronLeftIcon, AtSymbolIcon, QuestionMarkCircleIcon, ChatAltIcon, GiftIcon },
    };
</script>
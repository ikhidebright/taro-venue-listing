<template>
    <div class="dashboard mt-12">
    <v-container>
    <div class='headline font-weight-light mb-1 mt-4'>Ikhide Bright's venues</div>
    </v-container>
    <v-divider></v-divider>
    <v-container class="mt-5">
    <DashboardVenueCards />
    </v-container>
    </div>
</template>

<script>
import DashboardVenueCards from "@/components/VenueCards/DashboardVenueCards.vue";

export default {
    name: 'Dashboard',
    components: {
        DashboardVenueCards
    }
}
</script>

<style scoped>
.dashboard {
    background-color: #f1f1f1;
    height: 90vh;
}
</style>
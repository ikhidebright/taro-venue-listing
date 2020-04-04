<template>
    <div class="dashboard mt-12">
    <v-container>
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
}
</style>
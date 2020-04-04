<template>
    <div class="innerco">
        <v-container>
            <h3 class="subheading">Amenities</h3>
            <br>
            <v-card
            class="d-flex flex-row justify-space-between ml-3"
            max-width="500px"
            flat
            tile
    >
            <v-card flat>
                <div class="mb-3">
            <v-icon>mdi-air-conditioner</v-icon> Air Condition
                </div>
            <div class="mb-3">
            <v-icon>mdi-chair-school</v-icon> Chairs
            </div>
            <div class="mb-3">
            <v-icon>mdi-parking</v-icon> Car Parking
            </div>
            <div class="mb-3">
            <v-icon>mdi-projector</v-icon> Projector
            </div>
            </v-card>
         
            <v-card class="ml-40" flat>
         <div class="mb-3">
            <v-icon>mdi-clipboard-outline</v-icon> Writing Board
         </div>
         <div class="mb-3">
            <v-icon>mdi-lightbulb-on</v-icon> Lighting
         </div>
            <div class="mb-3">
            <v-icon>mdi-power-plug</v-icon> Power Supply
            </div>
            </v-card>


            <v-card class="ml-0" flat>
         <div class="mb-3">
            <v-icon>mdi-clipboard-outline</v-icon> Writing Board
         </div>
         <div class="mb-3">
            <v-icon>mdi-lightbulb-on</v-icon> Lighting
         </div>
            <div class="mb-3">
            <v-icon>mdi-power-plug</v-icon> Power Supply
            </div>
            </v-card>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Amenities',
    components: {
    }
}
</script>

<style scoped>
</style>
<template>
    <div class="innercom mt-5">
        <v-container>
            <h3 class="subheading">Amenities at {{ items[0].name }}</h3>
            <br>
            <v-card
            max-width="500px"
            flat
            tile
    >
      <v-chip-group
        v-model="amenities"
        column
        multiple
      >
      <div v-for="amenity in displayamenities" :key="amenity">
        <v-chip outlined> {{ amenities[amenity.indexer] }}</v-chip>
        </div>
      </v-chip-group>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Amenities',
    props: ["items", "displayamenities", "amenities"],
    components: {
    }
}
</script>

<style scoped>
</style>
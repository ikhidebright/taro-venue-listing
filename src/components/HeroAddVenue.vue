<template>
<div class="addvenue">
  <v-carousel hide-delimiters :show-arrows="false" touchless="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="fade-transition"
    >
      <v-container>
        <div class="word">
        <h1>Reach out to millions of Nigerians Daily</h1>
        <p>Use tora.ng to showcase your venue, skills and
event centers to millions. Make money faster</p>
        </div>
      </v-container>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: "HeroAddVenue",
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ]
        }
    },
  }
</script>

<style scoped>
.word {
color: white;
margin: 10% 0 14% 0;
width: 60%
}

.src {
  background-color: rgba(0, 0, 0, 0.61);
  color: #0b0a4e
}
</style>
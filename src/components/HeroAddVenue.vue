<template>
  <v-carousel hide-delimiters :show-arrows="false" touchless="true">
    <v-carousel-item
      src= "../assets/hero2.jpg"
    >
  <div class="src">
    <template>
      <v-container>
        <div class="word">
        <h1>Reach out to millions of Nigerians Daily</h1>
        <p class="subtitle-1 font-weight-light">Use tora.ng to showcase your venue and
event centers to millions. Make money faster</p>
        </div>
      </v-container>
</template>
   </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: "Hero",
  }
</script>

<style scoped>
.word {
color: white;
margin: 40% 0 14% 0;
}

.src {
  background-color: rgba(0, 0, 0, 0.60);
  color: #0b0a4e;
  height: 80vh
}

@media only screen and (min-width: 600px) {
  .word {
color: white;
margin: 15% 0 14% 0;
}

.src {
  background-color: rgba(0, 0, 0, 0.60);
  color: #0b0a4e;
  height: 80vh
}

}
</style>
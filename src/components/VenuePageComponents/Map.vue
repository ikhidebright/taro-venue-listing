<template>
    <div class="innercom" v-if="items[0].show_map === 1">
    <v-container>
    <h3 class="subheading mb-9 mt-0">Map location for {{ items[0].name }}</h3>
     <v-card 
    max-width="804"
    height="400"
    text
    flat>
  <v-row justify="center">
    <iframe
  width="100%"
  height="400"
  frameborder="0" style="border:0"
  :src="`https://www.google.com.ng/maps/embed/v1/place?key=AIzaSyA1jQsO80a0jxsee89zxFgnAEod8Bn1GXM
    &q=${items[0].name.replace(/[' ']+/g,'+')}` " allowfullscreen>
</iframe>
</v-row>
</v-card>
    </v-container>
    </div>
</template>

<script>
export default {
    name: 'Bookings',
    props: ["items"]
}
</script>

<style scoped>
</style>
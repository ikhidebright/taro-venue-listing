<template>
    <div class="manage">
    <v-container>
    <h3 class="subheading mb-9">Choose map location for {{ insertedName }}</h3>
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
    &q=${insertedName}`" allowfullscreen>
</iframe>
</v-row>
</v-card>
    </v-container>
    </div>
</template>

<script>
export default {
    name: 'Bookings',
    props: ["insertedName"]
}
</script>

<style scoped>
</style>
<template>
<div class="innercom mt-5">
<v-container>
    <h3 class="subheading">FAQs For {{ items[0].name }}</h3>
    <br>
    <v-card 
    max-width="804"
    text
    flat>
  <v-row justify="center">
    <v-expansion-panels 
      inset
      focusable
      tile
      text
      >
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
         max-width="804"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
    </v-card>
</v-container>
</div>
</template>

<script>
export default {
    name: 'VenueFAQs',
    props: ["items"]
}
</script>

<style scoped>
.faq {
    width: 60%
}
</style>
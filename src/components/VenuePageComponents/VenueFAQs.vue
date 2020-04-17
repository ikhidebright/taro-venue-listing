<template>
<div class="innercom mt-5" v-if="questionsandanswers.length > 0">
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
        v-for="item in questionsandanswers"
        :key="item.id"
         max-width="804"
      >
        <v-expansion-panel-header> <b> {{ item.ques }} </b></v-expansion-panel-header>
        <v-expansion-panel-content>
        <br>
        {{ item.answer }}
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
    props: ["items", "questionsandanswers"]
}
</script>

<style scoped>
.faq {
    width: 60%
}
</style>
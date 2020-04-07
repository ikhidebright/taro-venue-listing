<template>
<div>
<v-col
          v-for="review in reviews"
          :key="review.id"
          cols="12" sm="12" lg="9"
        >
          <v-card
            color='white'
            flat
            text
          >
            <div>
            <v-rating
            :value="review.stars"
            dense
            readonly
            v-model="review.stars"
            color="orange"
            background-color="orange"
            size="15"
            class="ml-3"
          ></v-rating>
           <v-card-subtitle 
           color='red'
           v-text="review.message"></v-card-subtitle>
            </div>
          </v-card>
        </v-col>
</div>
</template>

<script>
  export default {
    props: ['reviews'],
    data: () => ({
    }),
  }
</script>
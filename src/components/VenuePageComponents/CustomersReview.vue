<template>
    <div class="innercom">
        <v-container>
        <h3 class="subheading">Reviews for Landmark Event Center</h3>     
    <p class="ml-2 mt-5">There are no reviews for Mayakorp Boardroom yet.
      Be the first to write a review.</p>
  <v-row justify="left">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
<br>
<br>
    <v-btn color="#001F90" dark class="ml-5" v-on="on">Write a Review</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <!-- <span class="headline">Add a Review</span> -->
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                  <v-textarea
                  required
                  outlined
                  auto-grow
                  label="Review"></v-textarea>
                </v-col>
                <v-card-title>
          <v-rating
            :value="0"
            dense
            color="orange"
            background-color="orange"
            hover
            size="35"
            class="mr-2"
          ></v-rating>
          <!-- <span class="primary--text subtitle-2">64 Reviews</span> -->
        </v-card-title>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false">Close</v-btn>
          <v-btn color="#001F90" text @click="dialog = false">Rate</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
            <!-- <p class="ml-3 mt-5">There are no reviews for Mayakorp Boardroom yet.
Be the first to write a review.</p>
<v-btn color="#001F90" dark class="ml-3">Write a review</v-btn> -->
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'CustomersReview',
    data () {
      return {
          dialog: false,
     }
    },
    components: {
    }
}
</script>

<style scoped>
</style>
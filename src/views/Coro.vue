<template>
  <div class="">
  <v-container class="">
   <div class="display-1 font-weight-bold mb-5">
          Coronavirus disease
          </div>
  <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.
The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
            
            <div class="display-1 font-weight-bold mb-5">
         How it spreads
          </div>
          <p>Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.</p>
            

    <v-row
      no-gutters
    >    
    <v-card>
      <v-col cols='3'
      >
          <i class="fas fa-shield-virus"></i>
      </v-col>

       <v-col cols='12'
      >
        <div class="display-1 font-weight-bold mb-5">
          Priventive and Safety measures
          </div>
          <p>Wash your hands frequently</p>
          <p>Maintain social distancing</p>  
          <p>Avoid touching eyes, nose and mouth</p>
          <p>
If you have fever, cough and difficulty breathing, seek medical care early</p>
<p>
Stay informed and follow advice given by your healthcare provider</p>
             </v-col>
       </v-card>




       <v-card max-width='400'>
      <v-col cols='3'
      >
         <i class="fas fa-sort-amount-down"></i>
      </v-col>

       <v-col cols='12'
      >
        <div class="display-1 font-weight-bold mb-5">
         Cases in Nigeria
          </div>
          <p>Total Cases</p>
          210

          
          <p>Total Deaths</p>
          4

          
          <p>Recovered</p>
         25
             </v-col>
       </v-card>
    </v-row>
  </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
        total: 10,
         items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          }]
    }),
  }
</script>

<style scoped>
i {
    font-size: 8rem
}
</style>
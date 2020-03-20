<template>
    <v-app>
      <Header />
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
        <Footer />
    </v-app>
</template>

<script>
import Header from "@/components/SiteComponents/Header.vue"
import Footer from "@/components/SiteComponents/Footer.vue"

export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
};
</script>

<style>
.subheading {
  /* border-left: 0.3vmin solid red; */
  padding-left: 1vmin;
  font-weight: bold;
font-family: 'Merriweather Sans';
}

.innercom {
  /* border-top-left-radius: 5vmin;
  border-top-right-radius: 5vmin; */
  padding: 5vmin 0 0 0;
  margin: 5vmin 0 5vmin 0;
  border-top: 1px solid #f2f2f2;
}

p {
font-family: 'Open Sans';
}

.logo {
  font-family: 'Righteous';
  font-size: 4.5vmin
}
</style>
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
  background-color: rgb(243, 242, 250);
  padding: 4vmin;
  /* border-top-left-radius: 5vmin;
  border-top-right-radius: 5vmin; */
  margin: 5vmin;
  border-bottom: 2px solid #fff6f6;
}

p {
font-family: 'Open Sans';
}

.logo {
  font-family: 'Righteous';
  font-size: 4.5vmin
}
</style>
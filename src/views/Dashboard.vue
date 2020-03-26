<template>
    <div class="dashboard mt-12">
    <v-container>
    <FormAddvenue />
    </v-container>
    </div>
</template>

<script>
import FormAddvenue from "@/components/FormAddvenue.vue";

export default {
    name: 'Dashboard',
    components: {
        FormAddvenue
    }
}
</script>

<style scoped>
</style>
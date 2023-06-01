<script>
import AppDoctors from './AppDoctors.vue';
import AppFeatures from './AppFeatures.vue';
import AppServices from './AppServices.vue';
import AppTour from './AppTour.vue';
import AppAppointment from './AppAppointment.vue';
import AppClient from './AppClient.vue';


export default {
    components: { AppFeatures, AppDoctors, AppServices, AppTour, AppAppointment, AppClient, }
};

</script>

<template>
    <AppFeatures />
    <AppDoctors />
    <AppServices />
    <AppTour />
    <AppAppointment />
    <AppClient />
</template>

<style lang="scss" scoped></style>
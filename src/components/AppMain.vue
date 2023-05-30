<script>
import AppDoctors from './AppDoctors.vue';
import AppFeatures from './AppFeatures.vue';
import AppServices from './AppServices.vue';
import AppTour from './AppTour.vue';

export default {
    components: { AppFeatures, AppDoctors, AppServices, AppTour }
};

</script>

<template>
    <AppFeatures />
    <AppDoctors />
    <AppServices />
    <AppTour />
</template>

<style lang="scss" scoped></style>
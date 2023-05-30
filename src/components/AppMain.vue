<script>
import AppDoctors from './AppDoctors.vue';
import AppFeatures from './AppFeatures.vue';
import AppServices from './AppServices.vue';

export default {
    components: { AppFeatures, AppDoctors, AppServices }
};

</script>

<template>
    <AppFeatures />
    <AppDoctors />
    <AppServices />
</template>

<style lang="scss" scoped></style>
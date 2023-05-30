<script>
import AppCardService from './AppCardService.vue';

export default {
    components: {
        AppCardService
    }
};

</script>

<template>
    <div class="services">
        <img src="../assets/images/icon-6.png" alt="">
        <h3> OUR HEALTH SERVICES </h3>

        <div class="line_container">
            <img src="../assets/images/long-line.png" alt="" class="long_line">
        </div>

        <div class="services_container">
            <AppCardService />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.services {
    width: 1200px;
    margin-inline: auto;
    text-align: center;

    .services_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }
}
</style>
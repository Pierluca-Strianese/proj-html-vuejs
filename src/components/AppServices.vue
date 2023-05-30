<script>
import AppCardService from './AppCardService.vue';

export default {
    components: {
        AppCardService
    }
};

</script>

<template>
    <div class="container_big">
        <div class="container_description_section">
            <img src="../assets/images/icon-6.png" alt="">
            <h3> OUR HEALTH SERVICES </h3>

            <div class="line_container">
                <img src="../assets/images/long-line.png" alt="" class="long_line">
            </div>

            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit consectetur molestias incidunt id
                nihil
                unde, quas quo deleniti illo veniam. A praesentium qui optio consequatur necessitatibus, iure doloremque
                ex.
            </span>
        </div>
        <div class="services_container pt-5 ">
            <AppCardService />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.container_big {

    .services_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;

    }
}
</style>
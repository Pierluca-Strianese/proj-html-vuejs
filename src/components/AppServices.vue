<script>
import AppCardService from './AppCardService.vue';
import { store } from '../store';

export default {
    components: {
        AppCardService
    },

    data() {
        return {
            store,
        }
    },
};

</script>

<template>
    <div class="container_big">
        <div class="container_description_section">
            <img src="../assets/images/icon-6.png" alt="">
            <h3> {{ store.ServicesDescription.title }} </h3>

            <div class="line_container">
                <img src="../assets/images/long-line.png" alt="" class="long_line">
            </div>

            <span>
                {{ store.ServicesDescription.description }}
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
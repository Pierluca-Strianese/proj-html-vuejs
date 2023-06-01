<script>
import AppCardTour from './AppCardTour.vue';
import { store } from '../store';

export default {
    components: { AppCardTour },

    data() {
        return {
            store,
        }
    },
};

</script>

<template>
    <div class="container_tour">
        <div class="container_description_section">
            <img src="../assets/images/icon-7.png" alt="">
            <h4>{{ store.TourDescription.title }}</h4>

            <div class="line_container">
                <img src="../assets/images/long-line.png" alt="" class="long_line">
            </div>

            <div>
                {{ store.TourDescription.description }}
            </div>

            <img src="../assets/images/play-icon.png" alt="" class="mt-5">
        </div>
    </div>
    <div class="container_cardtour">
        <AppCardTour />
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.container_tour {
    background-image: url("../assets/images/paralax-bg-tour-facilities.jpg");
    background-size: cover;
    padding: 7rem 0;
    color: $white-text;
}

.container_cardtour {
    display: flex;
}
</style>
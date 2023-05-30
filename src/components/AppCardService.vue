<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

}

</script>

<template>
    <div class="service" v-for="(Service, i) in store.services" :key="i">

        <img :src="Service.img" alt="">
        <h4> {{ Service.name }}</h4>
        <p> {{ Service.description }} </p>

    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.service {
    width: calc((100% / 3) - 2rem);

    img {
        padding: 1rem;
    }

    h4 {
        padding: 1rem;
    }

}
</style>
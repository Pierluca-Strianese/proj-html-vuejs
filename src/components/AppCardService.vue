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

        <img :src="Service.img" alt="" class="p-2">
        <h4 class="p-3"> {{ Service.name }}</h4>
        <p class="pb-4"> {{ Service.description }} </p>

    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.service {
    width: calc((100% / 3) - 2rem);

    h4:hover {
        color: $primary-color;
        cursor: pointer;
    }

}
</style>
<script>
import { store } from '../store';

export default {
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
            <h2> {{ store.FeaturesDescription.title }} </h2>
            <p>
                {{ store.FeaturesDescription.description }}
            </p>
        </div>
        <ul>
            <li v-for="(menuItem, i) in store.features" :key="i" class="p-3">
                <img :src="menuItem.img" alt="">
                <h3> {{ menuItem.name }}</h3>
                <p> {{ menuItem.description }}</p>

            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.container_big {

    ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            h3 {
                margin: 1rem 0;
                font-size: 1rem;
            }

            h3:hover {
                color: $primary-color;
                cursor: pointer;
            }
        }
    }
}
</style>
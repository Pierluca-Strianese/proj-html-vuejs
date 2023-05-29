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
    <main>
        <h2> Welcome to Avada Health </h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi itaque, voluptate fuga sequi consequuntur
            quod molestiae placeat labore officia dignissimos, at blanditiis mollitia optio ad veritatis veniam! Natus,
            porro vero!
        </p>
        <ul>
            <li v-for="(menuItem, i) in store.features" :key="i">
                <img :src="menuItem.img" alt="">
                <h3> {{ menuItem.name }}</h3>
                <p> {{ menuItem.description }}</p>

            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

main {
    width: 1200px;
    margin-inline: auto;
    padding: 7rem 0;
    text-align: center;
    color: $primary-text;

    ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            padding: 2rem;

            h3 {
                margin: 1rem 0;
                font-size: 1rem;
            }
        }
    }
}
</style>
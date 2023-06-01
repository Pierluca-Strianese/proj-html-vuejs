<script>
import AppNavBar from './AppNavBar.vue';

export default {
    components: { AppNavBar, }
}
</script>

<template>
    <footer>
        <AppNavBar />
        <div class="container">
            <h1> Caring <span> For Life </span> </h1>
            <div class="description py-2">Kind words can be short and easy to speak, but their echoes are truly endless.
                Avada Health
                focuses on you as
                if it was our own family.</div>
            <div class="btn_primary my-3 py-2 px-5"> LEARN MORE </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

footer {
    background-image: url("../assets/images/header-image-homepage.jpg");
    background-size: cover;
    height: 90vh;

    .container {
        width: 900px;
        color: $white-text;
        padding-top: 12rem;

        h1 {
            font-size: 4rem;

            span {
                color: $primary-color;
            }
        }

        .description {
            width: 600px;
        }
    }
}
</style>
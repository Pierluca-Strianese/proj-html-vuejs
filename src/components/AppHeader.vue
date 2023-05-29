<script>
import AppNavBar from './AppNavBar.vue';

export default {
    components: { AppNavBar, }
}
</script>

<template>
    <main>
        <AppNavBar />
        <div class="container">
            <h1> Caring <span> For Life </span> </h1>
            <p class="py-2">Kind words can be short and easy to speak, but their echoes are truly endless. Avada Health
                focuses on you as
                if it was our own family.</p>
            <div class="btn_primary py-2 px-5"> LEARN MORE </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

main {
    background-image: url("../assets/images/header-image-homepage.jpg");
    background-size: cover;
    height: 90vh;

    .container {
        width: 700px;
        color: $white-text;
        padding-top: 10rem;

        h1 {
            span {
                color: $primary-color;
            }
        }
    }
}
</style>
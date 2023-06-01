<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: { AppHeader, AppMain, AppFooter }
}
</script>

<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap');

html,
body {
    font-family: 'Source Sans Pro', sans-serif;
}

#app {
    font-family: 'Source Sans Pro', sans-serif;
}
</style>
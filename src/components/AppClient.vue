<script>

export default {

};

</script>

<template>
    <div class="client">
        <img src="../assets/images/client-logos-1.png" alt="">
        <img src="../assets/images/client-logos-2.png" alt="">
        <img src="../assets/images/client-logos-3.png" alt="">
        <img src="../assets/images/client-logos-4.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.client {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/images/rgb-gradient-bar-for-logo-carrasel.jpg");
    background-size: cover;
    padding: 1rem 0;

    img {
        height: 12rem;
    }
}
</style>
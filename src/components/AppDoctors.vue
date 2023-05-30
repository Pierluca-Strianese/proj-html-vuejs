<script>
import AppCardDoctor from './AppCardDoctor.vue';

export default {
    components: { AppCardDoctor }
};

</script>

<template>
    <div class="container_doctor">
        <div>
            <img src="../assets/images/icon-5.png" alt="">
            <h3> MEET OUR DOCTORS </h3>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit consectetur molestias incidunt id nihil
                unde, quas quo deleniti illo veniam. A praesentium qui optio consequatur necessitatibus, iure doloremque ex.
            </span>

            <AppCardDoctor />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.container_doctor {
    background-color: $background_color2;

    div {
        width: 1200px;
        margin-inline: auto;
        text-align: center;

        img {
            padding-top: 6rem;
        }

        h3 {
            padding: 2rem 0;
        }

        span {
            width: 600px;
        }
    }
}
</style>
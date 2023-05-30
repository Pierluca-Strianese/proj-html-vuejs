<script>
import AppCardDoctor from './AppCardDoctor.vue';

export default {
    components: { AppCardDoctor }
};

</script>

<template>
    <div class="container_doctor">
        <div class="container_big">
            <div class="container_description_section">
                <img src="../assets/images/icon-5.png" alt="">
                <h3> MEET OUR DOCTORS </h3>
                <div class="line_container">
                    <img src="../assets/images/long-line.png" alt="" class="long_line">
                </div>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit consectetur molestias incidunt id
                    nihil
                    unde, quas quo deleniti illo veniam. A praesentium qui optio consequatur necessitatibus, iure doloremque
                    ex.
                </span>
            </div>
            <AppCardDoctor />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.container_doctor {
    background-color: $background_color2;


    h3 {
        padding-top: 2rem;
    }

    span {
        width: 600px;
    }

}
</style>
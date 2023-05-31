<script>
export default {

}
</script>

<template>
    <footer>
        <div class="info">
            <div class="description">
                <img src="../assets/images/medical_logo_1x_dark.png" alt="">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, porro voluptates! Alias odit ipsa
                    consequuntur incidunt, optio, atque nesciunt quae aspernatur nulla laborum repellendus veniam enim
                    dolorum nemo accusamus error.
                </div>
            </div>
            <div class="contact_info">
                <h5>Contact infomation</h5>

                <ul>
                    <li>
                        via immagfianria n.1
                    </li>
                    <li>
                        +02 3432 45325432 532
                    </li>
                </ul>
            </div>
            <div class="aboutus">
                <h5> LEARN ABOUT US </h5>
            </div>
        </div>
        <div class="departments">

            <h5> MEDICAL departments</h5>

            <ul>
                <li></li>
            </ul>

            <div class="btn_primary"> VIEW OUR DEPARTMENTS</div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;


footer {
    display: flex;
    justify-content: space-between;
    height: 100px;

    .info {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        background-color: aqua;

        .description {
            width: 60%;
        }

        .contact_info {
            width: 40%;
        }
    }

    .departments {
        width: 40%;
        background-color: beige;
    }
}
</style>
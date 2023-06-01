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
    <footer>
        <div class="info p-4">
            <div class="description p-4">
                <img src="../assets/images/medical_logo_1x_dark.png" alt="" class="p-2">
                <div class="py-3 border-bottom">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, porro voluptates! Alias odit ipsa
                    consequuntur incidunt, optio, atque nesciunt quae aspernatur nulla laborum repellendus veniam enim
                    dolorum nemo accusamus error.
                </div>
                <h6 class="pt-2"> LEARN MORE ABOUT US </h6>
                <div class="social">
                    <font-awesome-icon icon="fa-brands fa-square-facebook" class="icon_social facebook" />
                    <font-awesome-icon icon="fa-brands fa-square-twitter" class="icon_social twitter" />
                    <font-awesome-icon icon="fa-brands fa-square-youtube" class="icon_social youtube" />
                    <font-awesome-icon icon="fa-brands fa-square-instagram" class="icon_social instagram" />
                </div>
            </div>
            <div class="contact_info p-4">
                <h5>Contact infomation</h5>

                <ul>
                    <li class="pt-3">
                        <font-awesome-icon icon="fa-solid fa-location-dot" class="icon_contact" /> via immagfianria n.1
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-phone-flip" class="icon_contact" /> +02 3432 45325432 532
                    </li>
                </ul>
            </div>
        </div>
        <div class="departments p-4">

            <h5 class="py-4"> MEDICAL departments</h5>

            <ul>
                <li v-for="medicalDepartment in store.medicalDepartments">
                    <font-awesome-icon icon="fa-solid fa-caret-right" class="rounded_icon me-2" /> {{ medicalDepartment
                    }}
                </li>
            </ul>

            <div class="btn_tra mt-5"> VIEW OUR DEPARTMENTS</div>
        </div>
    </footer>
    <div class="copyright py-4">
        © Copyright 2012 - 2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by WordPress
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;


footer {
    display: flex;
    justify-content: space-between;

    .info {
        display: flex;
        flex-wrap: wrap;
        width: 80%;

        .description {
            width: 60%;
        }

        .contact_info {
            width: 30%;

            ul {
                li {

                    margin-top: 1rem;

                    .icon_contact {
                        color: $primary_color;
                        margin-right: 1rem;
                    }
                }
            }
        }

        .icon_social {
            font-size: 1.8rem;
            padding-right: .5rem;
        }
    }

    .departments {
        width: 40%;
        margin-bottom: 6rem;

        ul {

            li {
                display: flex;
                align-items: center;
                margin-top: .5rem;
                font-size: .9rem;
            }
        }
    }
}

.copyright {
    background-color: $background_color2;
    font-size: .8rem;
    padding-left: 48px;
}
</style>
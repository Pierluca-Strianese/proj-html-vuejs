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
    <div class="container_cards pt-5">
        <div class="card_doctor" v-for="(Doctor, i) in store.doctor" :key="i">
            <img :src="Doctor.img" alt="">
            <div class="description p-5">
                <h4> {{ Doctor.name }} </h4>
                <span class="specialization">{{ Doctor.specialization }}</span>
                <p>{{ Doctor.description }}</p>
                <font-awesome-icon icon="fa-brands fa-square-facebook" class="icon_social facebook" />
                <font-awesome-icon icon="fa-brands fa-square-twitter" class="icon_social twitter" />
                <font-awesome-icon icon="fa-brands fa-square-instagram" class="icon_social instagram" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.container_cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    .card_doctor {
        width: calc(100% / 3 - 2rem);
        background-color: white;
        text-align: left;

        img {
            width: 100%;

        }

        .description {
            h4 {
                margin: 0;
            }

            p {
                padding-top: 2rem;
            }
        }
    }
}
</style>
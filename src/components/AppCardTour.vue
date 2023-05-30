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
    <div class="card_tour card_1">
        <h5> Emergency Care </h5>
        <img src="../assets/images/wave-divider.png" alt="">
        <div class="py-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        <div class="btn_secondary py-1 px-3"> LEARN MORE </div>
    </div>
    <div class="card_tour card_2">
        <h5> Expert Diagnostic </h5>
        <img src="../assets/images/wave-divider.png" alt="">
        <div class="py-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        <div class="btn_secondary py-1 px-3"> LEARN MORE </div>
    </div>
    <div class="card_tour card_3">
        <h5> Superb Rehabilitation </h5>
        <img src="../assets/images/wave-divider.png" alt="">
        <div class="py-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        <div class="btn_secondary py-1 px-3"> LEARN MORE </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.card_tour {
    width: calc(100% / 3);
    color: $white-text;
    text-align: center;
    padding: 3rem 1rem;
}

.card_1 {
    background-color: #3BAFBF;
}

.card_2 {
    background-color: #3896C2;
}

.card_3 {
    background-color: #327EC7;
}
</style>
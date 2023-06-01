<script>
import { store } from '../store';

export default {

    data() {
        return {
            store,
        }
    },

};

</script>

<template>
    <div class="appointment">
        <div class="container_description_section">
            <h3>
                {{ store.AppointmentsDescription.title }}
            </h3>

            <div class="line_container">
                <img src="../assets/images/long-line.png" alt="" class="long_line">
            </div>

            <div>
                {{ store.AppointmentsDescription.description }}
            </div>

            <div class="form mt-4">
                <input type="text" placeholder="Name" class="input_form">
                <input type="email" placeholder="Email" class="input_form">
                <input type="number" placeholder="Phone number" class="input_form">
                <input type="datetime-local" placeholder="Date" class="input_form">
            </div>

            <div class="form_note">
                <input type="text" placeholder="How we can help?" class="input_form">
            </div>

            <div class="btn_primary"> MAKE AN APPOINTMENT</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.appointment {
    background-image: url("../assets/images/make-an-appointment.jpg");
    background-size: cover;
    padding: 7rem 0;
    color: $white-text;

    .form {

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        color: $white-text;

        ::-webkit-input-placeholder {
            color: white;
            font-size: .8rem;
        }
    }

    .form_note {
        ::-webkit-input-placeholder {
            color: white;
            font-style: italic;
            font-size: .8rem;
        }

        input {
            width: 100%;
            height: 7rem;
        }
    }

    .btn_primary {
        width: 100%;
        height: 3rem;
    }
}
</style>
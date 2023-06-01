<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },

};
</script>

<template>
    <headerTop>
        <img src="../assets/images/medical_logo_1x_light.png" alt="" class="ps-4 py-3">
        <span>
            <ul>
                <li v-for="(menuItem, i) in store.menuData" :key="i">
                    <a :href="menuItem.src" :class="{ active: menuItem.active }">
                        {{ menuItem.name }}
                        <font-awesome-icon icon="fa-solid fa-angle-down" />
                    </a>
                    <div class="menu_bar" :class="{ active_menu: menuItem.active }">
                        <div v-for="(medicalDepartment, i) in store.medicalDepartments" :key="i" class="px-4 py-2">
                            {{ medicalDepartment }}
                        </div>
                    </div>
                </li>
            </ul>
            <div class="btn_primary px-4 py-2">MAKE APPOINTMENT</div>
        </span>
    </headerTop>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

headerTop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        display: flex;
        margin-right: 1rem;

        ul {
            display: flex;
            justify-content: end;

            li {
                position: relative;
                display: flex;
                padding-inline: 15px;
                height: 100%;
                align-items: center;

                .active {
                    color: $primary-color;
                    cursor: pointer;
                }

                a {
                    color: $white-text;
                    text-decoration: none;
                }

                .menu_bar {
                    position: absolute;
                    top: 50px;
                    background-color: white;
                    display: none;

                    div {
                        color: black;
                    }
                }

                .active_menu {
                    display: inline;
                }
            }
        }
    }
}
</style>
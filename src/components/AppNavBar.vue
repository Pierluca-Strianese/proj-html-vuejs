<script>
export default {
    data() {
        return {
            menuData: [
                {
                    name: 'HOME',
                    src: '#',
                    active: true,
                },
                {
                    name: 'ABOUT',
                    src: '#',
                    active: false,
                },
                {
                    name: 'DEPARTMENT',
                    src: '#',
                    active: false,
                },
                {
                    name: 'ARTICLES',
                    src: '#',
                    active: false,
                },
            ],
        };
    },
};
</script>

<template>
    <header>
        <img src="../assets/images/medical_logo_1x_light.png" alt="" class="ps-4 py-3">
        <span>
            <ul>
                <li v-for="(menuItem, i) in menuData" :key="i">
                    <a :href="menuItem.src" :class="{ active: menuItem.active }">{{ menuItem.name }}</a>
                </li>
            </ul>
            <div class="btn_primary px-4 py-2">MAKE APPOINTMENT</div>
        </span>
    </header>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        display: flex;
        margin-right: 1rem;

        ul {
            display: flex;
            justify-content: end;
            list-style-type: none;
            padding: 0;
            margin: 0;

            li {
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
            }
        }
    }
}
</style>
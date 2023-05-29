import { reactive } from 'vue';

export const store = reactive({
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

    features: [
        {
            name: 'SAME DAY APPOINTMENTS',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim',
            img: 'src/assets/images/icon-1.png',
        },
        {
            name: 'WORD CLASS FACILITIES',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim',
            img: 'src/assets/images/icon-2.png',
        },
        {
            name: 'EXPERT DOCTORS',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim',
            img: 'src/assets/images/icon-1.png',
        },
        {
            name: 'COMPLEMENTARY THERAPIES',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim',
            img: 'src/assets/images/icon-4.png',
        },
    ]
});

export default store
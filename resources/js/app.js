require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import moment from "moment";
import store from './store';

moment.locale('pt-BR');

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .mixin({ methods: { route } })

        app.config.globalProperties.$filters = {
            formatDate(value){
                return moment(value).format('DD/MM/YYYY HH:mm')
            }
        }

        app.use(store).mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });

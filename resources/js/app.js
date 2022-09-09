import './bootstrap';

import Alpine from 'alpinejs';

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

window.Alpine = Alpine;

InertiaProgress.init()

Alpine.start();

createInertiaApp({
    resolve: name => import(`./${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
        .use(plugin)
        .mount(el)
    },
})

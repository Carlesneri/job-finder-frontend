import Home from './routes/Home.svelte'
import LastJobs from './routes/LastJobs.svelte'

const routes = [
    {
        name: '/',
        component: Home
    },
    {
        name: '/last-jobs',
        component: LastJobs,
    },
]

export { routes }
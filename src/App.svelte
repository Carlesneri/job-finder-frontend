<script>
	import Job from './Job.svelte'
	import firebase from 'firebase/app'
	import 'firebase/firebase-firestore'
	import { firebaseConfig } from '../firebaseConfig.js'

	firebase.initializeApp(firebaseConfig)

	const jobsDB = firebase.firestore()

	let jobs = []

	jobsDB.collection('jobs').onSnapshot(querysnapshot => {
		let newJobs = []
		querysnapshot.forEach( doc => {
			newJobs.push(doc.data())
		})
		jobs = newJobs
		// console.log('jobs', jobs)
	})



</script>

<main>

	{#each jobs as job}
		<Job {job} />
	{/each}

</main>

<style>
	main{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
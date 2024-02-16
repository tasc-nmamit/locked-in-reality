<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	import { db, user, userData, userID, userProfileData } from '$lib/firebase/firebase';
	import { doc, collection, getDocs, setDoc, writeBatch, limit, query, where, arrayUnion } from 'firebase/firestore';
	import { goto } from '$app/navigation';

	let teamName: string = '';

	//function to generate random 5 character alphanumeric string
	function genSecret(length: number) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	async function createTeam() {
		if (teamName == '') {
			alert('Please enter a team name!');
			return;
		}

		const batch = writeBatch(db);

		const eventRef = doc(db, 'events', 'lir');
		const newTeamRef = doc(collection(db, 'lir'));
		const userProfileRef = doc(db, 'profile', $userID!.user);

		batch.update(userProfileRef, {
			lir: newTeamRef.id
		});

		batch.update(eventRef, {
			members: arrayUnion($userID!.user)
		});

		batch.set(newTeamRef, {
			teamName: teamName,
			teamURL: newTeamRef.id,
			teamSecret: genSecret(5),
			leader: $userID!.user,
			leaderName: $userData!.name,
			leaderPhone: $userProfileData!.phone,
			leaderEmail: $user!.email,
			members: [$userID!.user],
			memberInfo: [
				{
					id: $userID!.user,
					name: $userData!.name,
					usn: $userData!.usn,
					phone: $userProfileData!.phone,
					email: $user!.email
				}
			],
			memberCount: 1,
			acceptingMembers: true,
			createdAt: new Date().toISOString()
		});

		await batch.commit();
	}

	// check if a user is in a team or not
	async function checkTeam() {
		if (!$userID) return;

		const teamCollectionRef = collection(db, 'lir');

		const q = query(teamCollectionRef, where('members', 'array-contains', $userID!.user), limit(1));
		const snapshot = await getDocs(q);

		const exists = snapshot.docs[0]?.exists();
		if (exists) {
			//redirect to team page
			//goto('/lir/team/' + snapshot.docs[0].id);
		}
	}

	//$: $userID && checkTeam();
</script>

<div class="mx-10 h-[16rem] w-[18rem] flex-col items-center justify-center rounded-2xl border-[1px] border-[#d2b863] p-10 md:h-[22rem] md:w-[25rem]">
	<div class="flex h-full w-full flex-col items-center justify-center space-y-6">
		<h2 class="font-jbExtrabold text-2xl md:text-4xl">Create a Team</h2>
		<Input type="text" placeholder="Enter your team name!" bind:value={teamName} class="font-jbMedium h-12  w-60 rounded-2xl p-4  md:h-14 md:w-80" />
		<Button on:click={createTeam}>Create Team</Button>
	</div>
</div>

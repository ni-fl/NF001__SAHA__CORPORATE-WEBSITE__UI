// IMPORTS
import SayHello from 'components/03-organisms/say-hello/say-hello';
import Profile from 'components/03-organisms/profile/profile';
import BehindTheScene from 'components/03-organisms/behind-the-scene/behind-the-scene';
import { fetchBehindTheScene, fetchSayHello, fetchProfile } from 'queries/index.js';

// METADATA
const metadata = {
	title: 'Kontakt | Samira Haas',
	description: 'Lorem Ipsum',
};

// COMPNENT
const Component = async () => {

	// FETCH SAY-HELLO
	const sayHello = await fetchSayHello();

	// FETCH PROFILE
	const profile = await fetchProfile();

	// FETCH BEHIND-THE-SCENES
	const behindTheScene = await fetchBehindTheScene();

	// RENDER
	return (
		<>
			<SayHello data={ sayHello } />
			<Profile data={ profile } />
			<BehindTheScene data={ behindTheScene } />
		</>
	);

};

// EXOPRTS
export { metadata };
export default Component;

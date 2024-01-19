// IMPORTS
import SayHello from 'components/03-organisms/say-hello/say-hello';
import Profile from 'components/03-organisms/profile/profile';
import BehindTheScene from 'components/03-organisms/behind-the-scene/behind-the-scene';
import Cta from 'components/03-organisms/cta/cta';
import Footer from 'components/03-organisms/footer/footer';
import Jumper from 'components/03-organisms/jumper/jumper';
import { fetchBehindTheScene, fetchSayHello, fetchProfile } from 'queries';


// METADATA
const metadata = {
	title: 'Kontakt | Samira Haas',
	description: 'Ich bin Samira aus Luzern. Fotografin und Gestalterin. Lass uns gemeinsam dein Unternehmen sichtbar machen. Ich freue mich auf deine Kontaktaufnahme.',
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
			<Cta />
			<Jumper />
			<Footer />
		</>
	);

};

// EXOPRTS
export { metadata };
export default Component;

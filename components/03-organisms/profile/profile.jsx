import Heading from 'components/01-atoms/heading/heading';
import Section from 'components/04-layouts/section/section';
import Text from 'components/01-atoms/text/text';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const Profile = ({ data }) => {

	// REGISTER PLUGIN
	gsap.registerPlugin(ScrollTrigger);

	// CREATE REFS
	const profileRef = useRef();
	const profileTimelineRef = useRef();

	// ANIMATE ELEMENTS
	useEffect(() => {
		const context = gsap.context(() => {
			profileTimelineRef.current = gsap.timeline({ delay: 0.25, scrollTrigger: { trigger: profileTimelineRef.current, start: 'top bottom-=80px', end: 'bottom top-=80px' } });
			profileTimelineRef.current.to('.profile .profile__education', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.5);
			profileTimelineRef.current.to('.profile .profile__contact', { autoAlpha: 1, duration: 1, top: 0, ease: 'power4.out' }, 0.75);
		}, profileRef);
		return () => { return context.revert(); };
	}, []);

	return (
		<Section className="profile" ref={ profileRef }>
			<div className="profile__education education animation--fade-in">
				<Heading className="education__heading" level="h3">{ data?.attributes.education.heading }</Heading>
				<div className="education__table table">
					<div className="table__body">
						{ data?.attributes.education.training.map((item) => {
							return (
								<div className="table__row" key={ item.id }>
									<div className="table__cell"><Text className="education__item text--medium">{ item.period }</Text></div>
									<div className="table__cell"><Text className="education__item text--medium">{ item.description }</Text></div>
								</div>
							);
						}) }
					</div>
				</div>
			</div>
			<div className="profile__contact contact animation--fade-in">
				<Heading className="contact__heading" level="h3">{ data?.attributes.contact.heading }</Heading>
				<div className="contact__address address">
					{ data?.attributes.contact.address.map((item) => {
						return (
							item.link ? (
								<a className="address__link" href={ item.link } key={ item.id }>
									<Text className="address__item text--medium">{ item.text }</Text>
								</a>
							) : (
								<Text className="address__item text--medium" key={ item.id }>{ item.text }</Text>
							)

						);
					})}
				</div>
			</div>
		</Section>
	);

};

export default Profile;

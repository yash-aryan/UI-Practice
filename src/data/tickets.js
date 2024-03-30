import { idGeneratorFactory } from '../utils/id-generator';

const idGenerator = idGeneratorFactory();
const ticketsData = [getTicket(), getTicket(), getTicket()];

function getTicket() {
	return {
		id: idGenerator.generate(),
		type: 'normal',
		src: getPlaceholder(),
		alt: 'placeholder',
		caption: 'Team Title',
		date: 'OCT 15',
		day: 'SUN',
		time: '4:30 PM',
		paragraph: 'Lorem Ipsum',
		cta: 'Take Flight Collection',
	};
}

function getPlaceholder() {
	return 'https://placehold.co/240x385?text=Sample&font=montserrat';
}

export default {
	header: 'Collection Spotlight',
	caption:
		'Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!',
	children: ticketsData,
};

import { idGeneratorFactory } from '../utils/id-generator';

const idGenerator = idGeneratorFactory();
const teamsData = [getTeam(), getTeam(), getTeam(), getTeam(), getAd()];

function getTeam() {
	return {
		id: idGenerator.generate(),
		type: 'normal',
		src: getPlaceholder(),
		alt: 'placeholder',
		caption: 'Team Title',
		heading1: 'Lorem',
		info1: 'Lorem Ipsum',
		heading2: 'Lorem',
		info2: 'Lorem Ipsum',
	};
}

function getAd() {
	return {
		id: idGenerator.generate(),
		type: 'ad',
		src: getPlaceholder(),
		alt: 'placeholder',
		caption: 'Ad Title',
		paragraph: 'Lorem Ipsum',
	};
}

function getPlaceholder() {
	return 'https://placehold.co/240x385?text=Sample&font=montserrat';
}

export default { header: 'Sports', children: teamsData };

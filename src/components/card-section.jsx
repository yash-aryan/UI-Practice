import '../styles/card-section.css';
import dataList from '../data/teams';

export function CardSection() {
	return (
		<section className="card-section">
			<h2 className="card-section__title title-text">{dataList.header}</h2>
			<div className="cards-wrap">
				{dataList.children.map(data => {
					if (data.type === 'ad') return <AdCard key={data.id} {...data} />;
					return <Card key={data.id} {...data} />;
				})}
			</div>
			<button type="button" className="card-section__btn">
				See More
			</button>
		</section>
	);
}

function Card(props) {
	return (
		<section className="card">
			<figure className="figure">
				<img src={props.src} alt={props.alt} />
				<figcaption>
					<h3>{props.caption}</h3>
				</figcaption>
			</figure>
			<div className="card-details">
				<h4 className="card-details__title">{props.heading1}</h4>
				<span className="card-details__value">{props.info1}</span>
				<h4 className="card-details__title">{props.heading2}</h4>
				<span className="card-details__value">{props.info2}</span>
			</div>
		</section>
	);
}

function AdCard(props) {
	return (
		<section className="card card--ad">
			<figure className="figure">
				<img src={props.src} alt={props.alt} />
				<figcaption>
					<h3>{props.caption}</h3>
					<p>{props.paragraph}</p>
				</figcaption>
			</figure>
		</section>
	);
}

import '../styles/ticket-section.css';
import dataList from '../data/tickets';

export function TicketSection() {
	return (
		<section className="ticket-section">
			<h2 className="ticket-section__title title-text">{dataList.header}</h2>
			<p className="ticket-section__caption">{dataList.caption}</p>
			<div className="carousel">
				<div className="carousel__btn-wrap">
					<button
						type="button"
						className="carousel__btn--left carousel__btn"
						aria-label="view left"
					></button>
				</div>
				<div className="carousel__ticket-wrap">
					{dataList.children.map(data => {
						return <Ticket key={data.id} {...data} />;
					})}
				</div>
				<div className="carousel__btn-wrap">
					<button
						type="button"
						className="carousel__btn--right carousel__btn"
						aria-label="view right"
					></button>
				</div>
			</div>
		</section>
	);
}

function Ticket(props) {
	return (
		<section className="ticket">
			<figure className="figure">
				<img src={props.src} alt={props.alt} />
				<figcaption className="ticket__figcaption">
					<h3>{props.caption}</h3>
					<span>{props.date.concat(' | ', props.day, ' | ', props.time)}</span>
					<p>{props.paragraph}</p>
				</figcaption>
			</figure>
			<button type="button" className="ticket__btn">{props.cta}</button>
		</section>
	);
}

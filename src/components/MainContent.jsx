import '../styles/MainContent.css';
import { CardSection } from './card-section';
import { TicketSection } from './ticket-section';

export function MainContent() {
    return (
        <main>
            <CardSection />
            <TicketSection />
        </main>
    )
}
import './styles/App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

function App() {
	const [isDark, setIsDark] = useState(true);

	return (
		<div className="app">
			<Header switchTheme={switchTheme} />
			<MainContent />
		</div>
	);

	function switchTheme() {
		document.documentElement.classList.toggle('dark');
		setIsDark(!isDark);
	}
}

export default App;

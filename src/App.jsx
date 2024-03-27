import './styles/App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
	const [isDark, setIsDark] = useState(true);

	return (
		<div className="app" data-theme={isDark ? 'dark' : ''}>
			<Header switchTheme={switchTheme} />
			<Main />
		</div>
	);

	function switchTheme() {
		setIsDark(!isDark);
	}
}

export default App;

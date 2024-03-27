import '../styles/Header.css';

export function Header({ switchTheme }) {
	return (
		<header>
			<h1 className="top-header">Project by Yash Aryan</h1>
			<label className={'input-theme'}>
				<input type="checkbox" name="theme" onChange={switchTheme} />
				Flashlight Mode
			</label>
		</header>
	);
}

import '../styles/Header.css';

export function Header({ switchTheme }) {
	return (
		<header>
			<h1 className="top-header">UI Practice - github.com/yash-aryan</h1>
			<label className={'input-theme'}>
				<input type="checkbox" name="theme" onChange={switchTheme} />
				Dark Mode
			</label>
		</header>
	);
}

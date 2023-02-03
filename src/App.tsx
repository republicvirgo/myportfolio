import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <nav>
                <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                <a href="/about">About</a> | <a href="/contact">Contact Us</a>
            </nav>
        </div>
    );
}

export default App;

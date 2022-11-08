import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorkerRegistration';
import App from './application/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
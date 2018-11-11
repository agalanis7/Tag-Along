import ReactOnRails from 'react-on-rails';
import App from '../bundles/App/components/App';
import Profile from '../bundles/App/components/Profile';
import 'babel-polyfill';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App,
  Profile
});

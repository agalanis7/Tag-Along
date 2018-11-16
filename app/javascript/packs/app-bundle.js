import ReactOnRails from 'react-on-rails';
import App from '../bundles/App/components/App';
import NewProfile from '../bundles/App/components/NewProfile/NewProfile';
import Events from '../bundles/App/components/Event/Events';
import NewEvent from '../bundles/App/components/Event/NewEvent';
import Map from '../bundles/App/components/Event/Map'
import 'babel-polyfill';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App,
  NewProfile,
  Events,
  NewEvent,
  Map

});

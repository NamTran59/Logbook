import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {addCircleOutline, hammerOutline} from 'ionicons/icons'
import AddProperty from './pages/AddProperty';
import NativeFunctions from './pages/NativeFunctions';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/addproperty">
          <AddProperty />
        </Route>
        <Route exact path="/">
          <Redirect to="/addproperty" />
        </Route>
        <Route exact path="/nativefunctions">
          <NativeFunctions />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="addproperty" href="/addproperty">
        <IonIcon icon={addCircleOutline}/>Add Property
        </IonTabButton>
        <IonTabButton tab="nativefunctions" href="/nativefunctions">
        <IonIcon icon={hammerOutline}/>Native Functions</IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
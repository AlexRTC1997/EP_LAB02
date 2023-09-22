import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './GpsPage.css';

const GPS: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GPS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">GPS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="GPS page" />
      </IonContent>
    </IonPage>
  );
};

export default GPS;

import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Geolocation } from "@capacitor/geolocation";
import { location as position } from "ionicons/icons";

import "./GpsPage.css";
import { useState } from "react";

const GPS: React.FC = () => {
  const [location, setLocation] = useState("Getting your geolocation...");

  const getLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    const {latitude, longitude} = coordinates.coords;

    setLocation(`Latitude: ${latitude} \n Longitude: ${longitude}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GPS App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">GPS</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="photo-container">
          {location && <IonLabel>{location}</IonLabel>}
        </div>

        <IonButton
          onClick={getLocation}
          expand="full"
          fill="outline"
          shape="round"
        >
          <IonIcon icon={position} className="ion-padding" />
          Get your Location
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GPS;

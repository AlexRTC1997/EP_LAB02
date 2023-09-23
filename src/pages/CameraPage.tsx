import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./CameraPage.css";

import { useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { cameraOutline } from "ionicons/icons";

const CameraPage: React.FC = () => {
  const [photo, setPhoto] = useState<string | undefined>();

  const takePhoto = async () => {
    const photoData = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
    });

    setPhoto(photoData.dataUrl);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Camera App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {photo ? (
          <div className="photo-container">
            <img src={photo} alt="Taken Photo" />
          </div>
        ) : (
          <div className="message-container">
            <p>Your photo will be displayed here.</p>
          </div>
        )}

        <IonButton
          onClick={takePhoto}
          expand="full"
          fill="outline"
          shape="round"
        >
          <IonIcon icon={cameraOutline} className="ion-padding"/>
          Take a Photo
        </IonButton>
        {/* {photo ? <img src={photo} alt="Captured" style={{ width: "100%" }} /> : <p>Nothing</p>} */}
      </IonContent>
    </IonPage>
  );
};

export default CameraPage;

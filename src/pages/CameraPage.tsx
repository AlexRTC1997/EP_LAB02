import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./CameraPage.css";

import { useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";

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
          <IonTitle>Camera</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonButton onClick={takePhoto}>Take a Photo</IonButton>
        {photo && <img src={photo} alt="Captured" style={{ width: "100%" }} />}
      </IonContent>
    </IonPage>
  );
};

export default CameraPage;

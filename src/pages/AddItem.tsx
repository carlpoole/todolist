import React from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './AddItem.css';
import { Controller, useForm } from 'react-hook-form';

const AddItem: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const addItem = (data : any) => {
    alert("creating a new todo with: " + data);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Todo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(addItem)}>
          <IonItem>
            <IonLabel position="floating">Text</IonLabel>
            <Controller
              as={<IonInput/>}
              name="todo"
              control={control}
              onChangeName="onIonChange"
            />
          </IonItem>
          <IonButton expand="block" type="submit" className="ion-margin-top">
            Add
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddItem;

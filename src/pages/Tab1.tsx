import React, { Component } from 'react';
import axios from 'axios';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

class Tab1 extends Component {
  API_KEY = 'df12e06f64bb406b852f0459a85ca8a9';
  API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`

  state: { items: any[] } = {
    items: []
  }

  componentDidMount() {
    axios.get(this.API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ items: data.articles })
      console.log(this.state.items)
     })
  }

  render() {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Heroes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Heroes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        {this.state.items.map((item) => (
          <IonCard>
            <img src={item.urlToImage}/>
            <IonCardHeader>
              <IonCardTitle>
              {item.title}
              </IonCardTitle>
              <IonCardSubtitle>
                {item.author}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{item.content}</p>
              <IonButton href={item.url}>Read</IonButton>
            </IonCardContent>
          </IonCard>

        ))}
        </IonContent>
      </IonContent>
    </IonPage>
    );
  }
}

export default Tab1;

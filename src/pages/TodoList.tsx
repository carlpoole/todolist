import React, { Component } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './TodoList.css';

class TodoList extends Component {
  state: { items: any[] } = {
    items: []
  }

  componentDidMount() {
    // axios.get(this.API_URL).then(response => response.data)
    // .then((data) => {
    //   this.setState({ items: data.articles })
    //   console.log(this.state.items)
    //  })
  }

  render() {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todo List</IonTitle>
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

export default TodoList;

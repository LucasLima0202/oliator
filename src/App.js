import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Forms from './components/Forms/Index';
import Header from './components/Header/Header';
import TextInput from './components/TextInput';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {

  const category_group = [
      {
        name:"Great of All Time(GOAT)",
        primary_color:'#040404',
        secondery_color:'#ffffff' 
      },
      {
        name:"Fantastic",
        primary_color:'#070707',
        secondery_color:'#ffffff' 
      },
      {
        name:"Very GUD",
        primary_color:'#040404',
        secondery_color:'#ffffff' 
      },
      {
        name:"A Good Game",
        primary_color:'#070707',
        secondery_color:'#ffffff' 
      },
      {
        name:"Could be Better",
        primary_color:'#040404',
        secondery_color:'#ffffff' 
      },
      {
        name:"Dropped",
        primary_color:'#070707',
        secondery_color:'#ffffff' 
      }
  ]

  const [addingRKgames, setaddingRKgame] = useState([])

  const onaddingGametoCard = (addingRKgame) => {
  setaddingRKgame([...addingRKgames, addingRKgame])
  console.log(addingRKgame)
  }

  return (
    <div className="App">
      <Header></Header>
      <Banner ></Banner> 
      <Forms nameofprop={category_group.map(category_group => category_group.name)} onRankingGame={addingRKgame => onaddingGametoCard(addingRKgame)} />
      {category_group.map(category_group => 
      <Category 
      key={category_group.name} 
      name_title={category_group.name} 
      primary_color={category_group.primary_color} 
      secondery_color={category_group.secondery_color}
      addingRKgames={addingRKgames.filter(addingRKgame => addingRKgame.rank === category_group.name)} 
      />)}
      
      <Footer>aaa</Footer>
    </div>
  );
}

export default App;

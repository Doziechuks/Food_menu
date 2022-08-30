
import { useState, useEffect } from "react";
import Loading from "./components/loading";
import menu from "./components/data";
import FoodMenu from "./components/foodMenu";
import Category from "./components/category";

const myCategory = ['all', ...new Set(menu.map((myMenu) => { return myMenu.category}))];
function App() {
  const [loading, setLoading] = useState(true);
  const [myMenu, setMyMenu] = useState(menu);
  const [categories, setCategory] = useState(myCategory);
 useEffect(()=>{
  let timerId = setTimeout(()=>{setLoading(false)},4000)
  return ()=>{clearTimeout(timerId)};
 },[]);

const filterCategory = (category) => {
  if(category === 'all'){
    setMyMenu(menu);
    return;
  }
  let newCategory = menu.filter((menus) => menus.category === category);
  setMyMenu(newCategory);
}

 if(loading){
  return (
    <div className="loader-wrapper">
      <Loading />
    </div>
  );
 }
 return (
  <div className="wrapper">
    <section className="container">
      <div className="title-box">
        <h1 className="title">our menu</h1>
        <div className="underline"></div>
      </div>
      <Category filterCategory={filterCategory} categories={categories}/>
      <FoodMenu myMenu={myMenu} />
    </section>
  </div>
 );
 }


export default App;

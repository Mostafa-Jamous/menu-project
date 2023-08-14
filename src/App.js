import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./Data";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);

  const allCat = ["الكل",...new Set(items.map((item) => item.category))]
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  const filterBySearch = (word) => {
    if (word !== "") {
      
    
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };
  return (
    <div className="App">
      <NavBar filterBySearch={filterBySearch}/>
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCat={allCat}/>
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;

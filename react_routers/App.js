import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { NoMatch } from './components/NoMatch';
import './App.css';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='products' element={<Products />}>
          <Route path='featured' element={<FeaturedProducts />}></Route>
          <Route path='new' element={<NewProducts/>}></Route>
        </Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;

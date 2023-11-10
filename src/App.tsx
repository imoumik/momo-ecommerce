import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Navigation from './routes/Navigation';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import Authentication from './routes/Authentication';
import CartIcon from './components/CartIcon';

const App = () => (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path='shop' element={<Shop />} />
      <Route path='contact' element={<Contact />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='cart' element={<CartIcon />} />
    </Route>
  </Routes>
)

export default App;
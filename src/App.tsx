import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Navigation from './routes/Navigation';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import SignIn from './routes/SignIn';
import Cart from './routes/Cart';

const App = () => (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path='shop' element={<Shop />} />
      <Route path='contact' element={<Contact />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  </Routes>
)

export default App;
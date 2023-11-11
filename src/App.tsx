import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import Navigation from './routes/navigation/Navigation';
import Shop from './routes/shop/Shop';
import Contact from './routes/contact/Contact';
import Authentication from './routes/authentication/Authentication';
import Checkout from './routes/checkout/Checkout';

const App = () => (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path='shop/*' element={<Shop />} />
      <Route path='contact' element={<Contact />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='checkout' element={<Checkout />} />
    </Route>
  </Routes>
)

export default App;
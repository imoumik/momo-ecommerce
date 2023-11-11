import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Navigation from './routes/Navigation';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import Authentication from './routes/Authentication';
import Checkout from './routes/Checkout';

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
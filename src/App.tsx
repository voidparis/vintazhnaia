import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ProductDetail from './components/product/ProductDetail';
import AccountPage from './components/account/AccountPage';
import ProfessionalInfoPage from './components/account/ProfessionalInfoPage';
import ShippingAddressPage from './components/account/ShippingAddressPage';
import SocialConnectionsPage from './components/account/SocialConnectionsPage';
import ProfilePreferencesPage from './components/account/ProfilePreferencesPage';
import PaymentInfoPage from './components/account/PaymentInfoPage';
import CommunicationPreferencesPage from './components/account/CommunicationPreferencesPage';
import CatalogPage from './components/catalog/CatalogPage';
import CategoryPage from './components/catalog/CategoryPage';
import SalePage from './components/catalog/SalePage';
import AboutPage from './components/home/AboutPage';
import WatchesPage from './components/catalog/WatchesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId?" element={<ProductDetail />} />
        <Route path="/catalog" element={<CatalogPage />} />

        {/* Category Routes */}
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/category/furniture" element={<CategoryPage />} />
        <Route path="/category/jewelry" element={<CategoryPage />} />
        <Route path="/category/art" element={<CategoryPage />} />
        <Route path="/category/fashion" element={<CategoryPage />} />
        <Route path="/category/decor" element={<CategoryPage />} />
        <Route path="/category/lighting" element={<CategoryPage />} />
        <Route path="/category/watches" element={<WatchesPage />} />
        <Route path="/category/:categoryId/:subcategoryId" element={<CategoryPage />} />

        {/* Shopping Routes */}
        <Route path="/favorites" element={<CatalogPage />} />
        <Route path="/cart" element={<CatalogPage />} /> {/* Changed from ProductDetail to CatalogPage */}
        <Route path="/sale" element={<SalePage />} />
        <Route path="/shipping" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Account Routes */}
        <Route path="/account" element={<AccountPage />} />
        <Route path="/account/professional" element={<ProfessionalInfoPage />} />
        <Route path="/account/shipping" element={<ShippingAddressPage />} />
        <Route path="/account/social" element={<SocialConnectionsPage />} />
        <Route path="/account/profile" element={<ProfilePreferencesPage />} />
        <Route path="/account/payment" element={<PaymentInfoPage />} />
        <Route path="/account/communication" element={<CommunicationPreferencesPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

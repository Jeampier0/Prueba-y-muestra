import { ShoppingCart, ChefHat } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item => item.id === id ? { ...item, quantity } : item)
      );
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">Mesa Central</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-red-600 transition font-medium">Inicio</a>
              <a href="#menu" className="text-gray-700 hover:text-red-600 transition font-medium">Menú</a>
              <a href="#nosotros" className="text-gray-700 hover:text-red-600 transition font-medium">Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-red-600 transition font-medium">Contacto</a>
            </div>
            <button
              onClick={() => setShowCart(true)}
              className="relative p-2 text-gray-700 hover:text-red-600 transition"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <Hero />
      <MenuSection addToCart={addToCart} />
      <About />
      <Contact />

      <Cart
        items={cartItems}
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        updateQuantity={updateQuantity}
      />

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Mesa Central. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../App';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export default function Cart({ items, isOpen, onClose, updateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const removeItem = (id: number) => {
    updateQuantity(id, 0);
  };
  
  const clearCart = () => {
    items.forEach(item => updateQuantity(item.id, 0));
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Carrito</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center p-6 text-gray-500">
                <ShoppingBag className="h-12 w-12 mb-4" />
                <p>Tu carrito está vacío</p>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
                  >
                    <div className="flex gap-4">
                      {item.image && (
                        <div className="w-24 h-24 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-xs text-gray-600">{item.description}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-red-600 hover:bg-red-50 rounded transition flex-shrink-0"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="flex justify-between items-center mt-3">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 transition"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 py-1 text-sm font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 transition"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="font-bold text-red-600 text-sm">
                            S/ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="font-bold text-red-600 text-xl">S/ {total.toFixed(2)}</span>
              </div>

              {/* ✅ Botón de WhatsApp */}
              <button
                onClick={() => {
                  const numeroWhatsApp = '51984530905'; // sin el "+" y espacios
                  let mensaje = 'Hola, Buen dia. Hoy dia quiero comer:\n\n';

                  items.forEach((item) => {
                    mensaje += `${item.quantity} ${item.name}    S/ ${(item.price * item.quantity).toFixed(2)}\n\n`;
                  });

                  mensaje += `Total=                  *S/ ${total.toFixed(2)}*`;

                  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
                  window.open(url, '_blank');

                  onClose(); // Cierra el carrito
                }}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <span>Hacer Pedido por WhatsApp</span>
              </button>

              <button
                onClick={clearCart}
                className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Limpiar Carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
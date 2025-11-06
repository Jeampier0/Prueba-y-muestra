import React from 'react';
import { MenuItem } from '../App';

interface MenuSectionProps {
  addToCart: (item: MenuItem) => void;
}
const menuItems: MenuItem[] = [
  // Comida Criolla
  {
    id: 1,
    name: 'Lomo Saltado 🥩',
    description: 'Jugosos trozos de lomo salteado con cebolla, tomate, ají amarillo y papas fritas. Servido con arroz blanco. Un clásico criollo que conquista paladares.',
    price: 25.00,
    image: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Criolla'
  },
  {
    id: 2,
    name: 'Ají de Gallina 🍗',
    description: 'Cremoso guiso de pollo deshilachado en salsa de ají amarillo, leche y queso. Acompañado de arroz blanco, papa sancochada y aceitunas.',
    price: 22.00,
    image: 'https://images.pexels.com/photos/8753657/pexels-photo-8753657.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Criolla'
  },
  {
    id: 3,
    name: 'Seco de Res 🍖',
    description: 'Tierna carne de res cocida con cilantro, chicha de jora y especias. Servido con frijoles y arroz con choclo. Sabor tradicional del norte.',
    price: 24.00,
    image: 'https://images.pexels.com/photos/11772184/pexels-photo-11772184.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Criolla'
  },
  {
    id: 4,
    name: 'Tacu Tacu con Bistec 🍛',
    description: 'Delicioso tacu tacu de frijoles y arroz, acompañado de jugoso bistec a la plancha y salsa criolla. ¡Contundente y sabroso!',
    price: 23.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Criolla'
  },
  // Comida Marina
  {
    id: 5,
    name: 'Ceviche Mixto 🐟',
    description: 'Fresco pescado del día, camarones y conchas negras marinados en limón, con cebolla morada, ají limo y camote. ¡El sabor del mar!',
    price: 28.00,
    image: 'https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Marina'
  },
  {
    id: 6,
    name: 'Arroz con Mariscos 🦐',
    description: 'Exquisito arroz preparado con una variedad de mariscos frescos, pimientos, arvejas y el toque especial de la casa. Generoso y lleno de sabor.',
    price: 26.00,
    image: 'https://images.pexels.com/photos/8629142/pexels-photo-8629142.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Marina'
  },
  {
    id: 7,
    name: 'Chicharrón de Pescado 🐠',
    description: 'Crujientes trozos de pescado frito acompañados de yuca frita, salsa criolla y limón. ¡Irresistible!',
    price: 24.00,
    image: 'https://images.pexels.com/photos/8753645/pexels-photo-8753645.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Marina'
  },
  {
    id: 8,
    name: 'Sudado de Pescado 🍲',
    description: 'Pescado fresco cocido al vapor con tomate, cebolla, ají amarillo y un caldo aromático. Servido con arroz blanco y yuca.',
    price: 25.00,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Marina'
  },
  // Comida Oriental (Chifa)
  {
    id: 9,
    name: 'Arroz Chaufa Especial 🍜',
    description: 'Arroz frito al estilo chifa con pollo, cerdo, camarones, huevo, cebolla china y salsa de soya. ¡Una explosión de sabores!',
    price: 22.00,
    image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Oriental'
  },
  {
    id: 10,
    name: 'Tallarín Saltado 🍝',
    description: 'Fideos salteados con carne de res, pollo o mariscos, verduras frescas y salsa de soya. Fusión perfecta peruano-china.',
    price: 23.00,
    image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Oriental'
  },
  {
    id: 11,
    name: 'Wantán Frito 🥟',
    description: 'Crujientes wantanes rellenos de cerdo y camarones, servidos con salsa tamarindo. Perfectos para compartir o como entrada.',
    price: 18.00,
    image: 'https://images.pexels.com/photos/6646600/pexels-photo-6646600.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Oriental'
  },
  {
    id: 12,
    name: 'Pollo Chi Jau Kay 🍗',
    description: 'Pollo frito crocante bañado en salsa agridulce oriental. Servido con arroz chaufa. ¡El favorito de todos!',
    price: 24.00,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Oriental'
  }
];

function MenuSection({ addToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Todos');

  const categories = ['Todos', 'Criolla', 'Marina', 'Oriental'];
  
  const filteredItems = selectedCategory === 'Todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      {/* Hero con imagen */}
      <section
        id="menu"
        className="relative h-[50vh] mt-8 flex items-center justify-center bg-[url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center"
      >
        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Nuestro Menú
          </h2>
          <p className="text-xl drop-shadow-md">
            Comida Criolla 🍲 • Marina 🦐 • Oriental 🍜
          </p>
          <p className="text-lg mt-2 drop-shadow-md">
            Preparada con ingredientes frescos y el auténtico sabor peruano
          </p>
        </div>
      </section>

      {/* Filtros de Categorías */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'Criolla' && '🍲 '}
                {category === 'Marina' && '🦐 '}
                {category === 'Oriental' && '🍜 '}
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de tarjetas del menú */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{item.name}</h3>
                    </div>
                    <span className="text-2xl font-bold text-red-600">S/ {item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition"
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuSection;
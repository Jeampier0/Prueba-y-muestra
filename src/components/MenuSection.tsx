import { MenuItem } from '../App';

interface MenuSectionProps {
  addToCart: (item: MenuItem) => void;
}
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Pizza de Pollo a la Brasa 🔥',
    description: '🍕 FUSIÓN QUE ENAMORA Del 25 al 31 de julio, vive una edición limitada hecha con puro orgullo peruano Jugosa, con ese sabor ahumado y criollo que nos une en cada mordida',
    price: 12.99,
    image: 'https://www.dropbox.com/scl/fi/vqiqiz0aays4hhx478xhi/Instagram-3_11_2025-22_36_04.png?rlkey=pt2pt9h8qejafftcu6c81azdo&st=08bz94qx&dl=1',
    category: 'Clásicas'
  },
  {
    id: 2,
    name: 'Pan al ajo🥖',
    description: 'Crujiente por fuera, tierno por dentro 💚Impregnado de mantequilla dorada, ajo suave y hierbas frescas que despiertan el apetito desde el primer aroma. 🥖✨ pepinillos',
    price: 15.99,
    image: 'https://www.dropbox.com/scl/fi/2uooj9kmgpcvs53dnnzb5/Instagram-3_11_2025-22_36_39.png?rlkey=8pkut37tn8fpreoc2yix34037&st=d31q3sci&dl=1',
    category: 'Especiales'
  },
  {
    id: 3,
    name: 'Bruschetta al Pesto',
    description: 'Pan crujiente, el aroma inconfundible de la albahaca fresca y el toque irresistible de queso derretido',
    price: 14.99,
    image: 'https://www.dropbox.com/scl/fi/hhrdko868vdgf3n047a7h/Instagram-3_11_2025-22_51_06.png?rlkey=ronaatgv65qt8f8onpb7vxung&st=6l1bb8mv&dl=1',
    category: 'Especiales'
  },
  {
    id: 4,
    name: 'Tagliatelle al ragu de carrillera & Fettucine al afredo 💕',
    description: 'Nuestro dúo de pastas llego para conquistar tu paladar 🔥😍',
    price: 13.99,
    image: 'https://www.dropbox.com/scl/fi/xsq6lv5gom3l44g1r9ycl/Instagram-3_11_2025-22_37_09.png?rlkey=xl82v1dr9i2i1p3p80ivimw4t&st=au771ogt&dl=1',
    category: 'Pastas'
  },
  {
    id: 5,
    name: 'Calzone Dolce',
    description: 'Degusta lo más gustoso al paladar en cada bocado. ¡Perfecto para compartir! 😏👌🏻',
    price: 14.49,
    image: 'https://www.dropbox.com/scl/fi/6sj1lb9g3t4an0vo6w3r2/Instagram-3_11_2025-22_50_07.png?rlkey=7qfyg1oub35ozw8o3onhjiegm&st=jr8mwtqw&dl=1',
    category: 'Postres'
  },
  {
    id: 6,
    name: 'Pizza Tres Estaciones',
    description: 'Tres irresistibles combinaciones de ingredientes en una sola pizza, para que no tengas que elegir… ¡Solo disfrutar! 🤤🔥',
    price: 16.99,
    image: 'https://www.dropbox.com/scl/fi/znsxmz926q0lpim8oo4es/Instagram-3_11_2025-22_37_27.png?rlkey=6zresb6vvqe0v35dq3sl2xjsc&st=75fw6o0i&dl=1',
    category: 'Gourmet'
  }
];
function MenuSection({ addToCart }: MenuSectionProps) {
  return (
    <>
      {/* Hero con imagen */}
      <section
        id="inicio"
        className="relative h-[50vh] mt-8 flex items-center justify-center bg-[url('https://dl.dropboxusercontent.com/scl/fi/ajy5c3gvl39hr16gtlosx/GREEN.jpg?rlkey=fm74hi7fpmqyafqrbsgh8vqm7&st=boux2x0z')] bg-cover bg-top"
      >
        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Nuestro Menú
          </h2>
          <p className="text-xl drop-shadow-md">
            Pizzas artesanales preparadas con los mejores ingredientes italianos y peruanos
          </p>
        </div>
      </section>

      {/* Sección de tarjetas del menú */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
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
                    <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-2xl font-bold text-red-600">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
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

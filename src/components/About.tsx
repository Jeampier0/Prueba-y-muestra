import { Flame, Heart, Award } from 'lucide-react';

function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Sabores Auténticos del Perú
            </h2>
            <p className="text-lg text-gray-600">
              En Mesa Central te ofrecemos lo mejor de la gastronomía peruana.
              Nuestra misión es llevarte un viaje culinario por la costa, la sierra
              y la fusión oriental, todo en un solo lugar.
            </p>
            <p className="text-lg text-gray-600">
              Contamos con chefs especializados en cada tipo de cocina: criolla 
              tradicional, platos marinos frescos del día, y la mejor fusión chifa.
              Cada plato es preparado con dedicación y los ingredientes más frescos.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Flame className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sazón Casera
                </h3>
                <p className="text-gray-600">
                  Recetas tradicionales y secretos familiares pasados de generación en generación
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ingredientes Frescos
                </h3>
                <p className="text-gray-600">
                  Mariscos del día, carnes de primera y verduras frescas del mercado
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  3 Cocinas en Una
                </h3>
                <p className="text-gray-600">
                  Comida criolla, marina y oriental - la variedad que necesitas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
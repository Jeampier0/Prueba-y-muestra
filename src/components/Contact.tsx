import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    personas: '',
    comentarios: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, enviar a una API o servicio de email
    console.log('Datos de reserva:', formData);
    
    // Mostrar mensaje de confirmación
    alert('¡Gracias por tu reserva! Te contactaremos pronto.');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      fecha: '',
      personas: '',
      comentarios: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Encuéntranos
          </h2>
          <p className="text-xl text-gray-600">
            Estamos listos para atenderte con el mejor sabor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestras Ubicaciones</h3>
                <p className="text-gray-600">
                  📌 <strong>Local 1:</strong> Jirón Nepeña 148 - Nuevo Chimbote<br />
                  📌 <strong>Local 2:</strong> Plaza Santander - Chimbote
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfonos</h3>
                <p className="text-gray-600">
                  📞 938 107 077<br />
                  📞 929 300 157<br />
                  <span className="text-sm text-gray-500 mt-1 block">Llamadas y WhatsApp</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Síguenos</h3>
                <p className="text-gray-600">
                  📱 Instagram: <a href="https://instagram.com/mesacentral" className="text-red-600 hover:underline">@mesacentral</a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Horario de Atención</h3>
                <p className="text-gray-600">
                  🕐 Lunes - Viernes: 11:00 AM - 10:00 PM<br />
                  🕐 Sábado - Domingo: 12:00 PM - 11:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Haz tu Pedido o Reserva
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos para hacer tu pedido o reservar una mesa. ¡Te atenderemos con gusto!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu correo electrónico"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Tu teléfono"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="datetime-local"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <select
                name="personas"
                value={formData.personas}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Número de personas</option>
                <option value="1-2">1-2 personas</option>
                <option value="3-4">3-4 personas</option>
                <option value="5-6">5-6 personas</option>
                <option value="6+">Más de 6 personas</option>
              </select>
              <textarea
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                placeholder="¿Algún comentario especial o preferencia?"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

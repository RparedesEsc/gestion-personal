// index



    document.addEventListener('DOMContentLoaded', () => {
        if (window.location.pathname.includes('index.html')) {
          const solicitudForm = document.getElementById('solicitudForm');
          const ticketNumberElement = document.getElementById('ticketNumber');
      
          // Cargamos la "base de datos" de tickets desde localStorage
          const ticketsDatabase = JSON.parse(localStorage.getItem('ticketsDatabase')) || [];
      
          // Función para generar el ticket en base a la cantidad de elementos
          const generateTicketNumber = (tickets) => {
            return 'N° ' + (tickets.length + 1);

          };
      
          // Escucha el evento de submit del formulario
         // Escucha el evento de submit del formulario





         if (solicitudForm) {
    solicitudForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value.trim();
      const horas = document.getElementById('horas').value.trim();
      const region = document.getElementById('region').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
  
      // Validar que todos los campos tengan valores
      if (!nombre || !horas || !region || !correo || !telefono) {
        alert('Por favor, completa todos los campos.');
        return;
      }
  
      // Generar el siguiente número de ticket
      const ticketNumber = generateTicketNumber(ticketsDatabase);
  
      // Crear un nuevo objeto JSON con los datos del formulario
      const newRequest = {
        
        ticketNumber,
        nombre,
        horas,
        region,
        correo,
        telefono
      };
  
      console.log('Nueva solicitud creada:', newRequest);
      // Confirmar en consola que el objeto se creó correctamente
  
      // Guardar en la base de datos y localStorage
      ticketsDatabase.push(newRequest);
      localStorage.setItem('ticketsDatabase', JSON.stringify(ticketsDatabase));
      console.log('Solicitud guardada en localStorage:', newRequest);
  
      // Confirmación al usuario
    //   alert(`Solicitud registrada con el ticket: ${ticketNumber}`);
  
   
  
                // Limpiar formulario
               
                modal.style.display = 'none';
              solicitudForm.reset();
            });
          }
        }
      });
      
  
    // Lógica del modal (abrir/cerrar)
    const openModal = document.getElementById('open-modal');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const ticketNumberInput = document.getElementById('ticketNumber'); // Campo del número de ticket

     // Cargamos la "base de datos" de tickets desde localStorage
     const ticketsDatabase = JSON.parse(localStorage.getItem('ticketsDatabase')) || [];
      
     // Función para generar el ticket en base a la cantidad de elementos
     const generateTicketNumber = (tickets) => {
       return 'N° ' + (tickets.length + 1);

     };

   // Abrir modal y generar el número de ticket
  if (openModal && modal && closeModal) {
    openModal.addEventListener('click', () => {
      // Generar el número de ticket
      const newTicketNumber = generateTicketNumber(ticketsDatabase);

      // Mostrar el modal
      modal.style.display = 'flex';

      // Actualizar el campo de número de ticket
      ticketNumberInput.value = newTicketNumber;
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {

      modal.style.display = 'none';
    });
  }

  //index 2

  document.addEventListener('DOMContentLoaded', () => {
   
    // Verifica que estás en index2.html
    if (window.location.pathname.includes('index2.html')) {
      const solicitudesDiv = document.getElementById('solicitudes');
      const confirmForm = document.getElementById('confirmForm');
      const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
      const ticketSearchInput = document.getElementById('ticketSearch');
      const ticketList = document.getElementById('ticketList');
  
      // Recuperamos la base de datos de tickets
      const ticketsDatabase = JSON.parse(localStorage.getItem('ticketsDatabase')) || [];
  
    //   // --- (A) MOSTRAR TODOS LOS TICKETS EN UNA LISTA ---
      if (ticketList) {
        // Mostrar todos los tickets al cargar
        ticketsDatabase.forEach(ticket => {
          const ticketItem = document.createElement('li');
          ticketItem.textContent = `Ticket: ${ticket.ticketNumber}, Nombre: ${ticket.nombre}, Correo: ${ticket.correo},
          telefono:${ticket.telefono}` ;
          ticketList.appendChild(ticketItem);
        });
  
        // Filtro en vivo mientras se escribe
        if (ticketSearchInput) {
          ticketSearchInput.addEventListener('input', (e) => {
            const searchQuery = e.target.value.toLowerCase();
            
            // Filtramos
            const filteredTickets = ticketsDatabase.filter(ticket =>
              ticket.ticketNumber.toLowerCase().includes(searchQuery)
            );
  
            // Limpiamos la lista y mostramos resultados
            ticketList.innerHTML = '';
            filteredTickets.forEach(ticket => {
              const ticketItem = document.createElement('li');
              ticketItem.textContent = `Ticket: ${ticket.ticketNumber}, Nombre: ${ticket.nombre}, Correo: ${ticket.correo}`;
              ticketList.appendChild(ticketItem);
            });
          });
        }
      }
  
      // --- (B) MOSTRAR DATOS DE LA ULTIMA SOLICITUD  ---
      // Suponiendo que antes guardaste un 'solicitud' individual, no solo el 'ticketsDatabase'.
     // Recuperar la solicitud desde localStorage



     if (ticketsDatabase.length > 0) {
       const ultimaEntrada = ticketsDatabase[ticketsDatabase.length - 1]; // Último elemento
       console.log('Última entrada:', ultimaEntrada);
   
       // Mostrar la última entrada en el DOM
       const ultimaEntradaDiv = document.getElementById('ultimaEntrada');
       if (ultimaEntradaDiv) {
         ultimaEntradaDiv.innerHTML = `
           <p><strong>Número de Ticket:</strong> ${ultimaEntrada.ticketNumber}</p>
           <p><strong>Nombre:</strong> ${ultimaEntrada.nombre}</p>
           <p><strong>Correo:</strong> ${ultimaEntrada.correo}</p>
           <p><strong>Teléfono:</strong> ${ultimaEntrada.telefono}</p>
           <p><strong>Horas:</strong> ${ultimaEntrada.horas}</p>
           <p><strong>Región:</strong> ${ultimaEntrada.region}</p>
         `;
       }
     } else {
       console.log('No hay tickets registrados.');
     }
   };


      // --- (C) FORMULARIO DE CONFIRMACIÓN DE COSTO ---
      if (confirmForm) {
        confirmForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const costo = document.getElementById('costo').value;
  
          if (!costo) {
            alert("Por favor, ingresa el costo.");
            return;
          }
  
          // Muestra mensaje
          mensajeConfirmacion.innerHTML = `
            <p>La solicitud ha sido confirmada con un costo de <strong>$${costo}</strong>.</p>
          `;
          
          // Opcional: se podría eliminar la solicitud de localStorage
          // localStorage.removeItem('solicitud');
        });
      }
    }
  );
  
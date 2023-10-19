// Utiliza la función de flecha para mejorar la legibilidad y evitar problemas con el ámbito (scope)
window.addEventListener('load', () => {
    const realTimeActivityContainer = document.querySelector('.real-time-activity');
    // Función para inicializar la gráfica
    function initChart() {
        // Datos para el gráfico de barras
        var barData = {
            labels: [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre'],
            datasets: [{
                label: 'Ventas',
                backgroundColor: '#3498db',
                data: [5, 2, 20, 34, 37, 42, 48, 59, 58, 30]
            }]
        };

        // Configuración del gráfico de barras
        var barOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        };

        // Crear el gráfico de barras
        var barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
            type: 'bar',
            data: barData,
            options: barOptions
        });
    }

// Lista de nombres aleatorios
const nombresAleatorios = [
    'Juan', 'María', 'Pedro', 'Ana', 'Luis', 'Laura', 'Carlos', 'Sofía',
    'Alejandro', 'Isabel', 'Miguel', 'Gabriela', 'José', 'Patricia', 'Fernando', 'Rosa',
    'Javier', 'Carmen', 'Diego', 'Silvia', 'Andrés', 'Elena', 'Ricardo', 'Clara',
    'Francisco', 'Beatriz', 'Alberto', 'Lorena', 'Raúl', 'Daniela', 'Martín', 'Valeria',
    'Emilio', 'Lucía', 'Roberto', 'Natalia', 'Héctor', 'Carolina', 'Jorge', 'Julia',
    'Gustavo', 'Adriana', 'Fabián', 'Alicia', 'Oscar', 'Vanessa', 'Antonio', 'Verónica',
    'Guillermo', 'Marina', 'Towi', 'Alvarito', 'B11', 'Black', 'arcangel'
];

// Función para inicializar la actividad en tiempo real
function initRealTimeActivity() {
    const recentActivityList = document.querySelector('.real-time-activity');

    // Límite de mensajes
    const mensajeLimite = 10;

    // Función para agregar un nuevo mensaje
    function addRecentActivity(usuario, accion, timestamp) {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<p><strong>${usuario}</strong> ${accion} - ${timestamp}</p>`;
        recentActivityList.appendChild(listItem);

        // Verificar y reiniciar la lista después de 10 mensajes
        if (recentActivityList.childElementCount > mensajeLimite) {
            recentActivityList.innerHTML = ''; // Reiniciar la lista
        }
    }

    // Simulación de actividad reciente en tiempo real
    setInterval(() => {
        const usuarioAleatorio = nombresAleatorios[Math.floor(Math.random() * nombresAleatorios.length)];
        const actividad = {
            usuario: usuarioAleatorio,
            accion: 'realizó una acción',
            timestamp: new Date().toLocaleTimeString()
        };
        addRecentActivity(actividad.usuario, actividad.accion, actividad.timestamp);
    }, 5000); // Envía una actualización cada 5 segundos
}

// Inicializar la actividad en tiempo real después de un pequeño retraso
setTimeout(initRealTimeActivity, 500);

    // Inicializar la gráfica después de un pequeño retraso
    setTimeout(initChart, 500); // Puedes ajustar el tiempo de retraso según sea necesario

    // Mostrar la sección de personas en línea después de un pequeño retraso
    setTimeout(() => {
        var onlineUsersSection = document.querySelector('.online-users');
        if (onlineUsersSection) {
            onlineUsersSection.classList.add('show');
        }
    }, 500);
});

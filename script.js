document.addEventListener('DOMContentLoaded', () => {
    // Definición de la malla curricular con los requisitos
    const curriculumData = {
        1: [
            { id: 'mate', name: 'Matemáticas', prerequisites: [] },
            { id: 'algebra1', name: 'Álgebra 1', prerequisites: [] },
            { id: 'taller-ciudadana', name: 'Taller de Formación Ciudadana', prerequisites: [] },
            { id: 'taller-lenguaje', name: 'Taller de Lenguaje y Comunicación', prerequisites: [] },
            { id: 'intro-mineria', name: 'Introducción a la Minería', prerequisites: [] },
            { id: 'optativo1', name: 'Optativo 1', prerequisites: [] },
        ],
        2: [
            { id: 'calculo1', name: 'Cálculo 1', prerequisites: ['mate'] },
            { id: 'algebra2', name: 'Álgebra 2', prerequisites: ['algebra1'] },
            { id: 'intro-fisica', name: 'Introducción a la Física', prerequisites: [] },
            { id: 'diseno-ing', name: 'Diseño de Ingeniería', prerequisites: ['algebra1'] },
            { id: 'mineralogia', name: 'Mineralogía y Depósitos Minerales', prerequisites: [] },
            { id: 'optativo2', name: 'Optativo 2', prerequisites: [] },
        ],
        3: [
            { id: 'calculo2', name: 'Cálculo 2', prerequisites: ['calculo1', 'algebra1'] },
            { id: 'fisica1', name: 'Física 1', prerequisites: ['intro-fisica'] },
            { id: 'quimica', name: 'Química General', prerequisites: [] },
            { id: 'topicos-eco', name: 'Tópicos de Economía', prerequisites: ['mate'] },
            { id: 'min-petro', name: 'Mineralogía y Petrografía', prerequisites: ['mineralogia'] },
            { id: 'ingles1', name: 'Inglés 1', prerequisites: [] },
        ],
        4: [
            { id: 'calculo3', name: 'Cálculo 3', prerequisites: ['algebra2', 'calculo2'] },
            { id: 'fisica2', name: 'Física 2', prerequisites: ['calculo1', 'fisica1'] },
            { id: 'topografia', name: 'Topografía Minera', prerequisites: ['diseno-ing'] },
            { id: 'metodos-exp', name: 'Métodos de Explotación', prerequisites: ['mineralogia', 'topicos-eco'] },
            { id: 'geologia-est', name: 'Geología Estructural', prerequisites: ['mineralogia'] },
            { id: 'ingles2', name: 'Inglés 2', prerequisites: ['ingles1'] },
        ],
        5: [
            { id: 'ecuaciones', name: 'Ecuaciones Diferenciales', prerequisites: ['algebra2', 'calculo2'] },
            { id: 'programacion', name: 'Programación Aplicada a la Minería', prerequisites: ['algebra2'] },
            { id: 'resistencia', name: 'Resistencia de Materiales', prerequisites: ['fisica1'] },
            { id: 'perforacion', name: 'Perforación y Tronadura', prerequisites: ['geologia-est'] },
            { id: 'propiedad-minera', name: 'Propiedad Minera', prerequisites: ['topografia'] },
            { id: 'ingles3', name: 'Inglés 3', prerequisites: ['ingles2'] },
        ],
        6: [
            { id: 'estadistica', name: 'Estadística Aplicada', prerequisites: ['calculo3'] },
            { id: 'adm-empresas', name: 'Administración de Empresas', prerequisites: [] },
            { id: 'mecanica-fluidos', name: 'Mecánica de Fluidos', prerequisites: ['calculo1'] },
            { id: 'carguio-transporte', name: 'Carguío y Transporte', prerequisites: ['metodos-exp'] },
            { id: 'adm-control-perdidas', name: 'Administración del Control de Pérdidas', prerequisites: ['metodos-exp'] },
            { id: 'taller-liderazgo', name: 'Taller de Liderazgo y Trabajo en Equipo', prerequisites: ['taller-ciudadana'] },
        ],
        7: [
            { id: 'gestion-ambiental', name: 'Gestión Ambiental', prerequisites: ['estadistica'] },
            { id: 'inv-operativa', name: 'Investigación Operativa', prerequisites: ['estadistica'] },
            { id: 'control-ambiente', name: 'Control de Ambiente Minero', prerequisites: ['metodos-exp'] },
            { id: 'mecanica-rocas', name: 'Mecánica de Rocas', prerequisites: ['metodos-exp', 'resistencia'] },
            { id: 'geoestadistica', name: 'Geoestadística', prerequisites: ['estadistica'] },
            { id: 'ingles4', name: 'Inglés 4', prerequisites: ['ingles3'] },
        ],
        8: [
            { id: 'preparacion-eval', name: 'Preparación y Evaluación', prerequisites: ['topicos-eco', 'metodos-exp', 'gestion-ambiental'] },
            { id: 'ciencia-datos', name: 'Ciencia de Datos Aplicada a la Minería', prerequisites: ['inv-operativa'] },
            { id: 'excavaciones', name: 'Excavaciones Mineras', prerequisites: ['mecanica-rocas'] },
            { id: 'conminucion', name: 'Conminución y Procesos Metalúrgicos', prerequisites: [] },
            { id: 'antropologia', name: 'Antropología Aplicada a la Minería', prerequisites: [] },
            { id: 'electivo1', name: 'Electivo 1', prerequisites: [] },
        ],
        9: [
            { id: 'planif-cielo-abierto', name: 'Planificación y Diseño en Minería Cielo Abierto', prerequisites: ['preparacion-eval', 'conminucion'] },
            { id: 'planif-subterranea', name: 'Planificación y Diseño en Minería Subterránea', prerequisites: ['preparacion-eval', 'conminucion'] },
            { id: 'metod-innovacion', name: 'Metodología de Innovación', prerequisites: [] },
            { id: 'gestion-proyectos', name: 'Gestión de Proyectos Mineros', prerequisites: ['adm-control-perdidas', 'inv-operativa'] },
            { id: 'electivo2', name: 'Electivo 2', prerequisites: [] },
            { id: 'electivo3', name: 'Electivo 3', prerequisites: [] },
        ],
        10: [
            { id: 'tesis', name: 'Trabajo de Titulación', prerequisites: [
                'ecuaciones', 'programacion', 'resistencia', 'perforacion', 'propiedad-minera', 'ingles3', 
                'estadistica', 'adm-empresas', 'mecanica-fluidos', 'carguio-transporte', 
                'adm-control-perdidas', 'taller-liderazgo', 'gestion-ambiental', 'inv-operativa', 
                'control-ambiente', 'mecanica-rocas', 'geoestadistica', 'ingles4', 
                'preparacion-eval', 'ciencia-datos', 'excavaciones', 'conminucion', 
                'antropologia', 'electivo1'
            ]},
        ]
    };

    const curriculumContainer = document.querySelector('.curriculum-container');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeButton = document.querySelector('.close-button');

    // Función para obtener los ramos aprobados del almacenamiento local
    const getApprovedCourses = () => {
        const approved = localStorage.getItem('approvedCourses');
        return approved ? JSON.parse(approved) : [];
    };

    // Función para guardar los ramos aprobados en el almacenamiento local
    const saveApprovedCourses = (approved) => {
        localStorage.setItem('approvedCourses', JSON.stringify(approved));
    };

    let approvedCourses = getApprovedCourses();

    // Función para renderizar toda la malla curricular
    const renderCurriculum = () => {
        curriculumContainer.innerHTML = '';
        const allCourses = Object.values(curriculumData).flat();

        for (const semester in curriculumData) {
            const semesterElement = document.createElement('div');
            semesterElement.classList.add('semester');
            
            const semesterTitle = document.createElement('h2');
            semesterTitle.classList.add('semester-title');
            semesterTitle.textContent = `Semestre ${semester}`;
            
            const courseList = document.createElement('ul');
            courseList.classList.add('course-list');

            curriculumData[semester].forEach(course => {
                const courseCard = document.createElement('li');
                courseCard.classList.add('course-card');
                courseCard.dataset.id = course.id;
                
                const courseTitle = document.createElement('h3');
                courseTitle.textContent = course.name;

                courseCard.appendChild(courseTitle);
                courseList.appendChild(courseCard);

                // Aplicar estado inicial (aprobado o bloqueado)
                if (approvedCourses.includes(course.id)) {
                    courseCard.classList.add('approved');
                } else if (!arePrerequisitesMet(course.prerequisites)) {
                    courseCard.classList.add('locked');
                }
            });
            
            semesterElement.appendChild(semesterTitle);
            semesterElement.appendChild(courseList);
            curriculumContainer.appendChild(semesterElement);
        }
    };

    // Función para verificar si los requisitos de un ramo están cumplidos
    const arePrerequisitesMet = (prerequisites) => {
        if (!prerequisites || prerequisites.length === 0) {
            return true;
        }
        return prerequisites.every(prereqId => approvedCourses.includes(prereqId));
    };

    // Función para mostrar el modal con un mensaje
    const showModal = (message) => {
        modalMessage.textContent = message;
        modal.style.display = 'flex';
    };

    // Función para cerrar el modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Manejar el clic en un ramo
    curriculumContainer.addEventListener('click', (event) => {
        const courseCard = event.target.closest('.course-card');
        if (!courseCard) return;

        const courseId = courseCard.dataset.id;
        const course = Object.values(curriculumData).flat().find(c => c.id === courseId);
        
        if (courseCard.classList.contains('approved')) {
            // Si el ramo ya está aprobado, lo desaprobamos
            const index = approvedCourses.indexOf(courseId);
            if (index > -1) {
                approvedCourses.splice(index, 1);
            }
            saveApprovedCourses(approvedCourses);
        } else {
            // Si no está aprobado, verificamos los requisitos
            const prerequisitesMet = arePrerequisitesMet(course.prerequisites);
            if (prerequisitesMet) {
                approvedCourses.push(courseId);
                saveApprovedCourses(approvedCourses);
            } else {
                const unapprovedPrereqs = course.prerequisites.filter(prereqId => !approvedCourses.includes(prereqId));
                const prereqNames = unapprovedPrereqs.map(id => Object.values(curriculumData).flat().find(c => c.id === id).name);
                showModal(`No puedes aprobar "${course.name}" porque faltan los siguientes requisitos: ${prereqNames.join(', ')}.`);
            }
        }
        
        // Volver a renderizar la malla para actualizar los estados
        renderCurriculum();
    });

    // Cierre del modal
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Renderizar la malla al cargar la página
    renderCurriculum();
});

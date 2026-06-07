
const dataLanguage = {
    es: {
        // Nav
        "nav-home": "Inicio",
        "nav-conf": "Conferencias",
        "nav-glos": "Glosario",
        "nav-eth": "Ética",
        "lang-btn": "English",
        
        // Hero
        "hero-title": "Memorias del Evento Colombia 5.0",
        "hero-subtitle": "Innovación, Inteligencia Artificial y Sistemas Visuales Avanzados en la Industria Tecnológica Profesional.",
        "hero-btn": "Ver Conferencias",
        
        // Secciones títulos
        "title-conferencias": "Conferencias Analizadas",
        "title-glosario": "Glosario Técnico de Términos",
        "title-etica": "Reflexión Ética y Conclusión",
        
        // Conferencia 1
        "lbl-c1-speaker": "Conferencistas:",
        "c1-title": "Desarrollo de 'FIFA Rivals' y la Revolución de los Agentes de IA en Videojuegos",
        "c1-p1": "En este espacio analizamos los puntos clave de la conferencia de Bacon Games. El desarrollo de 'FIFA Rivals' fue un reto de desarrollo bastante fuerte: armar un juego global en solo 10 meses. El problema principal del equipo era cómo sacar actualizaciones semanales, traducir a más de 10 idiomas y generar miles de recursos visuales sin colapsar. Para solucionarlo, explicaron cómo implementaron una arquitectura con agentes de IA, que básicamente sirven como un multiplicador de la capacidad de trabajo en el pipeline de desarrollo.",
        "c1-p2": "El uso de la IA se enfocó en automatizar tareas repetitivas de diseño y escalabilidad. Con herramientas automatizadas para quitar fondos y mejorar la resolución de imágenes (upscale), el equipo procesó miles de cartas de jugadores en tiempo récord. Lo que antes tomaba semanas de trabajo manual, pasó a resolverse en horas. Esto nos demuestra que optimizar el flujo de trabajo con IA permite mantener una calidad visual de nivel internacional sin quemar al equipo de desarrollo.",
        "c1-p3": "Como aprendices de software, lo más interesante fue ver cómo usaron sistemas como Google Gemini para automatizar la documentación de las APIs y agilizar el código del backend. Estos asistentes de programación optimizaron la localización del software y mejoraron las pruebas de QA (control de calidad). Al final, la lección de este evento es clara: integrar IA en el ciclo de vida del software ya no es una opción, sino una necesidad para competir en el mercado de la industria 5.0.",
        "kw-ai": "Agentes de IA", "kw-sc": "Escalabilidad", "kw-auto": "Automatización",

        // Conferencia 2
        "lbl-c2-speaker": "Conferencista:",
        "c2-title": "Game UI Systems: De pantallas bonitas a interfaces que funcionan",
        "c2-p1": "Esta charla nos cambió la perspectiva sobre el diseño frontend e interfaces. El expositor nos explicó que diseñar UI no es solo hacer pantallas sueltas que se vean bonitas, sino construir un sistema escalable y lógico. En el taller vimos las 5 fases clave que estructuran un sistema de UI profesional:",
        "f1": "El ADN visual del proyecto: colores, fuentes y la jerarquía que guía al usuario.",
        "f2": "Bloques de código y diseño reutilizables, como botones, inputs y contenedores.",
        "f3": "Cómo responde la interfaz visualmente según la lógica del juego (Normal, Alerta, Crítico, Recompensa).",
        "f4": "Estructuras repetibles que organizan las pantallas para que la navegación sea coherente.",
        "f5": "La vista final ya unificada, modular y limpia de código redundante.",
        "c2-p2": "Además, aprendimos técnicas clave en Figma que nos sirven mucho para maquetar, como el uso de Auto Layout para hacer diseños adaptables y Variants para gestionar los estados del componente (hover, activo, deshabilitado). Por último, nos enseñó el 'Test de los 3 Segundos' para evaluar el HUD: en solo 3 segundos el usuario debe entender qué está pasando, cuántos recursos tiene y si hay algún peligro en pantalla. Una gran lección de usabilidad aplicada.",
        
        // Tabla encabezados
        "th-eng": "Término (Inglés)", "th-esp": "Traducción (Español)", "th-def": "Definición Académica",

        // Ética
        "eth-sub1": "Ética en la Tecnología Empresarial",
        "eth-p1": "Para nosotros como futuros desarrolladores, la ética no es teoría, es un requisito clave para que un proyecto de software sea sostenible. En casos como el de Bacon Games, esto se conecta directo con el manejo de datos y la privacidad. Al construir o entrenar agentes de IA, nuestra responsabilidad técnica nos exige proteger la información de los usuarios y evitar sesgos algorítmicos que afecten a la comunidad, garantizando transparencia en el backend.",
        "eth-sub2": "El Factor Humano ante la Automatización",
        "eth-p2": "Respecto a la automatización de procesos y el empleo, el diseño ético nos enseña que la IA debe ser un soporte para potenciar nuestras capacidades, no para reemplazar el análisis humano. En 'FIFA Rivals', automatizar la optimización gráfica y el procesamiento de assets liberó a los diseñadores de tareas repetitivas para enfocarse en la lógica creativa de alto valor. El verdadero reto profesional está en aprender a trabajar de forma colaborativa y simbiótica con estas tecnologías emergentes.",
        "eth-sub3": "Responsabilidad Profesional e Innovación con IA",
        "eth-p3": "Finalmente, estructurar un sistema visual modular en UI (como lo expuesto por Teravision Games) o desplegar software a gran escala implica cuidar la experiencia del usuario y su salud cognitiva. Las interfaces controlan cómo las personas interactúan con nuestros sistemas lógicos. Como aprendices del SENA, nuestro compromiso profesional nos obliga a poner la calidad, la accesibilidad limpia y la transparencia por encima de la velocidad de entrega, logrando un equilibrio real entre la innovación del software y el impacto social."
    },
    en: {
        // Nav
        "nav-home": "Home",
        "nav-conf": "Conferences",
        "nav-glos": "Glossary",
        "nav-eth": "Ethics",
        "lang-btn": "Español",
        
        // Hero
        "hero-title": "Colombia 5.0 Event Proceedings",
        "hero-subtitle": "Innovation, Artificial Intelligence, and Advanced Visual Systems in the Professional Tech Industry.",
        "hero-btn": "View Conferences",
        
        // Sections titles
        "title-conferencias": "Analyzed Conferences",
        "title-glosario": "Technical Glossary of Terms",
        "title-etica": "Ethical Reflection & Conclusion",
        
        // Conferencia 1
        "lbl-c1-speaker": "Speakers:",
        "c1-title": "Development of 'FIFA Rivals' and the AI Agents Revolution in Video Games",
        "c1-p1": "In this section, we analyze the key takeaways from the Bacon Games lecture. Developing 'FIFA Rivals' was a significant engineering challenge: building a global title in just 10 months. The team's main bottleneck was delivering weekly updates, localizing into over 10 languages, and generating thousands of visual assets without system collapse. To solve this, they implemented an AI agent architecture, which basically serves as a workload multiplier in the development pipeline.",
        "c1-p2": "The use of AI focused on automating repetitive design and scalability tasks. Using automated tools for background removal and image upscaling, the team processed thousands of player cards in record time. Workflows that previously took weeks of manual effort were reduced to hours. This proves that optimizing workflows with AI maintains world-class visual quality without burning out the development team.",
        "c1-p3": "As software students, the most interesting highlight was seeing how they leveraged cognitive systems like Google Gemini to automate API documentation and streamline backend code. These programming assistants optimized software localization and enhanced QA testing. Ultimately, the lesson from this event is clear: integrating AI into the software development life cycle is no longer optional, but a necessity to compete in the Industry 5.0 market.",
        "kw-ai": "AI Agents", "kw-sc": "Scalability", "kw-auto": "Automation",

        // Conferencia 2
        "lbl-c2-speaker": "Speaker:",
        "c2-title": "Game UI Systems: From pretty screens to functional interfaces",
        "c2-p1": "This workshop shifted our perspective on frontend design and interfaces. The speaker explained that UI design is not about creating standalone, isolated screens just for aesthetics, but about building a scalable and logical system. Throughout the workshop, we explored the 5 critical phases that structure a professional UI system:",
        "f1": "The project's visual DNA: color palettes, typography, and the hierarchy that guides the user.",
        "f2": "Reusable design and code building blocks, such as buttons, inputs, and layout containers.",
        "f3": "How the interface visually responds according to gameplay logic (Normal, Warning, Critical, Reward).",
        "f4": "Repeatable logical structures that organize screens to ensure a coherent user journey.",
        "f5": "The final assembled view, which is modular, consistent, and free of technical redundancy.",
        "c2-p2": "Furthermore, we learned key Figma techniques that are incredibly useful for layout building, such as Auto Layout for responsive structures and Variants to handle component states (hover, active, disabled). Finally, he introduced 'The 3-Second Test' to evaluate the HUD: within 3 seconds, a user must understand what is happening, track their resource levels, and identify any on-screen threats. A massive lesson in applied usability.",
        
        // Table headers
        "th-eng": "Term (English)", "th-esp": "Translation (Spanish)", "th-def": "Academic Definition",

        // Ethics
        "eth-sub1": "Ethics in Business Technology",
        "eth-p1": "For us as future software developers, ethics is not just theory; it is a fundamental requirement for software sustainability. In cases like Bacon Games, this links directly to data handling and privacy. When building or training AI agents, our engineering responsibility demands that we safeguard user data and eliminate algorithmic biases that could impact communities, ensuring transparency across the backend logic.",
        "eth-sub2": "The Human Factor Facing Automation",
        "eth-p2": "Regarding process automation and workforce impact, ethical design teaches us that AI should serve as a corporate support tool to scale our capabilities, rather than a total replacement for human analytical thought. In 'FIFA Rivals', automating graphic optimization and asset processing freed designers from repetitive tasks, allowing them to focus on high-value creative logic. The real professional milestone lies in learning to work symbiotically with these emerging technologies.",
        "eth-sub3": "Professional Responsibility and AI Innovation",
        "eth-p3": "Finally, structuring a modular UI visual system (like the ones explained by Teravision Games) or deploying software at a global scale means safeguarding the user's cognitive health. Interfaces govern how humans interact with our logical systems. As SENA students, our professional commitment obliges us to prioritize technical quality, clean accessibility, and algorithmic transparency over fast delivery speeds, striking a true balance between software innovation and social impact."
    }
};

// Variable de estado para controlar el idioma activo
let currentLang = "es";

document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("lang-btn");

    langBtn.addEventListener("click", () => {
        // Intercambiar estado de idioma
        currentLang = currentLang === "es" ? "en" : "es";
        
        // 1. Traducir elementos simples con IDs correspondientes
        Object.keys(dataLanguage[currentLang]).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = dataLanguage[currentLang][id];
            }
        });

        // 2. Traducir celdas dinámicas de la tabla del Glosario
        const definitionCells = document.querySelectorAll(".def-text");
        definitionCells.forEach(cell => {
            const textToPut = cell.getAttribute(`data-${currentLang}`);
            if (textToPut) {
                cell.textContent = textToPut;
            }
        });

        console.log(`Idioma cambiado a: ${currentLang.toUpperCase()}`);
    });
});
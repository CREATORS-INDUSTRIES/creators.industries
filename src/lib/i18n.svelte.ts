import { getContext, setContext } from 'svelte';

type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
    en: {
        'nav.english': 'english',
        'nav.spanish': 'spanish',
        'hero.title': 'CREATORS',
        'hero.subtitle': "BUILDING AUTONOMOUS SYSTEMS",
        'hero.description': 'CREAT0RS, EXPERTS IN SYSTEMS ARCHITECTURE, AI INTEGRATION AND PROTOTYPING.',
        'section.services.title': 'MISSION',
        'section.mission.text': 'WE DEVELOP AUTONOMOUS SYSTEMS DESIGNED FOR THE EDGE, LEVERAGING HIGH-MOBILITY PLATFORMS AND MULTIMODAL ARCHITECTURES. OUR SOFTWARE STACK ENABLES REAL-TIME UNDERSTANDING IN OPEN ENVIRONMENTS. WE CREATE SYSTEMS CAPABLE OF OPERATING WITH TOTAL AUTONOMY AND RESILIENCE.',
        'section.services.01': 'DRONE DETECTION',
        'section.services.02': 'TACTICAL AI',
        'section.services.03': 'EDGE SYSTEMS',
        'section.products.title': 'OPERATIONAL LOGS',
        'section.products.subtitle': 'VIGIL',
        'section.products.description': 'PERSISTENT TRACKING AND AUTONOMOUS DETECTION. OUR SYSTEMS PROVIDE REAL-TIME ANALYTICS IN COMPLEX ENVIRONMENTS.',
        'section.process.title': 'PROCESS',
        'section.process.01.title': 'FIRST CONTACT',
        'section.process.01.desc': "LET'S SYNC. TELL US ABOUT YOUR VISION AND COMPANY.",
        'section.process.02.title': 'THE PROPOSAL',
        'section.process.02.desc': "WE DEFINE SCOPE AND BUDGET. CLOSING THE DEAL.",
        'section.process.03.title': 'EXECUTION',
        'section.process.03.desc': "WE BUILD THE SOFTWARE THAT MATTERS TO YOUR COMPANY.",
        'section.footer.email': 'syn@creators.industries',
        'about.title': 'Our mission',
        'about.description1': "We build systems that think, decide, and act independently.\nLocal, resilient and natively intelligent.",
        'about.value1.title': 'SYSTEMS ARCHITECTURE',
        'about.value1.desc': 'Deep expertise in designing distributed systems that operate at the edge. We build resilient architectures capable of handling real-time constraints and uncertain environments without centralized control.',
        'about.value2.title': 'ARTIFICIAL VISION',
        'about.value2.desc': 'Specialized in computer vision systems that enable autonomous perception. Our visual understanding pipelines process complex scenes in real-time, powering detection, tracking, and decision-making.',
        'about.value3.title': 'EDGE INTELLIGENCE',
        'about.value3.desc': 'We leverage multimodal sensors and onboard AI to create systems that think independently. Low latency, high autonomy, total reliability—even when connectivity fails.'
    },
    es: {
        'nav.english': 'inglés',
        'nav.spanish': 'español',
        'hero.title': 'CREATORS',
        'hero.subtitle': "CONSTRUYENDO SISTEMAS AUTÓNOMOS",
        'hero.description': 'CREAT0RS, EXPERTOS EN ARQUITECTURA DE SISTEMAS, INTEGRACIÓN DE IA Y PROTOTIPADO.',
        'section.services.title': 'MISIÓN',
        'section.mission.text': 'DESARROLLAMOS SISTEMAS AUTÓNOMOS DISEÑADOS PARA EL "EDGE", APROVECHANDO PLATAFORMAS DE ALTA MOVILIDAD Y ARQUITECTURAS MULTIMODALES. NUESTRO STACK DE SOFTWARE PERMITE EL ENTENDIMIENTO EN TIEMPO REAL EN ENTORNOS ABIERTOS. CREAMOS SISTEMAS CAPACES DE OPERAR CON TOTAL AUTONOMÍA Y RESILIENCIA.',
        'section.services.01': 'DETECCIÓN DE DRONES',
        'section.services.02': 'IA TÁCTICA',
        'section.services.03': 'SISTEMAS EDGE',
        'section.products.title': 'REGISTROS OPERATIVOS',
        'section.products.subtitle': 'VIGIL',
        'section.products.description': 'SEGUIMIENTO PERSISTENTE Y DETECCIÓN AUTÓNOMA. NUESTROS SISTEMAS PROPORCIONAN ANALÍTICA EN TIEMPO REAL EN ENTORNOS COMPLEJOS.',
        'section.process.title': 'PROCESO',
        'section.process.01.title': 'PRIMER CONTACTO',
        'section.process.01.desc': "SINCRONICEMOS. CUÉNTANOS SOBRE TU VISIÓN Y EMPRESA.",
        'section.process.02.title': 'LA PROPUESTA',
        'section.process.02.desc': "DEFINIMOS ALCANCE Y PRESUPUESTO. CERRAMOS EL ACUERDO.",
        'section.process.03.title': 'EJECUCIÓN',
        'section.process.03.desc': "CONSTRUIMOS EL SOFTWARE QUE LE IMPORTA A TU EMPRESA.",
        'section.footer.email': 'syn@creators.industries',
        'about.title': 'SISTEMAS AUTÓNOMOS PARA EL EDGE',
        'about.description1': "CREATORS was founded to build autonomy properly.\n\nWe are engineers focused on designing systems that think, decide, and act independently in the physical world.\n\nWe believe intelligence must be localized, resilient, and structurally integrated into the systems it powers.\n\nAutonomy is not a feature.\nIt is a design principle.",
        'about.value1.title': 'ARQUITECTURA DE SISTEMAS',
        'about.value1.desc': 'Profunda experiencia en diseño de sistemas distribuidos que operan en el edge. Construimos arquitecturas resilientes capaces de manejar restricciones de tiempo real y entornos inciertos sin control centralizado.',
        'about.value2.title': 'VISIÓN ARTIFICIAL',
        'about.value2.desc': 'Especializados en sistemas de visión por computadora que permiten percepción autónoma. Nuestros pipelines de comprensión visual procesan escenas complejas en tiempo real, impulsando detección, rastreo y toma de decisiones.',
        'about.value3.title': 'INTELIGENCIA EN EL EDGE',
        'about.value3.desc': 'Aprovechamos sensores multimodales e IA embarcada para crear sistemas que piensan de manera independiente. Baja latencia, alta autonomía, confiabilidad total—incluso cuando la conectividad falla.'
    }
};

class I18nManager {
    currentLang = $state('en');

    t(key: string) {
        return translations[this.currentLang][key] || key;
    }

    setLang(lang: string) {
        if (translations[lang]) {
            this.currentLang = lang;
        }
    }
}

const I18N_KEY = Symbol('i18n');

export function setI18n() {
    return setContext(I18N_KEY, new I18nManager());
}

export function getI18n() {
    return getContext<I18nManager>(I18N_KEY);
}

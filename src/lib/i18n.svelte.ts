import { getContext, setContext } from 'svelte';

type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
    en: {
        'nav.english': 'english',
        'nav.spanish': 'spanish',
        'hero.title': 'CREATORS',
        'hero.subtitle': "DEVELOPING AUTONOMOUS SYSTEMS",
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
        'section.footer.email': 'syn@creators.industries'
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
        'section.footer.email': 'syn@creators.industries'
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

import { getContext, setContext } from 'svelte';

type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
    en: {
        'nav.english': 'english',
        'nav.spanish': 'spanish',
        'hero.title': 'CREATORS',
        'hero.subtitle': 'SOFTWARE THAT MATTERS TO YOUR REVENUE.',
        'hero.description': 'A COLLECTIVE OF CREAT0RS, EXPERTS IN SYSTEMS ARCHITECTURE, AI INTEGRATION AND PROTOTYPING.',
        'section.services.title': 'AREAS',
        'section.services.01': 'SOFTWARE DEVELOPMENT',
        'section.services.02': 'AI INTEGRATION',
        'section.services.03': 'PROCESS AUTOMATION',
        'section.process.title': 'PROCESS',
        'section.process.01.title': 'FIRST CONTACT',
        'section.process.01.desc': "LET'S SYNC. TELL US ABOUT YOUR VISION AND COMPANY.",
        'section.process.02.title': 'THE PROPOSAL',
        'section.process.02.desc': "WE DEFINE SCOPE AND BUDGET. CLOSING THE DEAL.",
        'section.process.03.title': 'EXECUTION',
        'section.process.03.desc': "WE BUILD THE SOFTWARE THAT MATTERS TO YOUR COMPANY.",
        'section.footer.cta.1': 'START A',
        'section.footer.cta.2': 'PROJECT',
        'section.footer.email': 'syn@thecreat0rs.org'
    },
    es: {
        'nav.english': 'inglés',
        'nav.spanish': 'español',
        'hero.title': 'CREATORS',
        'hero.subtitle': 'CONSTRUYENDO SOFTWARE QUE LE IMPORTA A TUS MÉTRICAS.',
        'hero.description': 'UN COLECTIVO DE CREAT0RS, EXPERTOS EN ARQUITECTURA DE SISTEMAS, INTEGRACIÓN DE IA Y PROTOTIPADO.',
        'section.services.title': 'ÁREAS',
        'section.services.01': 'DESARROLLO DE SOFTWARE',
        'section.services.02': 'INTEGRACIÓN DE IA',
        'section.services.03': 'AUTOMATIZACIÓN DE PROCESOS',
        'section.process.title': 'PROCESO',
        'section.process.01.title': 'PRIMER CONTACTO',
        'section.process.01.desc': "SINCRONICEMOS. CUÉNTANOS SOBRE TU VISIÓN Y EMPRESA.",
        'section.process.02.title': 'LA PROPUESTA',
        'section.process.02.desc': "DEFINIMOS ALCANCE Y PRESUPUESTO. CERRAMOS EL ACUERDO.",
        'section.process.03.title': 'EJECUCIÓN',
        'section.process.03.desc': "CONSTRUIMOS EL SOFTWARE QUE LE IMPORTA A TU EMPRESA.",
        'section.footer.cta.1': 'EMPIEZA UN',
        'section.footer.cta.2': 'PROYECTO',
        'section.footer.email': 'syn@thecreat0rs.org'
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

import { useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { 
  Droplets, 
  Waves, 
  Factory, 
  Home, 
  Car, 
  Filter, 
  Wind, 
  Settings, 
  HelpCircle ,
} from "lucide-react";
import Experience from './Experience';
import Contact from './Contact';

export default function Services() {
  const { t } = useTranslation();
  const location = useLocation().pathname;

  const services = [
    {
      icon: <Droplets className="w-6 h-6 text-cyan-300" />,
      title: t('services.items.ro.title'),
      desc: t('services.items.ro.desc'),
      points: t('services.items.ro.points', { returnObjects: true }),
    },
    {
      icon: <Waves className="w-6 h-6 text-cyan-300" />,  
      title: t('services.items.edi.title'),
      desc: t('services.items.edi.desc'),
      points: t('services.items.edi.points', { returnObjects: true }),
    },
    {
      icon: <Factory className="w-6 h-6 text-cyan-300" />,
      title: t('services.items.wastewater.title'),
      desc: t('services.items.wastewater.desc'),
      points: t('services.items.wastewater.points', { returnObjects: true }),
    },
    {
      icon: <Home className="w-6 h-6 text-cyan-300" />,
      title: t('services.items.stp.title'),
      desc: t('services.items.stp.desc'),
      points: t('services.items.stp.points', { returnObjects: true }),
    },
    {
      icon: <Car className="w-6 h-6 text-cyan-300" />,
      title: t('services.items.carwash.title'),
      desc: t('services.items.carwash.desc'),
      points: t('services.items.carwash.points', { returnObjects: true }),
    },
    {
      icon: <Filter className="w-6 h-6 text-cyan-300" />,
      title: t('services.items.filtration.title'),
      desc: t('services.items.filtration.desc'),
      points: t('services.items.filtration.points', { returnObjects: true }),
    },
    {
      icon: <Wind className="w-6 h-6 text-cyan-300" />,
      title: t('services.items.odor.title'),
      desc: t('services.items.odor.desc'),
      points: t('services.items.odor.points', { returnObjects: true }),
    },
    {
      icon: <Settings className="w-6 h-6 text-cyan-300" />,
      title: t('services.items.om.title'),
      desc: t('services.items.om.desc'),
      points: t('services.items.om.points', { returnObjects: true }),
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-cyan-300" />,
      title: t('services.items.consultation.title'),
      desc: t('services.items.consultation.desc'),
      points: t('services.items.consultation.points', { returnObjects: true }),
    },
  ];

  const steps = [
    {
      title: t('services.steps.design.title'),
      desc: t('services.steps.design.desc'),
      icon: <Droplets className="h-5 w-5 text-cyan-200" />, // Using generic Droplets for design
    },
    {
      title: t('services.steps.build.title'),
      desc: t('services.steps.build.desc'),
      icon: <Factory className="h-5 w-5 text-cyan-200" />,
    },
    {
      title: t('services.steps.commission.title'),
      desc: t('services.steps.commission.desc'),
      icon: <Settings className="h-5 w-5 text-cyan-200" />,
    },
    {
      title: t('services.steps.support.title'),
      desc: t('services.steps.support.desc'),
      icon: <HelpCircle className="h-5 w-5 text-cyan-200" />,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8 my-28">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">{t('services.badge')}</span>
      </div>
      
      <h2 className="mt-2 text-4xl sm:text-5xl font-semibold text-white">
        {t('services.title_main')} <span className="text-cyan-400">{t('services.title_highlight')}</span>
      </h2>
      <p className="mt-4 text-cyan-100/80">
        {t('services.description')}
      </p>

      <div className="mt-10 grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border-b border-cyan-500/30 bg-cyan-/5 px-2 py-4 lg:p-6 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-white/10">
                {s.icon}
              </span>
              <div>
                <div className="text-white font-semibold">{s.title}</div>
              </div>
            </div>
            <p className="mt-3 text-cyan-100/60 text-sm">{s.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2 text-cyan-100/80 text-sm">
              {Array.isArray(s.points) && s.points.map((p, idx) => (
    <li key={idx}>
                  <span className='bg-cyan-500/20 text-xs p-0.5 px-2 text-cyan-300 rounded-full border border-cyan-700 whitespace-nowrap'>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {location === '/services' && (
        <>
          <div className="my-16 mt-28 relative">
            <div className="pointer-events-none absolute inset-x-0 top-7 hidden lg:block h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="group relative overflow-hidden rounded-2xl border-white/10 p-6 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 ring-1 ring-white/10">
                      {step.icon}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-100/70 ring-1 ring-white/10">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-white font-semibold text-lg">{step.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-cyan-100/80">{step.desc}</div>
                  <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div> 
          <Experience /> 
          <Contact />
        </> 
      )}
    </div>
  )
}
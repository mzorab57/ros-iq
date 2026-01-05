import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  const location = useLocation().pathname;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-1">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">{t('experience.badge')}</span>
      </div>

      <div className="mt-8 border-l-2 pl-6 border-white/10 gap-6 flex flex-col lg:flex-row justify-between">
        <div className="">
          <h2 className="mt-2 text-4xl sm:text-5xl font-semibold text-white">
            {t('experience.title_1')} <span className="text-cyan-400">{t('experience.title_2')}</span>
          </h2>
          <p className="mt-4 text-cyan-100/80 max-w-3xl">
            {t('experience.intro_text')}
          </p>

          <div className="rounded-2xl mt-6 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
            <div className="text-white text-xl font-semibold">{t('experience.capability_title')}</div>
            <div className="mt-1 text-cyan-100/70 text-lg">{t('experience.capability_subtitle')}</div>
            <ul className="mt-6 grid gap-3 text-cyan-100/80 text-lg">
              {[
                t('experience.capability_list.0'),
                t('experience.capability_list.1'),
                t('experience.capability_list.2'),
                t('experience.capability_list.3'),
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-5 items-center justify-center rounded-full bg-cyan-500/20 ring-1 ring-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-cyan-200">
                      <path fillRule="evenodd" d="M20.03 6.22a.75.75 0 01.03 1.06l-9.25 10a.75.75 0 01-1.08.02l-4.25-4.25a.75.75 0 011.06-1.06l3.7 3.7 8.72-9.43a.75.75 0 011.07-.04z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== LEFT SIDE - Animated Stats Tower ===== */}
        <div className="relative">
          <div className="relative p-8 lg:p-10 rounded-3xl backdrop-blur-xl overflow-hidden group hover:border-cyan-400/30 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{t('experience.stats_title')}</h3>
                  <p className="text-slate-400">{t('experience.stats_subtitle')}</p>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { year: '2007-2012', label: t('experience.timeline.0.label'), progress: 100, color: 'cyan' },
                  { year: '2012-2018', label: t('experience.timeline.1.label'), progress: 100, color: 'blue' },
                  { year: '2018-2022', label: t('experience.timeline.2.label'), progress: 100, color: 'indigo' },
                  { year: '2022-Present', label: t('experience.timeline.3.label'), progress: 75, color: 'purple' },
                ].map((item, index) => (
                  <div key={index} className="group/bar">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white font-medium">{item.label}</span>
                      <span className="text-xs text-slate-500">{item.year}</span>
                    </div>
                    <div className="relative h-3 rounded-full bg-slate-800/50 overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 transition-all duration-1000 ease-out group-hover/bar:shadow-lg`}
                        style={{
                          width: `${item.progress}%`,
                          animation: `progressBar 2s ease-out ${index * 0.3}s forwards`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-${item.color}-400 border-2 border-slate-900 shadow-lg transition-all duration-1000`}
                        style={{ left: `calc(${item.progress}% - 8px)` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 my-3 border-t border-white/10">
                {[
                  { number: '17+', label: t('experience.stats.years') },
                  { number: '500+', label: t('experience.stats.projects') },
                  { number: '10+', label: t('experience.stats.experts') },
                ].map((stat, index) => (
                  <div key={index} className="text-center pt-3">
                    <div className="text-2xl lg:text-3xl font-semibold text-white">{stat.number}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      {location === '/' ? <></> : (
        <div className="lg:border-r-2 border-b-2 border-t-2 border-white/10 grid lg:gap-6 lg:grid-cols-2 lg:items-start">
          <div className="lg:col-span-1 border-b-2 border-r-2 lg:border-b-0 lg:border-r-0 border-white/10 px-4 ring-white/10">
            <div className="text-white text-lg font-semibold pt-4">{t('experience.milestones_title')}</div>
            <div className="mt-1 text-cyan-100/70 text-sm">{t('experience.milestones_subtitle')}</div>
            <div className="mt-6 grid gap-4">
              {[
                { year: '2007', title: t('experience.milestones_list.0.title'), desc: t('experience.milestones_list.0.desc') },
                { year: '2012', title: t('experience.milestones_list.1.title'), desc: t('experience.milestones_list.1.desc') },
                { year: 'Today', title: t('experience.milestones_list.2.title'), desc: t('experience.milestones_list.2.desc') },
              ].map((m) => (
                <div key={m.year} className="p-5 border-cyan-500/40">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-100/80 ring-1 ring-white/10">
                        {m.year}
                      </span>
                      <div className="text-white font-semibold">{m.title}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-cyan-100/80">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 border-l-2 lg:border-l-0 px-4 pt-5 border-white/10">
            <div className="text-white text-lg font-semibold">{t('experience.how_we_work_title')}</div>
            <div className="mt-1 text-cyan-100/70 text-sm">{t('experience.how_we_work_subtitle')}</div>
            <div className="mt-6 grid gap-3">
              {[
                { title: t('experience.steps.0.title'), desc: t('experience.steps.0.desc') },
                { title: t('experience.steps.1.title'), desc: t('experience.steps.1.desc') },
                { title: t('experience.steps.2.title'), desc: t('experience.steps.2.desc') },
                { title: t('experience.steps.3.title'), desc: t('experience.steps.3.desc') },
              ].map((s, idx) => (
                <div key={s.title} className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-semibold">{s.title}</div>
                    <div className="text-xs text-cyan-100/60">0{idx + 1}</div>
                  </div>
                  <div className="mt-2 text-sm text-cyan-100/80">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
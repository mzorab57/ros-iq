import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const MoreAboute = () => {
  const { t } = useTranslation();
  const location = useLocation().pathname;

  const valuesList = [
    { title: t('moreAbout.values.v1.title'), desc: t('moreAbout.values.v1.desc') },
    { title: t('moreAbout.values.v2.title'), desc: t('moreAbout.values.v2.desc') },
    { title: t('moreAbout.values.v3.title'), desc: t('moreAbout.values.v3.desc') },
    { title: t('moreAbout.values.v4.title'), desc: t('moreAbout.values.v4.desc') },
  ];

  return (
    <div>
      {location === '/' ? <></> : <div>
        {/* vission mission */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-cyan-300">
                  <path d="M12 4.5C7.5 4.5 4 8 4 12s3.5 7.5 8 7.5 8-3.5 8-7.5-3.5-7.5-8-7.5zm0 3a5 5 0 110 10 5 5 0 010-10z" />
                </svg>
              </span>
              <div className="text-white font-semibold">{t('moreAbout.vision_title')}</div>
            </div>
            <p className="mt-2 text-cyan-100/80">
              {t('moreAbout.vision_desc')}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-cyan-300">
                  <path d="M12 2l4 8h8l-6.5 5.2L19 23l-7-4-7 4 1.5-7.8L0 10h8z" />
                </svg>
              </span>
              <div className="text-white font-semibold">{t('moreAbout.mission_title')}</div>
            </div>
            <p className="mt-2 text-cyan-100/80">
              {t('moreAbout.mission_desc')}
            </p>
          </div>
        </div>

        {/* our value */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-7 ring-1 ring-white/10">
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="text-white text-lg font-semibold">{t('moreAbout.values_title')}</div>
              <div className="mt-1 text-cyan-100/70 text-sm">{t('moreAbout.values_subtitle')}</div>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valuesList.map((v) => (
              <div key={v.title} className="rounded-xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
                <div className="text-white font-semibold">{v.title}</div>
                <div className="mt-1 text-sm text-cyan-100/80">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* number */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
            <div className="text-2xl font-bold text-white">2007</div>
            <div className="text-cyan-100/80">{t('moreAbout.stats.est.label')}</div>
            <div className="text-xs text-cyan-100/60 mt-1">{t('moreAbout.stats.est.sub')}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
            <div className="text-2xl font-bold text-white">17+</div>
            <div className="text-cyan-100/80">{t('moreAbout.stats.exp.label')}</div>
            <div className="text-xs text-cyan-100/60 mt-1">{t('moreAbout.stats.exp.sub')}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-cyan-100/80">{t('moreAbout.stats.sat.label')}</div>
            <div className="text-xs text-cyan-100/60 mt-1">{t('moreAbout.stats.sat.sub')}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
            <div className="text-2xl font-bold text-white">ISO</div>
            <div className="text-cyan-100/80">{t('moreAbout.stats.iso.label')}</div>
            <div className="text-xs text-cyan-100/60 mt-1">{t('moreAbout.stats.iso.sub')}</div>
          </div>
        </div>

        {/* Need a system designed for your site? */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-7 ring-1 ring-white/10">
          <div>
            <div className="text-white font-semibold">{t('moreAbout.cta_title')}</div>
            <div className="mt-1 text-cyan-100/75 text-sm">{t('moreAbout.cta_subtitle')}</div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-white font-medium shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            {t('moreAbout.cta_btn')}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 rtl:rotate-180">
              <path d="M13.5 4.5a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H4.5a.75.75 0 010-1.5h13.66L13.5 5.56a.75.75 0 010-1.06z" />
            </svg>
          </Link>
        </div>
      </div>}
    </div>
  )
}

export default MoreAboute;
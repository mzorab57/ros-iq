import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const PHONE_NUMBER_E164 = "+9647502460616";
const PHONE_NUMBER_DISPLAY = "+964 750 246 0616";
const WHATSAPP_URL = "https://wa.me/9647719905873";
const WHATSAPP_DISPLAY = "+964 771 990 5873";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer dir="ltr" className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-start">
          <div className="space-y-8">
            <div>
              <div className="text-cyan-300 font-semibold text-xl">
                R.O.S Co — Water Solutions
              </div>
              <p className="mt-3 text-sm text-cyan-100/70 max-w-xl leading-relaxed">
                {t("contact.desc")}
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <NavLink to="/" end className="text-cyan-200/80 hover:text-white transition">
                {t("nav.home", "Home")}
              </NavLink>
              <NavLink to="/about" className="text-cyan-200/80 hover:text-white transition">
                {t("nav.about", "About")}
              </NavLink>
              <NavLink to="/services" className="text-cyan-200/80 hover:text-white transition">
                {t("nav.services", "Services")}
              </NavLink>
              <NavLink to="/projects" className="text-cyan-200/80 hover:text-white transition">
                {t("nav.projects", "Projects")}
              </NavLink>
              <NavLink to="/contact" className="text-cyan-200/80 hover:text-white transition">
                {t("nav.contact", "Contact")}
              </NavLink>
            </nav>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3">
              <a
                href={`tel:${PHONE_NUMBER_E164}`}
                className="group bg-white/5 p-5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-cyan-300"
                    >
                      <path d="M2 4a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-.59 1.41l-1.7 1.7a12.05 12.05 0 006.48 6.48l1.7-1.7A2 2 0 0117 14h3a2 2 0 012 2v3a2 2 0 01-2 2h-1C9.27 21 3 14.73 3 7V6a2 2 0 01-1-2z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t("contact.phone")}
                    </div>
                    <div className="text-xs text-cyan-100/70">
                      {t("contact.tap_call")}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-cyan-100/80 group-hover:text-white transition whitespace-nowrap">
                  {PHONE_NUMBER_DISPLAY}
                </div>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group bg-white/5 p-5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-green-400/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/20 ring-1 ring-white/10">
                    <FaWhatsapp className="h-5 w-5 text-green-400" />
                  </span>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t("contact.whatsapp")}
                    </div>
                    <div className="text-xs text-cyan-100/70">
                      {t("contact.fast_response")}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-cyan-100/80 group-hover:text-white transition whitespace-nowrap">
                  {WHATSAPP_DISPLAY}
                </div>
              </a>

              <div className="bg-white/5 p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-cyan-300"
                    >
                      <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v1l-10 6L2 6V5zm0 4l10 6 10-6v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t("contact.email")}
                    </div>
                    <div className="text-xs text-cyan-100/70">
                      {t("contact.tap_compose")}
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-1.5">
                  <a
                    href="mailto:Lhonrose511@gmail.com"
                    className="block text-cyan-100/80 hover:underline hover:text-white transition break-all text-sm"
                  >
                    Lhonrose511@gmail.com
                  </a>
                  <a
                    href="mailto:info@ros-iq.com"
                    className="block text-cyan-100/80 hover:underline hover:text-white transition break-all text-sm"
                  >
                    info@ros-iq.com
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white/5 p-5 py-6 ring-1 ring-white/10">
                <div className="text-white font-semibold text-base">
                  {t("contact.office_address")}
                </div>
                <div className="mt-2 text-sm text-cyan-100/80 leading-relaxed">
                  {t("contact.office_location")}
                  <br />
                  {t("contact.office_building")}
                </div>
              </div>
              <div className="bg-white/5 p-5 py-6 ring-1 ring-white/10">
                <div className="text-white font-semibold text-base">
                  {t("contact.workshop")}
                </div>
                <div className="mt-2 text-sm text-cyan-100/80 leading-relaxed">
                  {t("contact.workshop_location")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10 text-center sm:text-start text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} R.O.S Co. all rights reserved.</p>
          <p className="mt-1">
            Powered by{" "}
            <a
              href="https://wa.me/96407701411893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline"
            >
              Al-Code
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

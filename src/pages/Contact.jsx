import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";


export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-cyan-300 font-medium tracking-wide">GET IN TOUCH</div>

      <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
        Let's Discuss Your <span className="text-cyan-400">Project</span>
      </h2>

      <p className="mt-4 text-cyan-100/80">
        Ready to start your water treatment project? Contact us for a free consultation and customized quote.
      </p>

      {/* Contact Cards */}
      <div className="mt-8 border-l-2 border-b-2 border-t-2 p-6 border-white/10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Phone */}
        <Link
          to="tel:+9647709905873"
          className="group bg-white/5 p-7 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20"
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
              <div className="text-white font-semibold">Phone</div>
              <div className="text-sm text-cyan-100/70">Tap to call</div>
            </div>
          </div>
          <div className="mt-5 text-cyan-100/80 group-hover:text-white transition">
            +964 770 990 5873
          </div>
        </Link>

        {/* WhatsApp */}
        <Link
          to="https://wa.me/9647502460616"
          target="_blank"
          rel="noreferrer"
          className="group bg-white/5 p-7 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-green-400/40"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/20 ring-1 ring-white/10">
              <FaWhatsapp className="h-5 w-5 text-green-400" />
            </span>
            <div>
              <div className="text-white font-semibold">WhatsApp</div>
              <div className="text-sm text-cyan-100/70">Fast response</div>
            </div>
          </div>
          <div className="mt-5 text-cyan-100/80 group-hover:text-white transition">
            +964 750 246 0616
          </div>
        </Link>

        {/* Email */}
        <div className="bg-white/5 p-7 ring-1 ring-white/10">
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
              <div className="text-white font-semibold">Email</div>
              <div className="text-sm text-cyan-100/70">Tap to compose</div>
            </div>
          </div>

          <div className="mt-5 space-y-1">
            <a
              href="mailto:Lhonrose511@gmail.com"
              className="block text-cyan-100/80 hover:underline hover:text-white transition break-all"
            >
              Lhonrose511@gmail.com
            </a>
            <a
              href="mailto:info@ros-iq.com"
              className="block text-cyan-100/80 hover:underline hover:text-white transition break-all"
            >
              info@ros-iq.com
            </a>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="grid gap-6 p-6  sm:grid-cols-2 border-r-2 border-b-2 border-white/10">
        <div className="bg-white/5 p-7 py-12 ring-1 ring-white/10">
          <div className="text-white font-semibold text-xl">Office Address</div>
          <div className="text-cyan-100/80">
            Sulaymaniyah, Kurdistan Region, Iraq
            <br />
            Chwarbakh Building No. 2
          </div>
        </div>

        <div className="bg-white/5 p-7 py-12 ring-1 ring-white/10">
          <div className="text-white font-semibold text-xl">Workshop</div>
          <div className="text-cyan-100/80">
            Modern Warehouse, near Mamostayan City, No. 33
          </div>
        </div>
      </div>
    </div>
  );
}

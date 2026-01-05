import React, { useState, useEffect } from "react";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // <--- ڕاستەوخۆ لێرەوە هاوردەی بکە (ناونیشانی فایلەکە ڕاست بکەرەوە)

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(); // تەنها بۆ وەرگێڕانی ناوەکان بەکاری بێنە ئەگەر ویستت

  const changeLanguage = (lng) => {
    // دڵنیابوونەوە لەوەی i18n بوونی هەیە و فەنکشنەکەی تێدایە
    if (i18n && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(lng)
        .then(() => {
          localStorage.setItem("selectedLanguage", lng);
          const dir = (lng === "ar" || lng === "ku") ? "rtl" : "ltr";
          document.documentElement.dir = dir;
          document.body.dir = dir;
        })
        .catch((err) => console.error("Language change error:", err));
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || i18n.language || "en";
    const dir = (savedLanguage === "ar" || savedLanguage === "ku") ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center p-2 gap-2 rounded-xl transition-all duration-300 
          ${isOpen ? "bg-cyan-500/20 text-cyan-400" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
      >
        <GrLanguage size={20} />
        <span className="ml-2 rtl:mr-2 rtl:ml-0 text-xs font-bold uppercase">{i18n.language}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-32 py-2 bg-[#0a0f1a] border border-white/10 rounded-xl shadow-2xl z-20">
            <button onClick={() => changeLanguage("en")} className="w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-300 hover:bg-white/5">English</button>
            <button onClick={() => changeLanguage("ar")} className="w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-300 hover:bg-white/5">العربية</button>
            <button onClick={() => changeLanguage("ku")} className="w-full text-left rtl:text-right px-4 py-2 text-sm text-slate-300 hover:bg-white/5">کوردی</button>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
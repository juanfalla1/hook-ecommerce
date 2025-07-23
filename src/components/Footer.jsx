import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#023048] text-white py-10">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h4 className="text-xl font-semibold mb-2">{t("footer.about_title")}</h4>
          <div className="h-1 w-8 bg-[#00B4D8] mb-4"></div>
          <p className="text-gray-300 text-[0.95rem] mb-4">{t("footer.about_text")}</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#00B4D8] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#00B4D8] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#00B4D8] transition"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-2">{t("footer.quick_links")}</h4>
          <div className="h-1 w-8 bg-[#00B4D8] mb-4"></div>
          <ul className="space-y-2 text-[0.95rem]">
            <li><a href="#home" className="hover:text-[#00B4D8] transition">{t("menu.home")}</a></li>
            <li><a href="#products" className="hover:text-[#00B4D8] transition">{t("menu.products")}</a></li>
            <li><a href="#benefits" className="hover:text-[#00B4D8] transition">{t("menu.benefits")}</a></li>
            <li><a href="#about" className="hover:text-[#00B4D8] transition">{t("menu.about")}</a></li>
            <li><a href="#testimonials" className="hover:text-[#00B4D8] transition">{t("menu.testimonials")}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-2">{t("footer.contact")}</h4>
          <div className="h-1 w-8 bg-[#00B4D8] mb-4"></div>
          <ul className="text-gray-300 text-[0.95rem] space-y-2">
            <li>{t("footer.email")}</li>
            <li>{t("footer.phone")}</li>
            <li>{t("footer.address")}</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-400 text-sm mt-10">
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;


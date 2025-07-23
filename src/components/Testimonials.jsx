import React from "react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonialItems = t("testimonials.items", { returnObjects: true });

  return (
    <section id="testimonials" className="py-[80px] bg-[#023048] text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-[1.5rem] md:text-[1.8rem] font-medium mb-12 leading-snug">
          {t("testimonials.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialItems.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <p className="text-[1.05rem] italic mb-6 leading-relaxed relative pl-6">
                <span className="absolute left-0 top-[-5px] text-[2rem] text-white">“</span>
                {testimonial.quote}
                <span className="text-[1.8rem] align-bottom ml-1">”</span>
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-700 to-cyan-400 text-white font-bold text-[1rem]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-[1rem]">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-300 text-[0.95rem]">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


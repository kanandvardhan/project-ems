import React from "react";
import "./Testimonials.css";
import { motion } from "framer-motion";
import chaitanya from "../assets/webp/Chaitanya.webp";
import sheela from "../assets/webp/Sheela.webp";

const Testimonials = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="testimonial-bg content-container">
        <div className="elementor"></div>
        <div className="container flex px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-6xl font-bold">WHAT OUR CUSTOMERS SAY</h2>
              <p className="">
                {/* Pri ex magna scaevola moderatius. Nullam accommodare no vix, est
                ei diceret alienum, et sit cetero malorum. Et sea iudico
                consequat, est sanctus adipisci ex. */}
                Hear It From Them! Discover what our satisfied customers have to
                say about their delightful experiences with our services. Read
                their testimonials now!
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  {/* {testimonials_1row.map((item) => (
                    <div
                      key={item.id}
                      className={`p-6 rounded-xl shadow-xl bg-${item.color} testimonials-per`}
                    >
                      <p>{item.text}</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src={item.img}
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full "
                        />
                        <div>
                          <p className="text-lg font-semibold">
                            {item.customer_name}
                          </p>
                          <p className="text-sm ">{item.customer_from}</p>
                        </div>
                      </div>
                    </div>
                  ))} */}

                  <div className="p-6 rounded-xl shadow-xl bg-cyan-600 testimonials-per">
                    <p>
                      {/* An audire commodo habemus cum. Ne sed corrumpit
                      repudiandae. Tota aliquip democritum pro in, nec
                      democritum intellegam ne. Propriae volutpat dissentiet ea
                      sit, nec at lorem inani tritani, an ius populo perfecto
                      vituperatoribus. Eu cum case modus salutandi, ut eum
                      vocent sensibus reprehendunt. */}
                      I was amazed by their prompt and efficient services. From
                      the very beginning of filing my tax return to receiving my
                      refund, the entire process was incredibly smooth and
                      seamless by VM &amp; Associates. Their expertise and
                      support gave me the confidence I needed to handle my tax
                      matters without any stress. I highly recommend them!
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={chaitanya}
                        alt=""
                        loading="eager"
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div>
                        <p className="text-lg font-semibold">Chaitanya</p>
                        <p className="text-sm ">Sr. Manager, Pvt. Co.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl shadow-xl bg-teal-600 testimonials-per">
                    <p>
                      {/* Sit wisi sapientem ut, pri civibus temporibus voluptatibus
                      et, ius cu hinc fabulas. Nam meliore minimum et, regione
                      convenire cum id. Ex pro eros mucius consectetuer, pro
                      magna nulla nonumy ne, eam putent iudicabit consulatu cu. */}
                      I had given my ITR filing to VMA and Associates and they
                      have done this with utmost dedication, within the given
                      space of time and very very accurate. Iwillrecommend that
                      to they be given a chance to work with you and you can
                      experience the satisfaction of their work. wish them all
                      the best for the future endeavours.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={sheela}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div>
                        <p className="text-lg font-semibold">Sheela</p>
                        <p className="text-sm ">
                          Medical Transcriptionist, British Orient Infotel Pvt.
                          Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  {/* {testimonials_2row.map((item) => (
                    <div
                      key={item.id}
                      className={`p-6 rounded-xl shadow-xl bg-${item.color} testimonials-per`}
                    >
                      <p>{item.text}</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src={item.img}
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full "
                        />
                        <div>
                          <p className="text-lg font-semibold">
                            {item.customer_name}
                          </p>
                          <p className="text-sm ">{item.customer_from}</p>
                        </div>
                      </div>
                    </div>
                  ))} */}
                  <div className="p-6 rounded-xl shadow-xl bg-amber-600 testimonials-per">
                    <p>
                      Putant omnium elaboraret per ut. Id dicta tritani nominavi
                      quo, mea id justo errem elaboraret. Agam mollis scripserit
                      ea his, ut nec postea verear persecuti. Ea noster senserit
                      eam, ferri omittantur ei nec. Id mel solet libris
                      efficiantur, commune explicari et eos. Case movet ad est,
                      sed tota vocent appetere ea.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl shadow-xl bg-violet-600 testimonials-per">
                    <p>
                      Te omnes virtute volutpat sed. Ei esse eros interesset
                      vel, ei populo denique ocurreret vix, eu cum pertinax
                      mandamus vituperatoribus. Solum nihil luptatum per ex, ei
                      amet viderer eos. Ea illum labitur mnesarchum pro. Eius
                      meis salutandi ei nam, alterum expetenda et nec. Expetenda
                      intellegat at eum, per mazim sanctus honestatis ad. Ei
                      noluisse invenire vix. Te ancillae patrioque qui, probo
                      bonorum vivendum ex vim.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">CTO of Company Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;

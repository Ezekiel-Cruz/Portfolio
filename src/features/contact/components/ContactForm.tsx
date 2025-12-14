import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { trackContactForm } from "../../../lib/analytics";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaFacebookF, FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import * as motion from "motion/react-client";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  "h-captcha-response"?: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const captchaRef = useRef<unknown | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onHCaptchaChange = (token: string) => {
    setValue("h-captcha-response", token, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
        "93f83f47-9537-4627-ab57-2d19311d8e82";

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("access_key", accessKey);
      if (data["h-captcha-response"]) {
        formData.append("h-captcha-response", data["h-captcha-response"]);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        trackContactForm();
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 md:py-24 md:px-8 bg-base-100 border-t border-base-content/10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Get In Touch</h2>
          <p className="text-base-content/60 text-sm md:text-base max-w-xl mx-auto">
            Have a project in mind? Let's work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {/* Contact Information */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="bg-base-200 rounded-xl md:rounded-2xl p-4 md:p-6 border border-base-300/20">
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-5">Contact Info</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-base-content/70" />
                  </div>
                  <div>
                    <p className="text-sm text-base-content/50">Email</p>
                    <p className="text-sm font-medium">
                      ezekielcruz019@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center">
                    <HiOutlinePhone className="w-5 h-5 text-base-content/70" />
                  </div>
                  <div>
                    <p className="text-sm text-base-content/50">Phone</p>
                    <p className="text-sm font-medium">09161404002</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-base-300 rounded-lg flex items-center justify-center">
                    <HiOutlineLocationMarker className="w-5 h-5 text-base-content/70" />
                  </div>
                  <div>
                    <p className="text-sm text-base-content/50">Location</p>
                    <p className="text-sm font-medium">
                      Malolos, Bulacan, Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-base-300/10 my-5"></div>

              <div>
                <h4 className="text-sm font-medium mb-3 text-base-content/70">Follow Me</h4>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/kielpogi.cruz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-base-300 hover:bg-base-300/70 transition-colors"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/Ezekiel-Cruz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-base-300 hover:bg-base-300/70 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://discord.com/users/meclose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-base-300 hover:bg-base-300/70 transition-colors"
                  >
                    <FaDiscord className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ezekiel-cruz-685975399/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-base-300 hover:bg-base-300/70 transition-colors"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-base-200 rounded-xl md:rounded-2xl p-4 md:p-6 border border-base-300/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-5">Send Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-base-content/70 mb-1.5 block">Name *</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-2.5 rounded-lg bg-base-300/20 border border-base-content/20 focus:border-base-content/50 focus:outline-none transition-colors text-sm ${
                        errors.name ? "border-error" : ""
                      }`}
                      placeholder="Your Name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="text-xs text-error mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm text-base-content/70 mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      className={`w-full px-4 py-2.5 rounded-lg bg-base-300/20 border border-base-content/20 focus:border-base-content/50 focus:outline-none transition-colors text-sm ${
                        errors.email ? "border-error" : ""
                      }`}
                      placeholder="your.email@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-xs text-error mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                

                <div>
                  <label className="text-sm text-base-content/70 mb-1.5 block">Message *</label>
                  <textarea
                    className={`w-full px-4 py-2.5 rounded-lg bg-base-300/20 border border-base-content/20 focus:border-base-content/50 focus:outline-none transition-colors text-sm h-28 resize-none ${
                      errors.message ? "border-error" : ""
                    }`}
                    placeholder="Tell me about your project..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-error mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* hCaptcha */}
                <input type="hidden" {...register("h-captcha-response", { required: true })} />
                <div className="mt-2 flex justify-center overflow-hidden">
                  <div className="transform scale-[0.85] sm:scale-100">
                    <HCaptcha
                      ref={captchaRef}
                      sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY || "50b2fe65-b00b-4b9e-ad62-3ba471098be2"}
                      reCaptchaCompat={false}
                      onVerify={onHCaptchaChange}
                      size="normal"
                    />
                  </div>
                  {errors["h-captcha-response"] && (
                    <p className="text-xs text-error mt-1">Please complete the captcha</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full py-3 px-4 bg-primary text-primary-content rounded-lg font-medium text-sm hover:bg-primary/90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-3 rounded-lg bg-success/20 text-success text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 rounded-lg bg-error/20 text-error text-sm">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

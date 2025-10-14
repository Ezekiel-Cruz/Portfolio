import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { trackContactForm } from "../utils/analytics";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaFacebookF, FaGithub, FaDiscord } from "react-icons/fa";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Ezekiel Cruz",
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      trackContactForm();
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-base-100/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card bg-base-200/50 backdrop-blur-sm shadow-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <HiOutlineMail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-base-content/70">
                      ezekielcruz019@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <HiOutlinePhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-base-content/70">09161404002</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <HiOutlineLocationMarker className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-base-content/70">
                      Malolos, Bulacan, Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/kielpogi.cruz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-outline hover:btn-primary"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/Ezekiel-Cruz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-outline hover:btn-primary"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://discord.com/users/meclose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-outline hover:btn-primary"
                  >
                    <FaDiscord className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200/50 backdrop-blur-sm shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name *</span>
                    </label>
                    <input
                      type="text"
                      className={`input input-bordered w-full ${
                        errors.name ? "input-error" : ""
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
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.name.message}
                        </span>
                      </label>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email *</span>
                    </label>
                    <input
                      type="email"
                      className={`input input-bordered w-full ${
                        errors.email ? "input-error" : ""
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
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.email.message}
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Subject *</span>
                  </label>
                  <input
                    type="text"
                    className={`input input-bordered w-full ${
                      errors.subject ? "input-error" : ""
                    }`}
                    placeholder="Project Discussion"
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: {
                        value: 5,
                        message: "Subject must be at least 5 characters",
                      },
                    })}
                  />
                  {errors.subject && (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {errors.subject.message}
                      </span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message *</span>
                  </label>
                  <textarea
                    className={`textarea textarea-bordered h-32 w-full ${
                      errors.message ? "textarea-error" : ""
                    }`}
                    placeholder="Tell me about your project or ideas..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  ></textarea>
                  {errors.message && (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        {errors.message.message}
                      </span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary btn-lg w-full ${
                      isSubmitting ? "loading" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : " Send Message"}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="alert alert-success">
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="alert alert-error">
                    <span>
                      Failed to send message. Please try again or email me
                      directly.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

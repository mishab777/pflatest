"use client";

import { FormEvent, useState } from "react";
import { contactConfig } from "@/lib/data";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;
type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (form: HTMLFormElement): Errors => {
    const data = new FormData(form);
    const name = String(data.get("Name") ?? "").trim();
    const email = String(data.get("Email") ?? "").trim();
    const phone = String(data.get("phone Number") ?? "").trim();
    const next: Errors = {};

    if (!name) next.name = "Please provide your name";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) next.email = "Please type a valid email";
    if (!phone || phone.length > 10) next.phone = "Please enter your mobile number";

    return next;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch(contactConfig.formAction, {
        method: "POST",
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <input type="hidden" name="access_key" value={contactConfig.formAccessKey} />
      <input type="hidden" name="subject" value={contactConfig.formSubject} />

      <div className="mb-3">
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          className="w-full h-10 px-3 bg-bar text-white placeholder:text-muted text-sm outline-none"
        />
        {errors.name && <p className="text-gray-400 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="Email"
          placeholder="Email"
          className="w-full h-10 px-3 bg-bar text-white placeholder:text-muted text-sm outline-none"
        />
        {errors.email && <p className="text-gray-400 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-3">
        <input
          type="tel"
          name="phone Number"
          placeholder="Phone No"
          className="w-full h-10 px-3 bg-bar text-white placeholder:text-muted text-sm outline-none"
        />
        {errors.phone && <p className="text-gray-400 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div className="mb-4">
        <textarea
          name="Message"
          placeholder="Leave a message"
          rows={4}
          className="w-full p-3 bg-bar text-white placeholder:text-muted text-sm outline-none resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-white text-surface uppercase text-[15px] w-[150px] h-10 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>

      {status === "success" && (
        <p className="text-white mt-3">Thank You for Contacting Me!</p>
      )}
      {status === "error" && (
        <p className="text-gray-400 mt-3">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

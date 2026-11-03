"use client";

import { useRef, useState } from "react";

const ENDPOINT = "https://backend.adiance.com:443/api/send-email-adiance";
const SOURCE = "Adiance Website-(IFSEC India 2026 Landing Page)";

const REQUIREMENTS = [
  "CCTV OEM manufacturing",
  "CCTV ODM manufacturing",
  "Private-label / white-label CCTV",
  "PCB design and development",
  "SMT assembly and electronics manufacturing",
  "Hardware and firmware customization",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (v.company.trim().length < 2) e.company = "Please enter your company name.";
  if (!EMAIL_RE.test(v.email.trim()))
    e.email = "Please enter a valid business email, like name@company.com.";
  if (v.country.trim().length < 2) e.country = "Please enter your country.";
  if (!v.requirement) e.requirement = "Please choose what you are looking for.";
  return e;
}

export default function EnquiryForm() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    requirement: "",
    message: "",
    website: "", // honeypot: real people never fill this
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | failed
  const doneRef = useRef(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      const el = document.getElementById(`ifsec26-${first}`);
      if (el) el.focus();
      return;
    }

    // Honeypot filled: pretend it worked, send nothing, count nothing.
    if (values.website) {
      setStatus("done");
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          location: values.country.trim(),
          country: values.country.trim(),
          requirement: values.requirement,
          message: values.message.trim(),
          source: SOURCE,
          formType: "IFSEC India 2026 Meeting Request",
          booth: "Booth E10, Hall 5GF",
          businessUnit: "Adiance Technologies Pvt Ltd",
        }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Enquiry API returned ${res.status}`);

      // Success only: now (and only now) count the lead.
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "ifsec26_form_submit",
          page_name: "ifsec_india_2026",
          requirement: values.requirement,
        });
        window.dataLayer.push({
          event: "ifsec26_meeting_request",
          page_name: "ifsec_india_2026",
        });
        window.dataLayer.push({
          event: "generate_lead",
          lead_source: "ifsec_india_2026_landing_page",
          company: values.company.trim(),
        });
      } catch (err) {
        /* tracking must never break the form */
      }

      setStatus("done");
      setTimeout(() => doneRef.current && doneRef.current.focus(), 50);
    } catch (err) {
      setStatus("failed");
    } finally {
      clearTimeout(timer);
    }
  };

  if (status === "done") {
    return (
      <div
        className="ifsec26-success"
        role="status"
        tabIndex={-1}
        ref={doneRef}
      >
        <h3>Thank you. Your meeting request has been sent.</h3>
        <p>
          The Adiance team will reply to the business email you shared. If it is
          urgent, you can also message us on WhatsApp at +91 968 777 9999.
        </p>
      </div>
    );
  }

  const field = (id, label, input, error) => (
    <div className="ifsec26-field">
      <label htmlFor={`ifsec26-${id}`}>{label}</label>
      {input}
      {error ? (
        <span className="ifsec26-err" id={`ifsec26-${id}-err`}>
          {error}
        </span>
      ) : null}
    </div>
  );

  const common = (id) => ({
    id: `ifsec26-${id}`,
    name: id,
    value: values[id],
    onChange,
    "aria-invalid": errors[id] ? "true" : "false",
    "aria-describedby": errors[id] ? `ifsec26-${id}-err` : undefined,
  });

  return (
    <form className="ifsec26-form" onSubmit={onSubmit} noValidate>
      {field(
        "name",
        "Full Name *",
        <input type="text" autoComplete="name" required {...common("name")} />,
        errors.name
      )}
      {field(
        "company",
        "Company Name *",
        <input
          type="text"
          autoComplete="organization"
          required
          {...common("company")}
        />,
        errors.company
      )}
      {field(
        "email",
        "Business Email *",
        <input type="email" autoComplete="email" required {...common("email")} />,
        errors.email
      )}
      {field(
        "country",
        "Country *",
        <input
          type="text"
          autoComplete="country-name"
          required
          {...common("country")}
        />,
        errors.country
      )}
      {field(
        "requirement",
        "Business Requirement *",
        <select required {...common("requirement")}>
          <option value="">Select one</option>
          {REQUIREMENTS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>,
        errors.requirement
      )}
      {field(
        "message",
        "Message",
        <textarea rows={4} {...common("message")} />,
        undefined
      )}

      {/* honeypot */}
      <div className="ifsec26-hp" aria-hidden="true">
        <label htmlFor="ifsec26-website">Website</label>
        <input
          id="ifsec26-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={onChange}
        />
      </div>

      {status === "failed" ? (
        <div className="ifsec26-alert" role="alert">
          Sorry, your request could not be sent. Please try again, or write to
          contact@adiance.com or WhatsApp +91 968 777 9999.
        </div>
      ) : null}

      <button
        type="submit"
        className="ifsec26-btn ifsec26-btn--primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "SENDING…" : "REQUEST A MEETING WITH ADIANCE"}
      </button>
      <p className="ifsec26-privacy">
        We use your details only to reply to this request. See our{" "}
        <a href="/privacy-policy">privacy policy</a>.
      </p>
    </form>
  );
}

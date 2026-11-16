// ADI-017 (2026-11-14): simple spam trap for lead forms. Real visitors never
// see or fill this field; most form-spam bots fill every input. A form that
// renders <Honeypot /> should call isHoneypotFilled(event) at the start of
// its submit handler and quietly stop if it returns true.
// Same idea as the honeypot already used on the IFSEC 2026 landing page.
const FIELD = "company_website";

export function isHoneypotFilled(event) {
  try {
    const el = event?.target?.elements?.[FIELD];
    return Boolean(el && el.value && el.value.trim());
  } catch (e) {
    return false;
  }
}

export default function Honeypot() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <label htmlFor={FIELD}>Company website</label>
      <input
        id={FIELD}
        name={FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}

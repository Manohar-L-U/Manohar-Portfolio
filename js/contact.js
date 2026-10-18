/* Contact form.
   - If site.formEndpoint is set, the message is POSTed there as JSON.
   - If not, the visitor's email app opens with the message filled in. Nothing is sent by the site itself.
*/

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rules = {
  name: (v) => (!v ? "Please enter your name." : ""),
  email: (v) => (!v ? "Please enter your email." : EMAIL.test(v) ? "" : "That email doesn't look right."),
  message: (v) => (!v ? "Please write a message." : v.length < 10 ? "Write a little more, at least 10 characters." : ""),
};

export function initContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const button = document.getElementById("send-btn");
  const preview = document.getElementById("preview");
  const fields = ["name", "email", "message"].map((n) => form.elements.namedItem(n));

  const check = (field) => {
    const msg = rules[field.name](field.value.trim());
    field.setAttribute("aria-invalid", String(Boolean(msg)));
    document.getElementById(`cf-${field.name}-error`).textContent = msg;
    return !msg;
  };

  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value.trim()) check(field);
    });
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") check(field);
    });
  });

  // Show the message as a chat bubble while it is typed.
  form.elements.namedItem("message").addEventListener("input", (event) => {
    const value = event.target.value.trim();
    preview.hidden = !value;
    preview.textContent = value;
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";

    // Honeypot: real visitors never fill this in.
    if (form.elements.namedItem("website").value) return;

    const ok = fields.map(check).every(Boolean);
    if (!ok) {
      fields.find((f) => f.getAttribute("aria-invalid") === "true").focus();
      return;
    }

    const data = {
      name: form.elements.namedItem("name").value.trim(),
      email: form.elements.namedItem("email").value.trim(),
      message: form.elements.namedItem("message").value.trim(),
    };

    if (site.formEndpoint) {
      button.disabled = true;
      button.textContent = "Sending…";
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        form.reset();
        preview.hidden = true;
        status.textContent = "Thanks, your message was sent.";
      } catch {
        status.textContent = `The message did not send. Please email ${site.email} directly.`;
      } finally {
        button.disabled = false;
        button.textContent = "Send message";
      }
      return;
    }

    // No endpoint yet: open the email app instead of pretending to send.
    const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    status.textContent = "Your email app should open with the message filled in. If it doesn't, email " + site.email + " directly.";
  });
}

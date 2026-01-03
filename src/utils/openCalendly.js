const CALENDLY_URL = "https://calendly.com/olaideakosile35/30min";
const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_STYLE_HREF = "https://assets.calendly.com/assets/external/widget.css";

const ensureCalendlyStyles = () => {
  const hasStyles = document.querySelector(`link[href="${CALENDLY_STYLE_HREF}"]`);
  if (!hasStyles) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_STYLE_HREF;
    document.head.appendChild(link);
  }
};

const loadCalendlyScript = () =>
  new Promise((resolve, reject) => {
    if (window.Calendly?.initPopupWidget) {
      resolve(window.Calendly);
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(window.Calendly), {
        once: true,
      });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve(window.Calendly);
    script.onerror = reject;
    document.body.appendChild(script);
  });

export const openCalendly = () => {
  const fallback = () =>
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

  const openPopup = () => {
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      fallback();
    }
  };

  ensureCalendlyStyles();

  if (window.Calendly?.initPopupWidget) {
    openPopup();
    return;
  }

  loadCalendlyScript().then(openPopup).catch(fallback);
};

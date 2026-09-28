declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      eventNameOrTargetId: string,
      eventParams?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
}

export function trackResumeClick(link_location: "hero" | "contact") {
  trackEvent("resume_click", { link_location });
}

export function trackLinkedInClick(link_location: "contact") {
  trackEvent("linkedin_click", { link_location });
}

export function trackEmailClick(link_location: "contact") {
  trackEvent("email_click", { link_location });
}

export function trackProjectClick(
  project_name: string,
  link_location: "projects"
) {
  trackEvent("project_click", { project_name, link_location });
}

export function trackContactCtaClick(link_location: "navbar") {
  trackEvent("contact_cta_click", { link_location });
}

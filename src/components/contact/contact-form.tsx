"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState, Suspense } from "react";
import { getCatalogById } from "@/lib/catalog";
import { projectTypes, site, timelineOptions } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";
  const catalog = getCatalogById(serviceParam);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (!site.formspree) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Email me directly at " + site.email,
      );
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${site.formspree}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please email me directly.");
    }
  }

  const defaultProjectType =
    serviceParam === "saas-web-app" || serviceParam === "saas-mvp"
      ? serviceParam === "saas-mvp"
        ? "mvp"
        : "saas"
      : serviceParam === "ai-integration"
        ? "ai"
        : serviceParam === "api-integration"
          ? "api"
          : "";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {catalog && (
        <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm">
          <span className="text-muted">Inquiring about: </span>
          <span className="font-medium text-foreground">{catalog.title}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Project type
          </label>
          <select
            name="projectType"
            defaultValue={defaultProjectType}
            className={inputClass}
          >
            <option value="">Select a type</option>
            {projectTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Timeline
          </label>
          <select name="timeline" className={inputClass}>
            <option value="">Select timeline</option>
            {timelineOptions.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Field
        label="Message"
        name="message"
        required
        multiline
        placeholder="Tell me about your project, goals, and any links (Figma, docs, repo)..."
      />

      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="service" value={catalog?.title ?? ""} />

      {status === "success" && (
        <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
          Thanks — I&apos;ll reply within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        {...(status === "loading" ? { disabled: true } : {})}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  multiline,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
}) {
  return (
    <div className={multiline ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className={cn(inputClass, "resize-y")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="h-64 animate-pulse rounded-2xl bg-surface" />}>
      <ContactFormInner />
    </Suspense>
  );
}

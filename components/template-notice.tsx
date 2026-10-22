import { siteConfig } from "@/lib/config"

export function TemplateNotice() {
  return (
    <aside aria-label="Template demo notice" className="border-b border-border bg-muted px-6 py-4 text-foreground">
      <p className="mx-auto max-w-4xl text-sm leading-relaxed">
        <strong>Portfolio template demo.</strong> Profiles, employers, projects and metrics are illustrative sample content.{" "}
        <a href={siteConfig.repository} className="underline underline-offset-4">View the template repository</a>.
      </p>
    </aside>
  )
}

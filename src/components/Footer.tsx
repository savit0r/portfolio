import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-l-surface dark:bg-d-surface rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-l-border/60 dark:border-d-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-sm text-l-muted dark:text-d-muted">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-l-muted/50 dark:text-d-muted/50">
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}

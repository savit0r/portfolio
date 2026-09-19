import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="paper-sheet rounded-2xl p-6 sm:p-8 border border-l-border dark:border-d-border w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-xs font-mono text-l-muted dark:text-d-muted">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs font-mono red-ink font-medium">
          Rohit&apos;s Developer Notebook
        </p>
      </div>
    </footer>
  );
}

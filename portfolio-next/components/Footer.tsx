import { copyright } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink h-[60px] w-full border-t border-surface flex items-center justify-center">
      <p className="text-white text-base text-center px-4">{copyright}</p>
    </footer>
  );
}

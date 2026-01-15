import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      <footer className="relative z-10 py-20 px-8 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-4 h-4 bg-primary rounded-sm rotate-45" />
            <span className="font-black text-sm tracking-[0.3em]">NAMAT</span>
          </div>
          <p className="text-[10px] font-bold tracking-[0.5em] text-text-secondary">
            © 2026 ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </>
  );
}

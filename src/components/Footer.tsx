import { AvifImg } from "@/lib/imageUtils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <AvifImg
              src={`${import.meta.env.BASE_URL}icon.png`}
              alt="Menu QR"
              className="w-8 h-8 rounded-lg"
              loading="lazy"
            />
            <div className="text-center md:text-left">
              <p className="text-text-primary text-sm font-semibold">Menu QR</p>
              <p className="text-text-secondary text-xs">
                © {year} — Simple por diseño
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <img src="/Dev.png" alt="Ezekiel Cruz Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold">Ezekiel Cruz</span>
          </div>
          <p className="text-base-content/70 text-sm">© 2025 Ezekiel Cruz</p>
        </div>
      </div>
    </footer>
  );
}

export default function SkipToContent() {
  return (
    <a
      className="z-[99999] min-h-[44px] min-w-[44px] absolute -top-20 left-0 p-4 bg-dark text-white focus:top-0 hover:text-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark focus:ring-white"
      href="#content"
      title="Tombol Skip to content"
      aria-label="Tombol Skip to content"
    >
      Menuju ke konten
    </a>
  );
}
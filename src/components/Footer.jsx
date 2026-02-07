export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#666] text-sm">
          © {new Date().getFullYear()} Yashwanth Krishna. Built with Next.js &
          Tailwind CSS.
        </p>
        <p className="text-[#666] text-sm">
          Designed & developed with ☕ and curiosity.
        </p>
      </div>
    </footer>
  );
}
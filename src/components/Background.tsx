// components/Background.tsx

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Dark Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Green Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_60%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid" />

    </div>
  )
}
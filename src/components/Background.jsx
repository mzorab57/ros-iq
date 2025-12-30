export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background:
          'radial-gradient(circle at top, rgba(56, 189, 248, 0.35), transparent 40%), linear-gradient(135deg, #021024, #052e3f, #021024)',
        backgroundAttachment: 'fixed',
      }}
    />
  )
}

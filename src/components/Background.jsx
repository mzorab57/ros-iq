export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background:
          'radial-gradient(circle at top, rgba(57, 189, 248, 0.45), transparent 25%), linear-gradient(85deg, #07508f, #03273f, #07508f)',
        backgroundAttachment: 'fixed',
      }}
    />
  )
}

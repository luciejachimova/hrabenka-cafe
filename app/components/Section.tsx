interface SectionProps {
  title: string
  children: React.ReactNode
  background?: 'white' | 'cream' | 'sand'
}

export default function Section({children, background = 'white' }: SectionProps) {
  const bgClass =
    background === 'cream'
      ? 'bg-[#fdf6ee]'
      : background === 'sand'
        ? 'bg-[#f7e9d6]'
        : 'bg-white'

  return (
    <section className={`${bgClass} w-full py-12 px-4 sm:px-8`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  )
}

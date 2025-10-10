export function PartnerLogos() {
  const logos = [
    { id: 1, name: "Logoipsum 1" },
    { id: 2, name: "Logoipsum 2" },
    { id: 3, name: "Logoipsum 3" },
    { id: 4, name: "Logoipsum 4" },
    { id: 5, name: "Logoipsum 5" },
    { id: 6, name: "Logoipsum 6" },
  ]

  return (
    <section className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              <div className="text-center text-lg font-medium text-muted-foreground/60">Logoipsum</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export default function Home() {
  return (
    <section className="relative w-full h-[600px]">
      <Image
        src="/hero-placeholder.png"
        alt="PS Verbund Hero"
        fill
        className="object-cover"
        priority
      />
    </section>
  )
}

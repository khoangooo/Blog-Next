import Card from "@/components/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Array.from({ length: 3 }).map((item, i) => {
        return <Card key={i}/>
      })}
    </main>
  )
}

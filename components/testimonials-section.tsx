import Image from "next/image"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">مــاذا يــقــول عــمــلاؤنــا</h2>
          <p className="text-gray-600 dark:text-gray-300">
            نــفــخــر بــالــعــمــل مــع مــجــمــوعــة مــتــنــوعــة مــن الــعــمــلاء الــذيــن وثــقــوا بــنــا لــتــحــقــيــق أهــدافــهــم
          </p>
        </div>

        <TestimonialsCarousel />

        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-8">عــمــلاء نــفــتــخــر بــالــعــمــل مــعــهــم</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center justify-center"
              >
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=Client${i}`}
                  alt={`عميل ${i}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
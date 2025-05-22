import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ServicesList } from "@/components/services-list"

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">خدماتنا المتميزة</h2>
          <p className="text-gray-600 dark:text-gray-300">
            نقدم مجموعة متكاملة من الخدمات الإبداعية والتسويقية لمساعدة علامتك التجارية على التميز
          </p>
        </div>

        <ServicesList />

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/services">
              استكشف جميع خدماتنا
              <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 
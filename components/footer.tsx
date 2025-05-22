import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      <div className="container px-4 mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#186af2]">الفشني</h3>
            <p className="text-muted-foreground mb-6">
              شركة رائدة في مجال الإعلان والعلاقات العامة، نقدم حلولاً إبداعية متكاملة لعملائنا.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                <Facebook size={20} />
                <span className="sr-only">فيسبوك</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#ea4235] transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">تويتر</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#fabc05] transition-colors duration-300">
                <Instagram size={20} />
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#34a853] transition-colors duration-300">
                <Linkedin size={20} />
                <span className="sr-only">لينكد إن</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  معرض الأعمال
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/digital-marketing" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  التسويق الرقمي
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  إدارة وسائل التواصل الاجتماعي
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  تطوير المواقع الإلكترونية
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  تحسين محركات البحث
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300">
                  الهوية البصرية
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#186af2] mt-1 ml-2" />
                <span className="text-muted-foreground">+966 123 456 789</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#ea4235] mt-1 ml-2" />
                <span className="text-muted-foreground">info@al-fashni.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#fabc05] mt-1 ml-2" />
                <span className="text-muted-foreground">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} شركة الفشني للإعلان والعلاقات العامة. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-[#186af2] text-sm transition-colors duration-300">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-[#186af2] text-sm transition-colors duration-300">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

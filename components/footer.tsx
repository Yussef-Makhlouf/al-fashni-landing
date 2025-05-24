import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, FileDown, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
      </div>
      
      <div className="container px-4 mx-auto relative">
        {/* Top section with logo and newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 pb-12 border-b border-border">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-[#186af2]">الــفــشــنــي</h3>
            <p className="text-muted-foreground max-w-md">
              شــركــة رائــدة فــي مــجــال الإعــلان والعــلاقــات العــامــة، نــقــدم حــلــولاً إبــداعــيــة مــتــكــامــلــة لــعــمــلائــنــا.
            </p>
          </div>
          
          <div className="w-full lg:w-auto">
            <h4 className="text-lg font-semibold mb-3">احصل على بروفايل الشركة</h4>
            <div className="flex gap-3">
              <Button className="bg-[#186af2] hover:bg-[#0f5ad0] text-white flex items-center gap-2">
                <FileDown size={16} />
                <span>تحميل البروفايل</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-1 after:bg-[#186af2]">عن الشركة</h3>
            <p className="text-muted-foreground mb-6">
              نسعى دائماً لتقديم خدمات إبداعية متميزة تساعد عملائنا على تحقيق أهدافهم التسويقية وبناء علامات تجارية قوية في السوق.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="bg-card hover:bg-background text-muted-foreground hover:text-[#186af2] p-2 rounded-full transition-all duration-300 border border-border">
                <Facebook size={18} />
                <span className="sr-only">فيسبوك</span>
              </Link>
              <Link href="#" className="bg-card hover:bg-background text-muted-foreground hover:text-[#ea4235] p-2 rounded-full transition-all duration-300 border border-border">
                <Twitter size={18} />
                <span className="sr-only">تويتر</span>
              </Link>
              <Link href="#" className="bg-card hover:bg-background text-muted-foreground hover:text-[#fabc05] p-2 rounded-full transition-all duration-300 border border-border">
                <Instagram size={18} />
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link href="#" className="bg-card hover:bg-background text-muted-foreground hover:text-[#34a853] p-2 rounded-full transition-all duration-300 border border-border">
                <Linkedin size={18} />
                <span className="sr-only">لينكد إن</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-1 after:bg-[#186af2]">روابــط ســريــعــة</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "الــرئــيــســيــة" },
                { href: "/portfolio", label: "مــعــرض الأعــمــال" },
                { href: "/services", label: "خــدمــاتــنــا" },
                { href: "/about", label: "مــن نــحــن" },
                { href: "/contact", label: "اتــصــل بــنــا" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300 flex items-center group">
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-1 after:bg-[#186af2]">خــدمــاتــنــا</h3>
            <ul className="space-y-3">
              {[
                { href: "/services/digital-marketing", label: "التــســويــق الــرقــمــي" },
                { href: "/services/social-media", label: "إدارة وســائــل التــواصــل" },
                { href: "/services/web-development", label: "تــطــويــر المــواقــع" },
                { href: "/services/seo", label: "تــحــســيــن مــحــركــات البــحــث" },
                { href: "/services/branding", label: "الــهــويــة البــصــريــة" }
              ].map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-muted-foreground hover:text-[#186af2] transition-colors duration-300 flex items-center group">
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-12 after:h-1 after:bg-[#186af2]">تــواصــل مــعــنــا</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-background/50 p-2 rounded-md ml-3 border border-border">
                  <Phone className="h-4 w-4 text-[#186af2]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">اتصل بنا</p>
                  <p className="text-foreground">+966 123 456 789</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-background/50 p-2 rounded-md ml-3 border border-border">
                  <Mail className="h-4 w-4 text-[#ea4235]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">البريد الإلكتروني</p>
                  <p className="text-foreground">info@al-fashni.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-background/50 p-2 rounded-md ml-3 border border-border">
                  <MapPin className="h-4 w-4 text-[#fabc05]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">العنوان</p>
                  <p className="text-foreground">الــريــاض، المــمــلــكــة العــربــيــة الســعــوديــة</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} شــركــة الــفــشــنــي للإعــلان والعــلاقــات العــامــة. جــمــيــع الحــقــوق مــحــفــوظــة.
          </p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-[#186af2] text-sm transition-colors duration-300">
              ســيــاســة الخــصــوصــيــة
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-[#186af2] text-sm transition-colors duration-300">
              الشــروط والأحــكــام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

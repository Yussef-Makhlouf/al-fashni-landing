// Types
export type Category = {
  id: string
  name: string
}

// Categories data
export const categories: Category[] = [
  { id: "all", name: "الــكــل" },
  { id: "web-development", name: "تــطــويــر الــويــب" },
  { id: "ecommerce", name: "التــجــارة الإلــكــتــرونــيــة" },
  { id: "digital-marketing", name: "التــســويــق الــرقــمــي" },
  { id: "branding", name: "الــهــويــة البــصــريــة" },
  { id: "advertising", name: "الإعــلان" },
  { id: "seo", name: "تــحــســيــن مــحــركــات البــحــث" },
  { id: "ui-ux", name: "تــصــمــيــم واجــهــات المــســتــخــدم" },
  { id: "content-creation", name: "إنــشــاء المــحــتــوى" },
] 
// Shared project data with slugs for routing
export interface Project {
    slug: string;
    name: string;
    year: string;
    status: string;
    description: string;
    image: string;
    scope: string[];
    // Optional detail fields for rich detail pages
    gallery?: string[];
    plans?: string[];
    apartmentTypes?: {
        type: string;
        size: string;
        count: number;
    }[];
    overview?: string;
}

export const projects: Project[] = [
    {
        slug: "p1",
        name: "30+ Daireli Konut Projesi",
        year: "2023",
        status: "Tamamlandı",
        description: "30'dan fazla daireden oluşan bu konut projemiz, kaliteli inşaat standartları, verimli alan planlaması ve güvenilir teslimat anlayışıyla başarıyla tamamlanmıştır. Sağlam yapısal çözümler ve titiz işçilikle modern yaşam beklentilerini karşılayan bu projemiz, aileler için konforlu ve güvenli yaşam alanları sunmaktadır.",
        image: "/images/projects/project1.jpg",
        scope: [
            "Betonarme Taşıyıcı Sistem",
            "Dış Cephe ve Isı Yalıtımı",
            "İç Mekan Bitirme İşleri",
            "Mekanik ve Elektrik Tesisatı",
            "Şantiye Koordinasyonu"
        ]
    },
    {
        slug: "p2",
        name: "12 Daireli Konut Projesi",
        year: "2024",
        status: "Tamamlandı",
        description: "12 daireden oluşan bu konut yapımız, nitelikli işçilik, fonksiyonel mekan düzeni ve yaşam konforu ön planda tutularak hayata geçirilmiştir. Her detayda kaliteyi yansıtan bu projemiz, sakinlerine modern ve huzurlu bir yaşam ortamı sağlamaktadır.",
        image: "/images/projects/project2.jpg",
        scope: [
            "Yapısal Betonarme İşler",
            "Cephe Kaplama ve Yalıtım",
            "İç Mekan Tesisat ve Elektrik",
            "Zemin Kaplama ve Sıva İşleri",
            "Ortak Alan Düzenlemeleri"
        ]
    },
    {
        slug: "p3",
        name: "64 Daireli Konut Projesi",
        year: "2025",
        status: "Devam Ediyor",
        description: "Modern şehircilik anlayışıyla tasarlanan 64 daireli bu prestijli proje, estetik ve konforu bir araya getiriyor. Yüksek inşaat kalitesi, depreme dayanıklı sağlam zemin yapısı ve birinci sınıf malzeme kullanımıyla güvenli bir gelecek sunuyor. Geniş cam cepheleri, ferah balkonları ve fonksiyonel iç mekan çözümleriyle her detayı özenle düşünülmüş bu yaşam alanı, modern ailenin tüm ihtiyaçlarını karşılıyor.",
        image: "/images/projects/p3/cover.jpg",
        scope: [
            "Betonarme Karkas Sistem",
            "Dış Cephe ve Isı Yalıtımı",
            "İç Mekan Bitirme İşleri",
            "Altyapı ve Tesisat Sistemleri",
            "Peyzaj ve Çevre Düzenlemesi",
            "Şantiye Organizasyonu"
        ],
        overview: "Kentin gelişen bölgesinde yükselen bu projemiz, şu anda yapım aşamasındadır ve hızla ilerlemektedir. Modern mimari çizgileri, sosyal yaşam alanlarına yakınlığı ve yüksek yatırım değeri ile dikkat çeken projemiz, tamamlandığında bölgenin en prestijli konutlarından biri olacaktır.",
        gallery: [
            "/images/projects/p3/interior-1.png",
            "/images/projects/p3/interior-3.png",
            "/images/projects/p3/interior-2.png"
        ],
        plans: [
            "/images/projects/p3/plan-tip1.png"
        ],
        apartmentTypes: [
            {
                type: "2+1 Daireler",
                size: "95 - 110 m²",
                count: 24
            },
            {
                type: "3+1 Daireler",
                size: "135 - 150 m²",
                count: 32
            },
            {
                type: "Dubleks Daireler",
                size: "180 - 210 m²",
                count: 8
            }
        ]
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

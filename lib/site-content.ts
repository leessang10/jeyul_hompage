export type NavigationItem = {
  label: string;
  href: string;
};

export type BrandInfo = {
  koreanName: string;
  englishName: string;
  coreKeyword: string;
  officialHomepageUrl: string;
  address: string;
  phone: string;
  email: string;
  businessType: string;
  businessScope: string;
  license: string;
  registrationNumber: string;
  ceoNames: string[];
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export type HomeHeroMedia = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  scrollCue: string;
  videoSrc?: string;
  posterSrc?: string;
};

export type FeaturedStoryItem = {
  label: string;
  category: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  variant: "residential" | "commercial";
  align: "left" | "right";
};

export type HomeTrustPoint = {
  title: string;
  description: string;
};

export type HomeFinalCta = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export type HomeSection = {
  title: string;
  description: string;
  href: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ResidentialPortfolioItem = {
  title: string;
  location: string;
  date: string;
  area: string;
  projectType: string;
  scope: string;
};

export type CommercialProjectItem = {
  title: string;
  client?: string;
  location?: string;
  description: string;
};

export type CommercialProjectGroup = {
  title: string;
  projects: CommercialProjectItem[];
};

export type PortfolioType = "residential" | "commercial";

export type PortfolioItem = {
  slug: string;
  title: string;
  type: PortfolioType;
  category: string;
  location: string;
  date?: string;
  summary: string;
  metaPrimary: string;
  metaSecondary: string;
  variant: "residential" | "commercial";
};

export type AboutFact = {
  label: string;
  value: string;
};

export type OrganizationDepartment = {
  title: string;
  subtitle: string;
  responsibilities: string[];
};

export type ConstructionArchiveYear = {
  year: string;
  categories: {
    title: string;
    projects: string[];
  }[];
};

export type ContactMetadata = {
  title: string;
  description: string;
  projectTypes: string[];
  address: string;
  phone: string;
  email: string;
  website: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterData = {
  brandLine: string;
  supportLine: string;
  links: FooterLink[];
  legalLinks: FooterLink[];
};

export type SiteContent = {
  brand: BrandInfo;
  companyProfile: {
    businessType: string;
    businessScope: string;
    registrationNumber: string;
    ceoNames: string[];
    history: {
      year: string;
      event: string;
    }[];
  };
  navigation: NavigationItem[];
  hero: HeroContent;
  homeHeroMedia: HomeHeroMedia;
  featuredStories: FeaturedStoryItem[];
  homeSections: HomeSection[];
  processSteps: ProcessStep[];
  residentialPortfolio: ResidentialPortfolioItem[];
  commercialProjectGroups: CommercialProjectGroup[];
  portfolioItems: PortfolioItem[];
  trustPoints: HomeTrustPoint[];
  organization: {
    ceoTitle: string;
    support: OrganizationDepartment;
    departments: OrganizationDepartment[];
  };
  constructionArchive: ConstructionArchiveYear[];
  aboutFacts: AboutFact[];
  contact: ContactMetadata;
  homeFinalCta: HomeFinalCta;
  footer: FooterData;
};

const brand: BrandInfo = {
  koreanName: "제율디앤씨 주식회사",
  englishName: "JEYUL Integrated Construction Management",
  coreKeyword: "Integrated Construction Management",
  officialHomepageUrl: "http://jeyuldnc.com/",
  address: "서울시 노원구 동일로203가길 29, 1341호",
  phone: "02-977-0789",
  email: "3jeyul@gmail.com",
  businessType: "건설업",
  businessScope: "실내건축공사업",
  license: "실내건축공사업 면허",
  registrationNumber: "579-88-03118",
  ceoNames: ["김정식", "김정민"]
};

const companyProfile = {
  businessType: brand.businessType,
  businessScope: brand.businessScope,
  registrationNumber: brand.registrationNumber,
  ceoNames: brand.ceoNames,
  history: [
    {
      year: "2002.11",
      event: "Intheroom 설립 및 LG 데코빌 가맹점 계약"
    },
    {
      year: "2022.12",
      event: "㈜청림디앤비 상호변경"
    },
    {
      year: "2022.12",
      event: "건설업 등록 면허"
    },
    {
      year: "2024.11",
      event: "제율디앤씨 주식회사로 법인전환 및 상호변경"
    }
  ]
};

const homeHeroMedia: HomeHeroMedia = {
  eyebrow: "JEYUL Integrated Construction Management",
  title: "주거와 업무 공간의 완성도를\n관리의 밀도로 만듭니다.",
  description:
    "제율디앤씨는 고급 주거와 기업·오피스 프로젝트를 수행하며, 설계와 공정, 품질을 하나의 흐름으로 관리합니다.",
  primaryCta: "프로젝트 상담하기",
  secondaryCta: "대표 프로젝트 보기",
  scrollCue: "SCROLL"
};

const featuredStories: FeaturedStoryItem[] = [
  {
    label: "Featured Project 01",
    category: "Residential",
    title: "오래 머물수록 디테일이 드러나는 집",
    description:
      "동선, 수납, 재료, 마감의 균형을 정리해 생활의 밀도가 자연스럽게 쌓이는 주거 공간을 만듭니다.",
    meta: "Premium Residential Interior",
    href: "/portfolio?type=residential",
    variant: "residential",
    align: "right"
  },
  {
    label: "Featured Project 02",
    category: "Commercial",
    title: "운영까지 고려해야 완성되는 기업 공간",
    description:
      "기업·오피스 프로젝트의 목적에 맞춰 일정, 예산, 공정, 품질, 현장 커뮤니케이션을 구조적으로 관리합니다.",
    meta: "Office / Corporate Project",
    href: "/portfolio?type=commercial",
    variant: "commercial",
    align: "left"
  }
];

const contact: ContactMetadata = {
  title: "프로젝트 상담",
  description: "주거 인테리어부터 오피스, 기업 시설, 리모델링까지 프로젝트 성격에 맞춰 상담해 드립니다.",
  projectTypes: ["주거", "오피스", "생산/연구시설", "리테일", "기타"],
  address: brand.address,
  phone: brand.phone,
  email: brand.email,
  website: brand.officialHomepageUrl
};

const aboutFacts: AboutFact[] = [
  { label: "회사명", value: brand.koreanName },
  { label: "영문명", value: brand.englishName },
  { label: "업태", value: companyProfile.businessType },
  { label: "종목", value: companyProfile.businessScope },
  { label: "면허", value: brand.license },
  { label: "사업자등록번호", value: companyProfile.registrationNumber }
];

const trustPoints: HomeTrustPoint[] = [
  {
    title: "ICM 기반 통합 공사관리",
    description: "기획부터 공정, 품질, 보고까지 하나의 체계로 연결해 관리합니다."
  },
  {
    title: "주거와 기업 프로젝트 수행 범위",
    description: "프리미엄 주거와 기업·오피스 현장을 모두 수행하는 균형 잡힌 포트폴리오를 보유합니다."
  },
  {
    title: "실내건축공사업 면허 보유",
    description: "정식 등록 기반으로 프로젝트의 신뢰와 책임 범위를 분명하게 갖춥니다."
  },
  {
    title: "설계 이후까지 이어지는 운영 체계",
    description: "시공 중 대응부터 마감 이후 관리까지 운영의 흐름을 안정적으로 이어갑니다."
  }
];

const homeFinalCta: HomeFinalCta = {
  title: "다음 프로젝트는\n잘 보이는 제안보다\n잘 관리되는 현장에서 시작되어야 합니다.",
  description:
    "주거 인테리어부터 오피스, 기업 시설, 리모델링까지 제율디앤씨가 실행 가능한 방향부터 제안합니다.",
  primaryCta: "상담 문의 남기기",
  secondaryCta: "회사소개 보기"
};

const organization = {
  ceoTitle: "대표이사 CEO",
  support: {
    title: "경영지원팀",
    subtitle: "Management Support",
    responsibilities: ["총무 / 재무 / 회계", "Financial Accounting"]
  },
  departments: [
    {
      title: "설계팀",
      subtitle: "Design Team",
      responsibilities: ["인테리어 디자인", "기획설계 및 실시설계"]
    },
    {
      title: "공무팀",
      subtitle: "Public Affairs",
      responsibilities: ["견적업무", "외주관리"]
    },
    {
      title: "공사팀",
      subtitle: "Construction Team",
      responsibilities: ["공사관리", "품질관리 및 A/S"]
    }
  ]
};

const constructionArchive: ConstructionArchiveYear[] = [
  {
    year: "2025",
    categories: [
      {
        title: "OFFICE",
        projects: [
          "LG화학 오산 리더쉽센터 리뉴얼 공사",
          "LG사이언스파크 LX하우시스동 카페테리아 조성공사",
          "SK하이닉스 중앙식당 1층 입구 및 지하 환경개선공사",
          "롯데백화점 에비뉴엘 17층 오피스 회의실 조성공사",
          "TKG태광 김해공장 본관 신축공사"
        ]
      },
      {
        title: "HOUSE",
        projects: [
          "강남구 압구정동 한양8차 아파트",
          "서초구 잠원동 래미안 신반포 팰리스",
          "강남구 압구정동 현대 6차 아파트"
        ]
      }
    ]
  },
  {
    year: "2024",
    categories: [
      {
        title: "OFFICE",
        projects: [
          "LG화학 대산사택 웰빙센터 신축공사",
          "LG화학 대산사택 패밀리센터 E-SPORTS BAR 리모델링 공사",
          "LG화학 대산사택 104동 기숙사 리모델링 공사",
          "LG화학 여수 용성관 식당 리모델링 공사",
          "LG화학 청주공장 신설 교육장 조성 설계용역",
          "LG화학 오산 리더십센터 별관동, 숙소동 설계용역",
          "LG광화문빌딩 LX인터내셔널 6,7층 사무실 개선공사",
          "SK하이닉스 이천캠퍼스 청운기숙사 6관 입입소 공사",
          "SK하이닉스 이천캠퍼스 협력2관 일환경건강센터 구축 설계용역"
        ]
      },
      {
        title: "HOUSE",
        projects: [
          "기장 일광역 디퍼스트 오션뷰",
          "용산구 한강로2가 용산 푸르지오 써밋 아파트",
          "영등포구 여의도동 트럼프월드 2차",
          "영등포구 여의도동 삼부아파트"
        ]
      }
    ]
  },
  {
    year: "2023",
    categories: [
      {
        title: "OFFICE",
        projects: [
          "LG화학 여수공장 Y2C 본관동 신축공사",
          "어반이스 오피스 인테리어 공사",
          "LG광화문빌딩 LX홀딩스 사무실 조성공사",
          "LG광화문빌딩 LX인터내셔널 사무실 조성공사",
          "SK하이닉스 하이라운지 휴게실 설계 용역",
          "LG화학 여수공장 통합조정동 NCC사무실 환경개선 공사",
          "LOTTE 본점 에비뉴엘 11층 설계용역"
        ]
      },
      {
        title: "HOUSE",
        projects: [
          "기장 일광역 디퍼스트 오션뷰",
          "검단역 법조타운 리슈빌S 오피스텔",
          "청량리 범양라우스 씨엘로네"
        ]
      },
      {
        title: "MART",
        projects: [
          "롯데마트 여수점 환경개선공사 설계 용역",
          "롯데마트 파주점 환경개선공사 설계 용역",
          "롯데마트 구리점 환경개선공사 설계 용역",
          "롯데마트 광주수완점 환경개선공사 설계 용역"
        ]
      }
    ]
  },
  {
    year: "2022",
    categories: [
      {
        title: "OFFICE",
        projects: ["LG생활건강 청주 T/P프로젝트"]
      },
      {
        title: "HOUSE",
        projects: ["장위 지웰 에스테이트", "검단역 법조타운 리슈빌S", "동대문구 신설동 G WELL"]
      },
      {
        title: "EDUCATION",
        projects: ["부천 중흥초등학교 도서관 인테리어 공사"]
      },
      {
        title: "MART",
        projects: [
          "롯데마트 삼산점 환경개선공사 설계 용역",
          "롯데마트 청림리점 환경개선공사 설계 용역",
          "롯데마트 동부산점 환경개선공사 설계 용역",
          "롯데마트 권선점 환경개선공사 설계 용역",
          "롯데마트 마장휴게소점 환경개선공사 설계 용역",
          "롯데마트 종계점 환경개선공사 설계 용역",
          "롯데마트 광복점 환경개선공사 설계 용역"
        ]
      }
    ]
  },
  {
    year: "2021",
    categories: [
      {
        title: "OFFICE",
        projects: [
          "LG SP ISC 3F 융복합존 리뉴얼 공사",
          "쇼호, 인벤트 도원사택 컨테너 화장실 공사",
          "LG화학 대산공장 사택 복지시설 개선공사",
          "CJ제일제당 진천공장 본관동 1,2층 인테리어공사",
          "LG화학 대산 휴메연구개발센터 연구동 신축공사",
          "헬스테이트 건대스 레이크뷰 커뮤니티 공사",
          "SK Hynix MASK FAB, M8, P&T2 확장집 공사",
          "SK Hynix 인력개발원 VR체험관 인테리어 설계"
        ]
      },
      {
        title: "HOUSE",
        projects: [
          "부천 신중동역 팬드마크 푸르지오시티",
          "파주 힐데스하임 케벨라스",
          "사천 KCC Switzen 아파트",
          "광명일직휴먼 클래스티"
        ]
      }
    ]
  },
  {
    year: "2020",
    categories: [
      {
        title: "OFFICE",
        projects: [
          "LG사이언스파크 마곡 DP3 LGHS 인테리어공사",
          "LG사이언스파크 마곡 하우시스 디자인센터",
          "LG화학 대산공장 사택 영어강의실 리모델링공사",
          "LG화학 대산공장 POE 자동화창고 신축공사",
          "어반이스 파트너스 사무실 공사",
          "헤이데 오피스 인테리어 공사",
          "플루스 창안빌딩 사무동 및 경비동 인테리어 공사",
          "LG화학 대산공장 SBR NBR 제품동 리모델링공사",
          "SK하이닉스 M15 사옥룸 인테리어 공사",
          "SK하이닉스 M14 3F ROS Room 인테리어공사",
          "LG화학 대산공장 사택 109동 1층 주민환경공간 조성공사",
          "SK하이닉스 이천 인력개발원 벤처사무실 및 강사휴게실 조성공사"
        ]
      },
      {
        title: "HOUSE",
        projects: ["구미 힐스테이트", "베스트웨스턴 플러스 전주호텔", "광명일직휴먼 클래스티 지식산업센터 기숙사"]
      }
    ]
  },
  {
    year: "2014",
    categories: [
      {
        title: "OFFICE",
        projects: [
          "청주 L-프로젝트 공사",
          "공장기계제관 6,7층 인테리어 공사",
          "한국 샌드빅(주)코오만트 사무실 공사",
          "LG하우시스 옥산공장 행정동 인테리어 공사",
          "삼우금형 당진 사택 인테리어 공사",
          "LG화학 천연빌딩 38층 인테리어 공사"
        ]
      },
      {
        title: "MODEL HOUSE",
        projects: [
          "천안 오엔 시티 호텔 모델하우스",
          "아크로텔 강남역 모델하우스",
          "종로 아르젠 모델 하우스",
          "제주 연동 하워드 존슨 호텔",
          "현대 힐스테이트 에코 마곡나루역 모델하우스"
        ]
      }
    ]
  },
  {
    year: "2013",
    categories: [
      {
        title: "OFFICE",
        projects: [
          "LG디스플레이 파주 R&D센터 LOBBY 개선 공사",
          "LG화학 대산공장 사내 내 복지시설 리모델링공사",
          "SK 하이닉스 이천 SCM실",
          "LG전자 구미1공장 환경개선 공사",
          "LG CNS 여의도 전경련 회관 25F 임원 ZONE",
          "LG CNS 여의도 전경련 회관 4F 어린이집",
          "포스코 센터 빌딩 화장실 환경개선 공사",
          "LG화학 오창 1공장 연구소",
          "삼성토탈 복지시설 환경개선 공사",
          "TIMSDECO 사옥 공사",
          "LG전자 가산동 목형 클래스티 인테리어 공사"
        ]
      },
      {
        title: "MODEL HOUSE",
        projects: ["강남 아르젠 견본주택 건립공사"]
      },
      {
        title: "COMMERCIAL",
        projects: ["더조커피 대구 테마파크점"]
      }
    ]
  },
  {
    year: "~2002",
    categories: [
      {
        title: "OFFICE",
        projects: [
          "LG트윈타워빌딩 리모델링공사 LG화학 ZONE (9개층)",
          "IFC 13,14층 LG화학 ZONE 공사 기본계획 및 실시설계",
          "LG INNOTEK OFFICE 19,20F",
          "DSQUARE 전시장",
          "M&SOFT MAPPY&GINI 고객센터 방배점",
          "GK빌딩 사무소 외 다수"
        ]
      },
      {
        title: "RESIDENCE",
        projects: [
          "ALOFT HOTEL 기획설계",
          "양재 신동아 빌라 40PY 본당 목련타운빌라 34PY 외 다수"
        ]
      },
      {
        title: "COMMERCIAL",
        projects: ["수지 에스클라나드", "거리그라나 생동한의원, 한남동점, 홍대UCC점 외 다수"]
      },
      {
        title: "CLINIC",
        projects: ["동대문 밀리오레 BLT CLINIC", "다사랑한의원 외 다수"]
      }
    ]
  }
];

const residentialPortfolio: ResidentialPortfolioItem[] = [
  {
    title: "강남구 압구정동 한양8차아파트",
    location: "강남구 압구정동",
    date: "2025.11",
    area: "67평",
    projectType: "아파트",
    scope: "아파트 67평 인테리어공사"
  },
  {
    title: "서초구 잠원동 래미안신반포팰리스",
    location: "서초구 잠원동",
    date: "2025.07",
    area: "51평",
    projectType: "아파트",
    scope: "아파트 51평 인테리어공사"
  },
  {
    title: "강남구 압구정동 현대6차아파트",
    location: "강남구 압구정동",
    date: "2025.03",
    area: "51평",
    projectType: "아파트",
    scope: "아파트 51평 인테리어공사"
  },
  {
    title: "용산구 한강로2가 용산푸르지오써밋아파트",
    location: "용산구 한강로2가",
    date: "2024.10",
    area: "51평",
    projectType: "아파트",
    scope: "아파트 51평 인테리어공사"
  },
  {
    title: "영등포구 여의도동 트럼프월드2차",
    location: "영등포구 여의도동",
    date: "2024.05",
    area: "68평",
    projectType: "아파트",
    scope: "아파트 68평 인테리어공사"
  },
  {
    title: "영등포구 여의도동 삼부아파트",
    location: "영등포구 여의도동",
    date: "2024.03",
    area: "60평",
    projectType: "아파트",
    scope: "아파트 60평 인테리어공사"
  }
];

const commercialProjectGroups: CommercialProjectGroup[] = [
  {
    title: "오피스",
    projects: [
      {
        title: "LG화학 오산 리더쉽센터 리뉴얼공사",
        client: "LG화학",
        description: "리더쉽센터 리뉴얼"
      },
      {
        title: "LG사이언스파크 LX하우시스동 카페테리아 조성공사",
        client: "LG사이언스파크",
        description: "카페테리아 조성"
      },
      {
        title: "SK하이닉스 중앙식당 1층 입구 및 지하 환경개선공사",
        client: "SK하이닉스",
        description: "식당 입구 및 지하 환경개선"
      },
      {
        title: "롯데백화점 에비뉴엘 17층 오피스 회의실 조성공사",
        client: "롯데백화점",
        description: "오피스 회의실 조성"
      }
    ]
  },
  {
    title: "생산/연구시설",
    projects: [
      {
        title: "TKG태광 김해공장 본관 신축공사",
        client: "TKG태광",
        location: "김해",
        description: "본관 신축"
      },
      {
        title: "LG화학 여수공장 Y2C 본관동 신축공사",
        client: "LG화학",
        location: "여수",
        description: "본관동 신축"
      },
      {
        title: "LG화학 대산공장 사택 웰빙센터 신축공사",
        client: "LG화학",
        location: "대산",
        description: "사택 웰빙센터 신축"
      },
      {
        title: "SK하이닉스 이천캠퍼스 협력2관 일환경건강센터 구축설계용역",
        client: "SK하이닉스",
        location: "이천",
        description: "일환경건강센터 구축설계"
      }
    ]
  },
  {
    title: "리테일/상업",
    projects: [
      {
        title: "롯데마트 여수점 환경개선공사 설계용역",
        client: "롯데마트",
        location: "여수",
        description: "환경개선공사 설계용역"
      },
      {
        title: "롯데마트 파주점 환경개선공사 설계용역",
        client: "롯데마트",
        location: "파주",
        description: "환경개선공사 설계용역"
      },
      {
        title: "롯데마트 구리점 환경개선공사 설계용역",
        client: "롯데마트",
        location: "구리",
        description: "환경개선공사 설계용역"
      },
      {
        title: "롯데마트 광주수완점 환경개선공사 설계용역",
        client: "롯데마트",
        location: "광주수완",
        description: "환경개선공사 설계용역"
      }
    ]
  },
  {
    title: "기타 수행 실적",
    projects: [
      {
        title: "LG생활건강 청주 T/P 프로젝트",
        client: "LG생활건강",
        location: "청주",
        description: "T/P 프로젝트"
      },
      {
        title: "부천중흥초등학교 도서관 인테리어공사",
        client: "부천중흥초등학교",
        location: "부천",
        description: "도서관 인테리어공사"
      },
      {
        title: "LG화학 청주공장 신설 교육장 조성 설계용역",
        client: "LG화학",
        location: "청주",
        description: "신설 교육장 조성 설계용역"
      },
      {
        title: "M&SOFT MAPPY&GINI 고객센터 방배점",
        client: "M&SOFT",
        location: "방배",
        description: "고객센터 방배점"
      }
    ]
  }
];

const portfolioItems: PortfolioItem[] = [
  ...residentialPortfolio.map((project, index) => ({
    slug: `residential-${index + 1}`,
    title: project.title,
    type: "residential" as const,
    category: "주거",
    location: project.location,
    date: project.date,
    summary: project.scope,
    metaPrimary: project.area,
    metaSecondary: project.projectType,
    variant: "residential" as const
  })),
  ...commercialProjectGroups.flatMap((group, groupIndex) =>
    group.projects.map((project, projectIndex) => ({
      slug: `commercial-${groupIndex + 1}-${projectIndex + 1}`,
      title: project.title,
      type: "commercial" as const,
      category: group.title,
      location: project.location ?? "복수 현장",
      summary: project.description,
      metaPrimary: project.client ?? "Corporate",
      metaSecondary: group.title,
      variant: "commercial" as const
    }))
  )
];

export const siteContent: SiteContent = {
  brand,
  companyProfile,
  navigation: [
    { label: "홈", href: "/" },
    { label: "제율의 방식", href: "/process" },
    { label: "포트폴리오", href: "/portfolio" },
    { label: "회사소개", href: "/about" },
    { label: "문의", href: "/contact" }
  ],
  hero: {
    eyebrow: "JEYUL D&C",
    title: "주거와 기업 공간,\n제율은 기획부터 완공까지 함께합니다.",
    description:
      "설계와 시공, 공정과 품질을 함께 살피며 오래 신뢰할 수 있는 공간을 만듭니다.",
    primaryCta: "프로젝트 상담하기",
    secondaryCta: "제율의 방식 보기"
  },
  homeHeroMedia,
  featuredStories,
  homeSections: [
    {
      title: "주거 포트폴리오",
      description: "최근 주거 프로젝트를 중심으로 공간의 밀도와 디테일을 확인하실 수 있습니다.",
      href: "/portfolio?type=residential"
    },
    {
      title: "제율의 공사관리 방식",
      description: "기획, 공정, 원가, 품질을 어떤 체계로 연결하는지 확인하실 수 있습니다.",
      href: "/process"
    },
    {
      title: "기업 및 오피스 실적",
      description: "기업과 오피스 프로젝트에서 쌓아온 주요 수행 경험을 확인하실 수 있습니다.",
      href: "/portfolio?type=commercial"
    }
  ],
  processSteps: [
    {
      title: "기획 및 설계",
      description: "요구사항을 구조화하고 설계와 시공 사이의 간극을 줄입니다."
    },
    {
      title: "자재/인력/장비 통합관리",
      description: "발주, 납기, 재고, 배치를 하나의 흐름으로 관리합니다."
    },
    {
      title: "공정 관리",
      description: "일정 변동을 빠르게 파악하고 대응합니다."
    },
    {
      title: "원가 및 예산 관리",
      description: "예산 집행과 단가 변동을 명확하게 추적합니다."
    },
    {
      title: "품질 및 안전 관리",
      description: "체크리스트와 교육 체계로 품질과 안전 기준을 유지합니다."
    },
    {
      title: "커뮤니케이션/보고 체계",
      description: "협력사와 클라이언트 간 보고 흐름을 명확하게 정리합니다."
    },
    {
      title: "디지털화",
      description: "BIM, ERP, 클라우드 기반으로 협업 효율을 높입니다."
    }
  ],
  residentialPortfolio,
  commercialProjectGroups,
  portfolioItems,
  trustPoints,
  organization,
  constructionArchive,
  aboutFacts,
  contact,
  homeFinalCta,
  footer: {
    brandLine: brand.koreanName,
    supportLine: brand.englishName,
    links: [
      { label: "제율의 방식", href: "/process" },
      { label: "포트폴리오", href: "/portfolio" },
      { label: "회사소개", href: "/about" },
      { label: "문의", href: "/contact" }
    ],
    legalLinks: [
      { label: "공식 홈페이지", href: brand.officialHomepageUrl },
      { label: "이메일", href: `mailto:${brand.email}` }
    ]
  }
};

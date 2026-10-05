// Single source of truth for business facts shown on the site.
// Only facts confirmed by the owner belong here.
export const SITE = {
  name: "Sakthi Enterprises",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sakthienterprises.vercel.app",
  founded: 1999,
  projects: "500+",
  phone: "+91 98400 62692",
  phoneHref: "tel:+919840062692",
  phone2: "+91 98408 79504",
  phone2Href: "tel:+919840879504",
  whatsappHref:
    "https://wa.me/919840062692?text=" +
    encodeURIComponent(
      "Hello Sakthi Enterprises, I need scaffolding on rent. Site location: "
    ),
  email: "sakthienterprises1999@gmail.com",
  address:
    "45MV+9J3, Kadappa Rd, Subhash Nagar, Sakthi Nagar, Lakshmipuram, Chennai, Tamil Nadu 600080",
  hours: "Open 24 hours",
  // Google Business Profile ("SAKTHI ENTERPRISES"). Keep address/name/phone identical to the profile.
  googleProfile: "https://www.google.com/maps?cid=10005080303571878419",
  geo: { lat: "13.1333843", lng: "80.1940493" },
  rentalPath: "/scaffolding-on-rent-in-chennai",
} as const;

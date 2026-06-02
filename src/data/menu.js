export const productImages = {
  dimsumOriginal: "/images/dimsum-original.jpg",
  dimsumMentai: "/images/dimsum-mentai.jpg",
  dimsumTartar: "/images/dimsum-tartar.jpeg",
  dimsumMix: "/images/dimsum-mix.jpg",
  dimsumMentaiCakalang: "/images/dimsum-mentai-cakalang.jpg",
  dimsumMentaiHotLava: "/images/dimsum-hot-lava.jpg",
  kebabMiniOriginal: "/images/kebab-mini-original.jpg",
  kebabMiniMozza: "/images/kebab-mini-mozza.jpg",
  matchaCheeseMilk: "/images/matcha-cheese-milk.jpg",
  esTehSolo: "/images/es-teh-solo.jpg",
  thaiTea: "/images/thai-tea.jpg",
  galleryOriginal: "/images/gallery/gallery(1).jpg",
  galleryMentai: "/images/gallery/gallery(4).jpg",
  galleryMix: "/images/gallery/gallery(5).jpg"
};

export const menu = [
  {
    name: "Dimsum Original",
    description: "Dimsum klasik dengan rasa gurih dan tekstur lembut.",
    detailDescription:
      "Varian paling aman untuk semua selera. Isian ayamnya gurih, teksturnya lembut, dan cocok dinikmati dengan chili oil atau saus favorit.",
    price3: 11000,
    price6: 20000,
    price16: 50000,
    category: "dimsum",
    tags: ["dimsum"],
    badge: "Best Seller",
    image: productImages.dimsumOriginal
  },
  {
    name: "Dimsum Mentai",
    description: "Dimsum dengan saus mentai creamy dan aroma panggang.",
    detailDescription:
      "Dimsum lembut dengan topping mentai yang creamy, gurih, dan sedikit smoky. Cocok buat kamu yang suka rasa rich tanpa terlalu pedas.",
    price3: 13000,
    price6: 25000,
    price16: 85000,
    category: "dimsum",
    tags: ["dimsum", "mentai"],
    badge: "Creamy",
    image: productImages.dimsumMentai
  },
  {
    name: "Dimsum Tartar",
    description: "Dimsum gurih dengan saus tartar yang segar.",
    detailDescription:
      "Perpaduan dimsum gurih dengan saus tartar yang creamy dan segar. Rasanya lebih ringan, cocok untuk camilan sore atau sharing bareng teman.",
    price3: 13000,
    price6: 25000,
    price16: 85000,
    category: "dimsum",
    tags: ["dimsum"],
    image: productImages.dimsumTartar
  },
  {
    name: "Dimsum Mix",
    description: "Paket campuran untuk coba beberapa varian favorit.",
    detailDescription:
      "Pilihan praktis kalau ingin coba beberapa rasa sekaligus. Cocok untuk pesanan pertama, sharing keluarga, atau teman yang seleranya beda-beda.",
    price3: 13000,
    price6: 25000,
    price16: 85000,
    category: "dimsum",
    tags: ["dimsum"],
    image: productImages.dimsumMix
  },
  {
    name: "Dimsum Mentai Cakalang",
    description: "Dimsum mentai dengan topping cakalang yang gurih.",
    detailDescription:
      "Varian mentai dengan sentuhan cakalang yang gurih dan aromatik. Rasa creamy mentai jadi lebih savory dan punya karakter yang beda.",
    price3: 13000,
    price6: 25000,
    price16:85000,    
    category: "dimsum",
    tags: ["dimsum", "mentai"],
    image: productImages.dimsumMentaiCakalang
  },
  {
    name: "Dimsum Hot Lava",
    description: "Dimsum dengan sensasi pedas untuk pencinta spicy.",
    detailDescription:
      "Pilihan untuk pencinta pedas. Saus hot lava memberi rasa pedas gurih yang nendang, tetap creamy, dan paling pas dimakan selagi hangat.",
    price3: 13000,
    price6: 25000,
    category: "dimsum",
    tags: ["dimsum", "mentai", "pedas"],
    badge: "Pedas",
    image: productImages.dimsumMentaiHotLava
  },
  {
    name: "Kebab Mini Original",
    description: "Kebab mini dengan rasa gurih klasik.",
    detailDescription:
      "Kebab mini dengan isian gurih yang simpel dan cocok buat camilan cepat. Pas untuk yang suka rasa original tanpa topping berlebih.",
    price1: 5500,
    price5: 25000,
    category: "kebab",
    tags: ["kebab"],
    image: productImages.kebabMiniOriginal
  },
  {
    name: "Kebab Mini Mozza",
    description: "Kebab mini dengan keju mozza yang lumer.",
    detailDescription:
      "Kebab mini dengan topping mozza yang lumer dan gurih. Cocok buat yang mau camilan lebih rich dan cheesy.",
    price1: 6500,
    price5: 30000,
    category: "kebab",
    tags: ["kebab", "keju"],
    badge: "Cheesy",
    image: productImages.kebabMiniMozza
  }
];

export const drinkMenu = [
  {
    name: "Matcha Cheese Milk",
    description: "Minuman matcha creamy dengan sentuhan cheese milk.",
    detailDescription:
      "Matcha creamy dengan cheese milk yang lembut. Rasanya manis, segar, dan cocok untuk menyeimbangkan menu mentai atau pedas.",
    price: 10000,
    category: "minuman",
    tags: ["minuman"],
    image: productImages.matchaCheeseMilk
  },
  {
    name: "Es Teh Solo",
    description: "Es Teh Solo manis creamy untuk teman makan dimsum.",
    detailDescription:
      "Es Teh Solo dengan rasa teh yang khas, manis, dan creamy. Pas untuk teman makan dimsum mentai atau menu pedas.",
    price: 5000,
    category: "minuman",
    tags: ["minuman"],
    image: productImages.esTehSolo
  }
];

export const toppings = ["Keju Slice", "Abon Ayam", "Chili Oil"];

export const gallery = [
  {
    title: "",
    image: productImages.galleryOriginal
  },
  {
    title: "",
    image: productImages.galleryMentai
  },
  {
    title: "",
    image: productImages.galleryMix
  },
  {
    title: "",
    image: productImages.matchaCheeseMilk
  }
];

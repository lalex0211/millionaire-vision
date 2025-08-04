function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  const translations = {
    fr: {
      welcome: "Bienvenue sur notre boutique 3D",
      description: "Découvrez notre collection et personnalisez vos vêtements en 3D !",
      shop: "Boutique",
      custom: "Personnaliser",
      our_products: "Nos Produits",
      tshirt_white: "T-shirt blanc",
      buy: "Acheter",
      customize: "Personnalisez votre vêtement",
      color: "Couleur :",
      size: "Taille :",
      all_rights: "Tous droits réservés."
    },
    en: {
      welcome: "Welcome to our 3D shop",
      description: "Explore our collection and customize your clothes in 3D!",
      shop: "Shop",
      custom: "Customize",
      our_products: "Our Products",
      tshirt_white: "White T-shirt",
      buy: "Buy",
      customize: "Customize your clothing",
      color: "Color:",
      size: "Size:",
      all_rights: "All rights reserved."
    }
  };

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

function addToCart(product) {
  alert(product + " ajouté au panier !");
}

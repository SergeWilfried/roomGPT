export type themeType =
  | "Modern"
  | "Vintage"
  | "Minimalist"
  | "Professional"
  | "Tropical"
  | "Industrial"
  | "Neoclassic";

export type roomType =
  | "Living Room"
  | "Dining Room"
  | "Bedroom"
  | "Bathroom"
  | "Office"
  | "Kitchen"
  | "RoofTop"
  | "Shop"
  | "Store"
  | "Basement"
  | "Restaurant"
  | "Outdoor Patio"
  | "Gaming Room";

export const themes: themeType[] = [
  "Modern",
  "Minimalist",
  "Professional",
  "Tropical",
  "Vintage",
  "Industrial",
  "Neoclassic",
];
export const rooms: roomType[] = [
  "Living Room",
  "Dining Room",
  "Office",
  "Bedroom",
  "Bathroom",
  "Basement",
  "RoofTop",
  "Restaurant",
  "Shop",
  "Store",
  "Kitchen",
  "Gaming Room",
  "Outdoor Patio",
];

export type themeTypeFr =
  | "Moderne"
  | "Vintage"
  | "Minimaliste"
  | "Professionnel"
  | "Tropical"
  | "Industriel"
  | "Néoclassique";

export type roomTypeFr =
  | "Living Room"
  | "Salon"
  | "Salle à manger"
  | "Bureau"
  | "Chambre"
  | "Salle de bain"
  | "Sous-sol"
  | "RoofTop"
  | "Restaurant"
  | "Boutique"
  | "Magasin"
  | "Cuisine"
  | "Salle de jeux"
  | "Patio extérieur";

export const themesFr: themeTypeFr[] = [
  "Moderne",
  "Minimaliste",
  "Professionnel",
  "Tropical",
  "Vintage",
  "Industriel",
  "Néoclassique",
];
export const roomsFr: roomTypeFr[] = [
  "Salon",
  "Salle à manger",
  "Bureau",
  "Chambre",
  "Salle de bain",
  "Sous-sol",
  "RoofTop",
  "Restaurant",
  "Boutique",
  "Magasin",
  "Cuisine",
  "Salle de jeux",
  "Patio extérieur",
];



export function getRoomType(room: roomTypeFr): roomType {
  let response: roomType = "Office";
  switch (room) {
    case "Salon":
      response = "Living Room";
      break;
    case "Salle à manger":
      response = "Dining Room";
      break;
    case "Bureau":
      response = "Office";
      break;
    case "Chambre":
      response = "Bedroom";
      break;
    case "Salle de bain":
      response = "Bathroom";
      break;
    case "Sous-sol":
      response = "Basement";
      break;
    case "RoofTop":
      response = "RoofTop";
      break;
    case "Restaurant":
      response = "Restaurant";
      break;
    case "Boutique":
      response = "Shop";
      break;
    case "Magasin":
      response = "Store";
      break;
    case "Cuisine":
      response = "Kitchen";
      break;
    case "Salle de jeux":
      response = "Gaming Room";
      break;
    case "Patio extérieur":
      response = "Outdoor Patio";
      break;

    default: 
      response = "Office";
      break;
  };
  return response;
}

export function getRoomTheme(theme: themeTypeFr): themeType {
  let response : themeType = "Modern";
  switch (theme) {
    case "Moderne":
      response = "Modern";
      break;
    case "Vintage":
      response = "Vintage";
      break;
    case "Minimaliste":
      response = "Minimalist";
      break;
    case "Professionnel":
      response = "Professional";
      break;
    case "Tropical":
      response = "Tropical";
      break;
    case "Industriel":
      response = "Industrial";
      break;
    case "Néoclassique":
      response = "Neoclassic";
      break;
    default:
      response = "Modern";
      break;
  }
  return response;
}
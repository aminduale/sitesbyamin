import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Load external fonts
const fontLinks = [
  document.createElement("link"),
  document.createElement("link"),
  document.createElement("link"),
];

fontLinks[0].rel = "preconnect";
fontLinks[0].href = "https://fonts.googleapis.com";

fontLinks[1].rel = "preconnect";
fontLinks[1].href = "https://fonts.gstatic.com";
fontLinks[1].crossOrigin = "";

fontLinks[2].rel = "stylesheet";
fontLinks[2].href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap";

// Add Font Awesome
const fontAwesome = document.createElement("link");
fontAwesome.rel = "stylesheet";
fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";

// Add elements to head
fontLinks.forEach(link => document.head.appendChild(link));
document.head.appendChild(fontAwesome);

// Set page title
document.title = "SitesByAmin - Professional Web Design & Development Services";

// Add meta description
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Professional web design services for cafes, fitness centers, and real estate businesses in Nairobi, Kenya. Custom websites that elevate your online presence.";
document.head.appendChild(metaDescription);

createRoot(document.getElementById("root")!).render(<App />);

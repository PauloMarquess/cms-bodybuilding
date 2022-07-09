import { icons, images } from "../assets";

export const socialMedia = [
  { name: "facebook", icons: icons.facebook, link: "#" },
  { name: "instagram", icons: icons.instagram, link: "#" },
  { name: "twiter", icons: icons.twiter, link: "#" },
  { name: "youtube", icons: icons.youtube, link: "#" },
];

export const StarMaped = [1, 2, 3, 4, 5].map(() => (
  <img src={icons.Star} alt="star" />
));

export const ClientsMocks = [
  { name: "jorge", img: images.Jorge },
  { name: "jeredy", img: images.Jeredy },
  { name: "sebastiao", img: images.Sebastiao },
];

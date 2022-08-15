import { icons } from "../assets";
import { i18n } from "../translate/i18n.js";
import { images } from "../assets";

export const navigation = [
  {
    name: `${i18n.t("navigation.home")}`,
    link: "#home",
  },
  {
    name: `${i18n.t("navigation.mission")}`,
    link: "#mission",
    desktop: 100,
    mobile: 100,
  },
  {
    name: `${i18n.t("navigation.team")}`,
    link: "#team",
    desktop: 100,
    mobile: 100,
  },
  {
    name: `${i18n.t("navigation.plan")}`,
    link: "#plans",
    desktop: 90,
    mobile: 100,
  },
  {
    name: `${i18n.t("navigation.contact")}`,
    link: "#contact",
    mobile: 100,
  },
];

export const objective = [
  { name: `${i18n.t("mission.objective.one")}` },
  { name: `${i18n.t("mission.objective.two")}` },
  { name: `${i18n.t("mission.objective.three")}` },
  { name: `${i18n.t("mission.objective.four")}` },
];

export const team = [
  {
    id: "charles",
    name: "Charles Mário ",
    functionTeacher: `${i18n.t("team.teacher.one.functionTeacher")}`,
    image: images.charles,
  },
  {
    id: "harley",
    name: "Harlley Soares  ",
    functionTeacher: `${i18n.t("team.teacher.four.functionTeacher")}`,
    image: images.harley,
  },

  {
    id: "vinicius",
    name: "Vinicius da Silva ",
    functionTeacher: `${i18n.t("team.teacher.third.functionTeacher")}`,
    image: images.vinicius,
  },
  {
    id: "monica",
    name: " Monika Kimura ",
    functionTeacher: `${i18n.t("team.teacher.two.functionTeacher")}`,
    image: images.monica,
  },
  {
    id: "janaina",
    name: "Janaina de Souza  ",
    functionTeacher: `${i18n.t("team.teacher.four.functionTeacher")}`,
    image: images.janaina,
  },

  {
    id: "aline",
    name: "Aline Alvernaz   ",
    functionTeacher: `${i18n.t("team.teacher.four.functionTeacher")}`,
    image: images.aline,
  },
];

export const plans = [
  {
    legend: `${i18n.t("plans.basic.legend")}`,
    price: `${i18n.t("plans.basic.price")}`,
    month: `${i18n.t("plans.basic.month")}`,
    subtitle: `${i18n.t("plans.basic.subtitle")}`,
    link: "Paulinho_marques2012@hotmail.com",
    benefits: [
      { name: `${i18n.t("plans.basic.benefits.one")}` },
      { name: `${i18n.t("plans.basic.benefits.two")}` },
      { name: `${i18n.t("plans.basic.benefits.three")}` },
      { name: `${i18n.t("plans.basic.benefits.four")}` },
    ],
  },
  {
    legend: `${i18n.t("plans.silver.legend")}`,
    price: `${i18n.t("plans.silver.price")}`,
    month: `${i18n.t("plans.silver.month")}`,
    subtitle: `${i18n.t("plans.silver.subtitle")}`,
    destak: true,
    link: "Paulinho_marques2012@hotmail.com",
    benefits: [
      { name: `${i18n.t("plans.silver.benefits.one")}` },
      { name: `${i18n.t("plans.silver.benefits.two")}` },
      { name: `${i18n.t("plans.silver.benefits.three")}` },
      { name: `${i18n.t("plans.silver.benefits.four")}` },
    ],
  },
  {
    legend: `${i18n.t("plans.gold.legend")}`,
    price: `${i18n.t("plans.gold.price")}`,
    month: `${i18n.t("plans.gold.month")}`,
    subtitle: `${i18n.t("plans.gold.subtitle")}`,
    link: "Paulinho_marques2012@hotmail.com",
    benefits: [
      { name: `${i18n.t("plans.gold.benefits.one")}` },
      { name: `${i18n.t("plans.gold.benefits.two")}` },
      { name: `${i18n.t("plans.gold.benefits.three")}` },
      { name: `${i18n.t("plans.gold.benefits.four")}` },
    ],
  },
  {
    legend: `${i18n.t("plans.couple.legend")}`,
    price: `${i18n.t("plans.couple.price")}`,
    month: `${i18n.t("plans.couple.month")}`,
    subtitle: `${i18n.t("plans.couple.subtitle")}`,
    link: "Paulinho_marques2012@hotmail.com",
    benefits: [
      { name: `${i18n.t("plans.couple.benefits.one")}` },
      { name: `${i18n.t("plans.couple.benefits.two")}` },
      { name: `${i18n.t("plans.couple.benefits.three")}` },
      { name: `${i18n.t("plans.couple.benefits.four")}` },
    ],
  },
];

export const socialMedia = [
  { name: "facebook", icons: icons.facebook, link: "#" },
  { name: "instagram", icons: icons.instagram, link: "#" },
  { name: "zomm", icons: icons.zoom, link: "#" },
];

export const socialMediaTeachers = [
  { name: "facebook", icons: icons.facebook, link: "#" },
  { name: "instagram", icons: icons.instagram, link: "#" },
  { name: "zomm", icons: icons.zoom, link: "#" },
];

export const contact = [
  {
    icon: icons.telephone,
    title: "+5587991054786",
    subTitle: `${i18n.t("footer.contacts.phoneLegend")}`,
    href: "tel:+5587991054786",
  },
  {
    icon: icons.email,
    title: "E-mail",
    subTitle: `${i18n.t("footer.contacts.emailLegend")}`,
    href: "mailto:Paulinho_marques2012@hotmail.com",
  },
];
export const openingHours = [
  {
    day: `${i18n.t("footer.openingHours.week.one")}`,
    hour: "07:00-17:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.two")}`,
    hour: "07:00-17:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.three")}`,
    hour: "07:00-17:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.four")}`,
    hour: "07:00-17:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.five")}`,
    hour: "07:00-17:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.six")}`,
    hour: "07:00-17:00",
  },
  {
    day: `${i18n.t("footer.openingHours.week.seven")}`,
    hour: "07:00-17:00",
  },
];
export const StarMaped = [1, 2, 3, 4, 5].map(() => (
  <img src={icons.Star} alt="star" />
));

export const ClientsMocks = [
  {
    name: "Paulo",
    img: images.paulo,
    description: `${i18n.t("testimonial.students.first.message")}`,
  },
  {
    name: "Rafaela",
    img: images.rafaela,
    description: `${i18n.t("testimonial.students.second.message")}`,
  },
  {
    name: "Matheus",
    img: images.mateus,
    description: `${i18n.t("testimonial.students.third.message")}`,
  },
];

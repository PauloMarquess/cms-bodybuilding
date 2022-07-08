import { icons } from "../assets";

export const navigation = [
  { name: "Inicío", link: "#home" },
  { name: "Missão", link: "#mission" },
  { name: "Serviços", link: "#service" },
  { name: "Planos", link: "#plans" },
  { name: "Contato", link: "#contact" },
];

export const missionMock = [
  { name: "Perder Peso" },
  { name: "Hipertrofia Muscular" },
  { name: "Aumentar o condicionamente físico" },
  { name: "Ganho massa magra" },
];

export const typesPlans = [
  {
    title: "Plano Basico",
    value: "30",
    description: " Obtenha o plano que melhor se adequa ao seu dia-a-dia",
    link: "Paulinho_marques2012@hotmail.com",
    benefits: [
      { name: "Aulas de boxe" },
      { name: "Aulas de Fitdance" },
      { name: "Aulas de Pilates" },
      { name: "Treinamento 3 dias por semana" },
    ],
  },

  {
    title: "Plano Prata",
    value: "50",
    destak: true,
    description: " Obtenha o plano que melhor se adequa ao seu dia-a-dia",
    benefits: [
      { name: "Aulas de boxe" },
      { name: "Aulas de Fitdance" },
      { name: "Aulas de Pilates" },
      { name: "Treinamento 5 dias por semana" },
    ],
  },
  {
    title: "Plano Ouro",
    value: "80",
    description: " Obtenha o plano que melhor se adequa ao seu dia-a-dia",
    benefits: [
      { name: "Aulas de boxe" },
      { name: "Aulas de Fitdance" },
      { name: "Aulas de Pilates" },
      { name: "Treinamento 7 dias por semana" },
    ],
  },
  {
    title: "Plano para Casal",
    value: "100",
    description: " Obtenha o plano que melhor se adequa ao seu dia-a-dia",
    benefits: [
      { name: "Aulas de boxe" },
      { name: "Aulas de Fitdance" },
      { name: "Aulas de Pilates" },
      { name: "Treinamento 3 dias por semana" },
    ],
  },
];

export const ContactMocks = [
  {
    icon: icons.telephone,
    title: "+5587991054786",
    subTitle: "Atendemos 24 horas por dia",
    href: "tel:+5587991054786",
  },
  {
    icon: icons.email,
    title: "E-mail",
    subTitle: "Paulinho_marques2012@hotmail.com",
    href: "mailto:Paulinho_marques2012@hotmail.com",
  },
];

export const openingHoursMocks = [
  {
    day: "Domingo",
    hour: "07:00-17:00",
  },
  {
    day: "Segunda-feira",
    hour: "07:00-17:00",
  },
  {
    day: "Terça-feira",
    hour: "07:00-17:00",
  },
  {
    day: "Quarta-feira",
    hour: "07:00-17:00",
  },
  {
    day: "Quinta-feira",
    hour: "07:00-17:00",
  },
  {
    day: "Sexta-feira",
    hour: "07:00-17:00",
  },
  {
    day: "Sábado",
    hour: "07:00-17:00",
  },
];

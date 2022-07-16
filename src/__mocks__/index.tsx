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
  {
    name: "Paulo",
    img: images.paulo,
    description:
      " Para mim, o atendimento personalizado cria comprometimento por parte do aluno, com dia e horário previamente agendados com o professor. Além disso, os treinos são montados, modificados e acompanhados para atender a necessidades específicas, Minhas aulas são satisfatórias",
  },
  {
    name: "Rafaela",
    img: images.rafaela,
    description:
      "Sempre me considerei apto a fazer academia sem auxílio de qualquer orientador, porém que não havia os resultados esperados, o que me levava a constatar que tudo estava errado. Foi quando minha namorada me aconselhou a contratar um personal, hoje estou muito satisfeito,o resultado é fantástico",
  },
  {
    name: "Matheus",
    img: images.mateus,
    description:
      "O motivo que me leva a fazer musculação é o fato de fazer muito bem para a minha saúde. Procurei o profissional porque o atendimento individual é necessário para as minhas necessidades. Para mim fazer exercícios é muito importante e aumenta minha disposição para as atividades do dia a dia.",
  },
];

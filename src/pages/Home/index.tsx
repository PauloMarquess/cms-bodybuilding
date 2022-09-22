import {
  Header,
  Mission,
  Plans,
  Presentation,
  Footer,
  Testimonial,
  Team,
  Chat,
  Copyright,
} from "../../components";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Cms Bodybuilding</title>
        <meta
          name="keywords"
          content="cmsk,bodybuilding,saude,musculacao,fisico,condicionamento,forma,poder,corpo,musculo,online,personal,trainer,traine,treino,resultado,nutricao,nutricionista,modelagem,perder,peso,hipertrofia,muscular,aumento,condicionamento,ganho,massa,magra,bariatrica,preparador,atleta,atletas,arnold,fisiculturismo,fisiculturista,charles,mario,monica"
        />
        <meta name="author" content="Charles Mario" />
        <meta
          name="description"
          content="Usar o conhecimento do bodybuilding para transformação dos físicos, pautado em estratégias e planejamentos completos, uma arte em esculpir corpos, de acordo com os objetivos de cada um, desde de emagrecimento, tônus, ganho de massa muscular, modelagem etc."
        />
      </Helmet>
      <Header />
      <Presentation />
      <Mission />
      <Team />
      <Plans />
      <Testimonial />
      <Footer />
      <Chat />
      <Copyright />
    </>
  );
};

export default Home;

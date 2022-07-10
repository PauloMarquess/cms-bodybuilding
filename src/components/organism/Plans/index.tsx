import { icons } from "../../../assets";
import { typesPlans } from "../../../locale/ptBr";
import { images } from "../../../assets";
import { Container } from "../../atoms/Container/styled";
import ButtonLink from "../../ButtonLink";
import {
  CardPlan,
  CardPlans,
  Cifrao,
  CrownAbsolute,
  Divider,
  LegensPlan,
  ListBenefit,
  Price,
} from "./style";

const Plans = () => {
  return (
    <Container id="plans" column responsive>
      <LegensPlan>
        Conheça os planos da <span>CMSK</span>{" "}
      </LegensPlan>
      <CardPlans>
        {typesPlans.map((plan) => (
          <CardPlan>
            {plan.destak && (
              <CrownAbsolute src={images.crown} alt="imagem da coroa" />
            )}

            <h3>{plan.title}</h3>
            <p>
              <Cifrao>$</Cifrao> <Price>{plan.value} </Price> /Mês
            </p>
            <Divider />

            <h3>Beneficios do plano</h3>
            <h6>{plan.title}</h6>
            <ListBenefit>
              {plan.benefits.map((benefit) => (
                <li>
                  <span>
                    <img src={icons.arrow} alt="imagem icone" />
                  </span>
                  {benefit.name}
                </li>
              ))}
            </ListBenefit>
            <ButtonLink boxShadow borderRadius="10px" link="#teste">
              Iniciar Plano
            </ButtonLink>
          </CardPlan>
        ))}
      </CardPlans>
    </Container>
  );
};

export default Plans;

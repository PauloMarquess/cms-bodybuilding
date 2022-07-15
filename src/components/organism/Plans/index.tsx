import { icons, images } from "../../../assets";
import { Container, ButtonLink } from "../../../components";
import { plans } from "../../../__mocks__";
import { i18n } from "../../../translate/i18n.js";
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
    <Container id="plans" height="auto" column responsive>
      <LegensPlan>
        {i18n.t("plans.title")} <span>{i18n.t("plans.titleSpan")}</span>{" "}
      </LegensPlan>
      <CardPlans>
        {plans.map((plan) => (
          <CardPlan>
            {plan.destak && (
              <CrownAbsolute src={images.crown} alt="imagem da coroa" />
            )}
            <h3>{plan.legend}</h3>
            <p>
              <Cifrao>$</Cifrao> <Price>{plan.price} </Price> /{plan.month}
            </p>
            <Divider />

            <h3>{i18n.t("plans.benefitsPlans")}</h3>
            <h6>{plan.legend}</h6>
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
              {i18n.t("plans.button")}
            </ButtonLink>
          </CardPlan>
        ))}
      </CardPlans>
    </Container>
  );
};

export default Plans;

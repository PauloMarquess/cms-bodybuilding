import { useState } from "react";
import { ContactMocks, openingHoursMocks } from "../../../locale";
import Logo from "../../atoms/Logo";
import { EachHour } from "../../molecules/EachHour";
import { Container, InfoContainer, Contact, LogoCard } from "./style";

export const Footer = () => {
  return (
    <Container>
      <InfoContainer>
        <LogoCard>
          <Logo />
        </LogoCard>
        <div className="opening-hours">
          <h2>Horário de atendimento</h2>
          {openingHoursMocks.map((item, index) => (
            <EachHour i={item} index={index} key={index} />
          ))}
        </div>
        <div>
          <h2>Contatos</h2>
          {ContactMocks.map((item, index) => (
            <Contact key={index}>
              <img src={item.icon} alt="icone" />
              <h4>
                <a href={item.href}>{item.title}</a>
              </h4>
              <h5>
                <a href={item.href}>{item.subTitle}</a>
              </h5>
            </Contact>
          ))}
        </div>
      </InfoContainer>
    </Container>
  );
};

import React from "react";
import { ContactMocks, openingHoursMocks } from "../../../locale/ptBr";
import Logo from "../../atoms/Logo";
import { EachHour } from "../../molecules/EachHour";
import { ContainerFooter, Contact, LogoCard, ContactCard ,OpeningHours } from "./style";

export const Footer = () => {
  return (
    <ContainerFooter id="contact">
      <LogoCard>
        <Logo />
      </LogoCard>
      <OpeningHours>
        <h2>Horário de atendimento</h2>
        {openingHoursMocks.map((item, index) => (
          <EachHour i={item} index={index} key={index} />
        ))}
      </OpeningHours>
      <ContactCard>
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
      </ContactCard>
    </ContainerFooter>
  );
};

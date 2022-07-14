import { useEffect, useState } from "react";
import Select from "react-select";
import { images } from "../../../assets";
import { CardSelect } from "./style";

const countries = [
  { value: "pt-BR", label: "Brasil", icon: images.brasil },
  { value: "en-US", label: "England", icon: images.england },
];

const ChangeLanguage = () => {
  const I18N_STORAGE_KEY = "i18nextLng";
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  useEffect(() => {
    const data = localStorage.getItem("index");
    const obj = JSON.parse(data);
    setSelectedCountry(countries[obj]);
  }, []);

  const handleChange = (value) => {
    const index = value.value === "pt-BR" ? 0 : 1;
    setSelectedCountry(index);

    localStorage.setItem("index", index);

    localStorage.setItem(I18N_STORAGE_KEY, value.value);
    location.reload();
  };

  return (
    <>
      <Select
        value={selectedCountry}
        options={countries}
        onChange={handleChange}
        formatOptionLabel={(country) => (
          <CardSelect>
            <img src={country.icon} alt="country-image" />
            <span>{country.label}</span>
          </CardSelect>
        )}
      />
    </>
  );
};

export default ChangeLanguage;

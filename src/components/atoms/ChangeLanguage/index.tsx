const ChangeLanguage = () => {
  const I18N_STORAGE_KEY = "i18nextLng";
  const handleSelectChange = (event: any) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    console.log(event.target.value);
    location.reload();
  };

  return (
    <>
      <select onChange={handleSelectChange}>
        <option selected>Mudar Idioma</option>
        <option value="pt-BR">Português</option>
        <option value="en-US">Inglish</option>
      </select>
    </>
  );
};

export default ChangeLanguage;

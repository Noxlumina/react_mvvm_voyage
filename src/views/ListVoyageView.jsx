import React, { useState, useEffect } from "react";

const ListVoyageView = (props) => {
  /**
   * state de l'instant présent
   */
  let [today, setToday] = useState(new Date());
  /**
   * state de l'heure
   */
  let [heure, setHeure] = useState(0);

  /**
   * fonction permettant de setter l'heure
   */
  const monHeure = () => {
    if (getMinutes < 10 && getSeconds < 10) {
      setHeure(getHours() + ":0" + getMinutes() + ":0" + getSeconds());
    } else if (getMinutes < 10 && getSeconds >= 10) {
      setHeure(getHours() + ":0" + getMinutes() + ":" + getSeconds());
    } else if (getMinutes >= 10 && getSeconds < 10) {
      setHeure(getHours() + ":" + getMinutes() + ":0" + getSeconds());
    } else setHeure(getHours() + ":" + getMinutes() + ":" + getSeconds());
  };
  /**
   * fonction pour récupérer les heures
   * @returns
   */
  const getHours = () => {
    return today.getHours();
  };
  /**
   * fonction pour récupérer les minutes
   * @returns
   */
  const getMinutes = () => {
    return today.getMinutes();
  };
  /**
   * fonction pour récupérer les secondes
   * @returns
   */
  const getSeconds = () => {
    return today.getSeconds();
  };
  /**
   * fonction permettant un raffraichissement de l'heure toutes les secondes
   */
  let updateTime = () => {
    setToday(new Date());
    monHeure();
  };
  /**
   * useeffect du raffraichissement de l'heure
   */
  useEffect(() => {
    setTimeout(() => updateTime(), 1000);
  }, [heure, monHeure]);
  /**
   * fonction permmetttant de supprimer un voyage
   * @param {*} voyage
   */
  const handleDelete = (voyage) => {
    console.log(voyage);
    props.retirerVoyage(voyage);
  };
  /**
   * fonction permettant de soumettre le formulaire
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullTrip);
    props.ajouterVoyage(fullTrip);
  };
  /**
   * state du voyage initialisé
   */
  let [fullTrip, setFullTrip] = useState({
    destination: "",
    date: "",
    fuseau: "",
    nombre: "",
  });
  /**
   * permet de récupérer les changement du formulaire
   * et de faire un spread opérator
   * @param {*} event
   */
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setFullTrip((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };
  return (
    <>
      <h3>Formulaire de nouveaux voyages</h3>
      {/* formulaire */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* input de la destination */}
          <label htmlFor="destination" />
          <input
            id="destination"
            type="text"
            name="destination"
            placeholder="destination du voyage"
            onChange={handleChange}
          />
          {/* input de la date */}
          <label htmlFor="date" />
          <input
            id="date"
            type="date"
            name="date"
            placeholder="date du voyage"
            onChange={handleChange}
          />
          {/* input du fuseau */}
          <label htmlFor="fuseau" />
          <input
            id="fuseau"
            type="number"
            name="fuseau"
            placeholder="UTC du voyage"
            onChange={handleChange}
          />
          {/* input du nombre de voyageurs */}
          <label htmlFor="nombre" />
          <input
            id="nombre"
            type="number"
            name="nombre"
            placeholder="nombre de voyageur"
            onChange={handleChange}
          />
        </div>
        {/* boutton pour soumettre le formulaire */}
        <button type="submit">Ajouter</button>
      </form>

      <h3>ma liste de voyages</h3>
      {/* affichage de la liste des voyages */}
      {props.listevoyages &&
        props.listevoyages.map((voyage, index) => {
          return (
            <li key={index}>
              <div>
                <p>Destination : {voyage.destination} </p>
                <p>Date : {voyage.date} </p>
                <p>Fuseau : {voyage.fuseau} </p>
                <p>Nombre de voyageur : {voyage.nombre} </p>
                <p>Heure locale : {heure}</p>
                <button onClick={(e) => handleDelete(voyage)}>Supprimer</button>
              </div>
            </li>
          );
        })}
    </>
  );
};

export default ListVoyageView;

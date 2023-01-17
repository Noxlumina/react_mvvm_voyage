import { useEffect, useState } from "react";
/**
 *
 * Conposant fonction de tytpe viewmodel
 * gestion de listes de voyage
 * @returns
 */
export const VoyageListeViewModel = () => {
 /**
  * initialisation de la liste des vvoyages
  */
    const [voyages, setVoyages] = useState([]);
    /**
     * fonction permettant de trier les voyages en fonction de la date
     * @param {} liste 
     */
    const triParDate = (liste) => {
        console.log(liste);
        liste.sort(function(a, b) {
            return new Date(a.date) - new Date(b.date);
      })
      console.log(liste);
    };
    /**
     * permet de trier les voyages lors de l'ajout d'un nouveau voyage
     */
    useEffect(() => {
        triParDate(voyages);
        setVoyages(voyages);
      }, [voyages]);
    /**
     * fonction permettant d'ajouter un nouveau voyage
     * @param {*} voyage 
     */
    const ajouterVoyage = (voyage) => {
        setVoyages([...voyages, voyage]);
        triParDate(voyages);
    };
    /**
     * fonction permettant de supprimer un voyage
     * @param {*} voyage 
     */
    const supprimerVoyage = (voyage) => {
        setVoyages(voyages.filter(f => f !== voyage));
    };
    /**
     * parametre passer en attribut à notre model
     */
    return {voyages,ajouterVoyage,supprimerVoyage};};


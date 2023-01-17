import React from "react";
import {VoyageListeViewModel} from "../viewModel/VoyageListeViewModel";
import ListVoyageView from "../views/ListVoyageView";

const VoyageListModel = () => {
 /**
  * corresponds à la récupération du view model
  */
  const ViewModel = VoyageListeViewModel();
  const rajouterVoyage = (voyage) => {
    ViewModel.ajouterVoyage(voyage);
  };
  return (
    <>
      <h3>Ma liste de voyages</h3>
      {/* attribut passer à notre view  */}
      <ListVoyageView
        listevoyages={ViewModel.voyages}
        retirerVoyage={ViewModel.supprimerVoyage}
        ajouterVoyage={rajouterVoyage}
      />
    </>
  );
};

export default VoyageListModel;

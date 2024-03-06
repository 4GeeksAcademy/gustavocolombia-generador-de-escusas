/* eslint-disable */

import _ from "./style.css";
window.onload = () => {
  let milescusas = Math.random() * 10;
  document.querySelector(`#las-escusas`).innerHTML = escusas();
  console.log("Creer en que llegara temprano algun día " + milescusas);
};
let escusas = () => {
  let cobijas = [`mi`, `no me fue bien tomando`, `mi escusa`];
  let desayuno = [
    `por el cereal`,
    `por mi changua`,
    `por mi caldo`,
    `por mi tamal`
  ];
  let alarma = [
    `el ruido`,
    `ignorar el sonido`,
    ` seguir soñando`,
    `mi mala suerte`
  ];
  let pesadilla = [`estaba muy asustado`, `mirando al techo`];
  let ducha = [
    `el agua fria`,
    `el agua me erizo`,
    ` estaba contento con el agua caliente`
  ];
  let tareas = [`mi falta de concentracion`, `mi falta de organizacion`];

  let cobijasIndex = Math.floor(Math.random() * cobijas.length);
  let desayunoIndex = Math.floor(Math.random() * desayuno.length);
  let alarmaIndex = Math.floor(Math.random() * alarma.length);
  let pesadillaIndex = Math.floor(Math.random() * pesadilla.length);
  let duchaIndex = Math.floor(Math.random() * ducha.length);
  let tareasIndex = Math.floor(Math.random() * tareas.length);

  return (
    cobijas[cobijasIndex] +
    `` +
    desayuno[desayunoIndex] +
    `` +
    alarma[alarmaIndex] +
    `` +
    pesadilla[pesadillaIndex] +
    `` +
    ducha[duchaIndex] +
    `` +
    tareas[tareasIndex]
  );
};

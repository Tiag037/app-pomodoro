// sert a metre des fonctions utilitaire, qui vont travailler avec des donnée si besoin, et que l'on peut utilisé a plusieur endroit du code

const getFormattedValue = (time) => {
  //pour les minutes, on regarde si il ya de chiffre, sinon, on rajoute un 0 devant. on fait la meeme chose pour les minutes avec le modulo %. on se base sur 10 car 01, 02, 03,.. 08, 09, 10
  const minutes = `${
    Math.trunc(time / 60) < 10
      ? `0${Math.trunc(time / 60)}`
      : Math.trunc(time / 60)
  }`;

  const seconds = `${time % 60 < 10 ? `0${time % 60}` : time % 60}`;

  return `${minutes}:${seconds}`;
};

export default getFormattedValue;

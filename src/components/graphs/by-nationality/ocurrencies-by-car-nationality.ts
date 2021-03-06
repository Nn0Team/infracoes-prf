import Service from "../shared/service";

const grouppedByNationality = require("../../../../data/agrupado_por_nacionalidade_hora");

export default class OcurrenciesByCarNationalityService extends Service {
  fetchDataGrouppedByNationality() {
    return new Promise(resolve => {
      resolve(grouppedByNationality.content);
    });
  }
}

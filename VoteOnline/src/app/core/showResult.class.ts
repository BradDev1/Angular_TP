export class showResult {
  NomCandidat = '';

  pourcentage = 0;

  result = [
    { name: 'Olivia Santiago Community Manager', pourcentage: 10 },
    { name: 'Jane Swanson Chef de projet', pourcentage: 52 },
    { name: 'Elston Guillon Developpeur', pourcentage: 18 },
    { name: 'Lucas Pochoco Comptable', pourcentage: 22 },
  ];

  constructor(nom: any = null) {
    this.NomCandidat = nom;
  }

  addPourcent() {
    this.result.forEach((element) => {
      if (this.NomCandidat == element.name) {
        element.pourcentage = element.pourcentage + 10;
      }
    });
  }

  minusPourcent() {
    this.result.forEach((element) => {
      if (this.NomCandidat != element.name) {
        element.pourcentage = element.pourcentage - 3.33;
      }
    });
  }

  getPourcentageVote() {
    return this.result.map(element => element.pourcentage);
  }
}

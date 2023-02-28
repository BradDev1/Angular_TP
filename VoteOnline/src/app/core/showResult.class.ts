export class showResult {
  NomCandidat = '';


  pourcentage = 0;

  result = [
    { name: 'Olivia Santiago Community Manager', pourcentage: 10 },
    { name: 'Jane Swanson Chef de projet', pourcentage: 52 },
    { name: 'Elston Guillon Developpeur', pourcentage: 18 },
    { name: 'Lucas Pochoco Comptable', pourcentage: 22 },
  ];

  doublonCandidat: Array<{name: string}> = [];

  constructor(nom: any = null) {
    this.NomCandidat = nom;
    this.doublonCandidat.push({name: this.NomCandidat});

  }

  addPourcent() {
    this.result.forEach((element) => {
      if (this.NomCandidat == element.name) {
        element.pourcentage = element.pourcentage + 10;
        element.pourcentage = element.pourcentage;
      }
    });
  }

  minusPourcent() {
    this.result.forEach((element) => {
      if (this.NomCandidat != element.name) {
        element.pourcentage = element.pourcentage - 3.33;
        this.result.push({pourcentage: element.pourcentage});
      }
    });
  }

  getPourcentageVote() {
    return this.result.map((element) => element.pourcentage);
  }

  detectDoublon() {
    this.doublonCandidat.forEach((element) => {
      console.log(element);
    });
  }
}

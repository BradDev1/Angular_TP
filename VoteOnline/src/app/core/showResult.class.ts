export class showResult {
  NomCandidat: String | undefined;
  vote: number | undefined;

  constructor(NomCandidat: String, vote: number) {
    this.NomCandidat = NomCandidat;
    this.vote = vote;
  }

  getPourcentageVote(){
    return this.vote;
  }
}

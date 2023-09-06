import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Cat } from 'src/app/models/cat';
import { CatService } from 'src/app/services/cat.service';

export enum CatPosition {
  LEFT_CAT = 'LEFT_CAT',
  RIGHT_CAT = 'RIGHT_CAT'
}

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  public cats: Cat[] = [];
  private displayedCats: Cat[] = [];
  public chosenCat: Cat;
  public leftCat: Cat;
  public rightCat: Cat;
  public showResult: boolean = false;
  public catPosition = CatPosition;

  constructor(
    private catService: CatService) {
  }

  ngOnInit() {
    this.getCats();
  }

  private getCats(): void {
    this.catService.getCats().pipe(take(1)).subscribe(
      {
        next: (data: Cat[]) => {
          this.cats = data;
          this.leftCat = this.randomCat;
          this.rightCat = this.randomCat;
        },
        error: (error: any) => {
          console.log('catService error', error);
        }
      }
    );
  }

  private get randomCat(): Cat {
    if (this.displayedCats.length >= this.cats.length) {
      this.showResult = true;
      return this.chosenCat;
    }
    const cat = this.cats[Math.floor(Math.random() * this.cats.length)];
    const existedCat = this.displayedCats.find(showedCat => showedCat.id === cat.id);

    if (existedCat) {
      return this.randomCat;
    }
    if(!cat.cutness) cat.cutness = 0;
    this.displayedCats.push(cat);
    return cat
  }

  public choseCat(cat: Cat, position: CatPosition): void {
    cat.cutness = (cat.cutness || 0) + 1;
    if (position === this.catPosition.LEFT_CAT) {
      this.leftCat = cat;
      this.rightCat = this.randomCat;
    } else {
      this.leftCat = this.randomCat;
      this.rightCat = cat;
    }
    this.chosenCat = cat;
  }

}

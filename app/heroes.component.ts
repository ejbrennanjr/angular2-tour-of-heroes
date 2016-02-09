import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router'
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-heroes',
	styleUrls: ['app/heroes.component.css'],
	templateUrl: './app/heroes.component.html', 	
	directives: [HeroDetailComponent],
	providers: []
})
export class HeroesComponent implements OnInit {
		
	constructor(
		private _router: Router,
		private _heroService: HeroService) { 
		
	}

	getHeroes() {
		this._heroService.getHeroesSlowly()
		.then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	} 

	public title = 'Tour of Heroes';
	public selectedHero: Hero;
	public heroes: Hero[];

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	};

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }])
	}
}




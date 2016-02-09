import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
	selector: 'my-hero-detail', 
	inputs: ['hero'],
	styleUrls: ['app/hero-detail.component.css'],
	templateUrl: './app/hero-detail.component.html' 
})
export class HeroDetailComponent implements OnInit {
	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {

	}

	ngOnInit() {
		let id = +this._routeParams.get('id'); //The '+' converts the string parameter to a number
		this._heroService.getHero(id)
		.then(hero => this.hero = hero);
	}
	
	goBack() {
		window.history.back();
	}
	
	hero: Hero;
}
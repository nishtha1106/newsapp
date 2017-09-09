import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
data: any[];
  constructor(private newsService: NewsService) { }
  @Input('news') news:any;
  ngOnInit() {
  }

favorite() {
	this.newsService.favorite()
	.subscribe(res => {
		this.data=res

	})

}

delete(data:any) {
	this.newsService.delete(data)
	.subscribe(res =>{
		this.data= res

	})
}

}

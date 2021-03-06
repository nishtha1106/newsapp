import { Component, OnInit,Input } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{


  constructor(private newsService: NewsService ) { }
  @Input('news') news:any;
favourite:any={};

add(detail:any) {
  console.log(detail)
	this.favourite={
		"title": detail.title,
		"description": detail.description,
    "url":detail.url,
		"urlToImage": detail.urlToImage
	}
	this.newsService.add(this.favourite).subscribe((data)=>{

	})
}

ngOnInit(){

}
}

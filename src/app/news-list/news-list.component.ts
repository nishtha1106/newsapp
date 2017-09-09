import { Component, OnInit,Input } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{

favourite:any={};
  constructor(private newsService: NewsService ) { }
  @Input('news') news:any;

add(detail:any) {
  console.log(detail)
	this.favourite={
		"title": detail.title,
		"description": detail.description,
		"urlToImage": detail.urlToImage
	}
	this.newsService.add(this.favourite).subscribe((data)=>{
      
	})
}

ngOnInit(){

}
/*searchNews(searchTerm){
  			this.newsService.searchNews(searchTerm.value)
  			.subscribe((news) => { 
          this.news=news.articles;
          console.log(this.news)
    
  	});*/
}

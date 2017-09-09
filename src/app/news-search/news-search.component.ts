import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {
news: any=[];
post: any=[];
@Output() onEmit = new EventEmitter<any>();

  constructor( private newsService:NewsService) { }

  ngOnInit() {
  	this.newsService.searchNewsMain()
        .subscribe((post )=> { 
          this.post=post.sources;
      });
		}
 searchNews(searchTerm){
  			this.newsService.searchNews(searchTerm)
  			.subscribe((news) => { 
          this.news=news.articles;


                  this.onEmit.emit(this.news)

  	});
  }

}

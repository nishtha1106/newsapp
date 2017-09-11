import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  post:any;
  constructor(private newsService: NewsService) { }

  ngOnInit() {

  	    this.newsService.home()
        .subscribe((post )=> { 
          this.post=post.articles;


         
      });

  }
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


}

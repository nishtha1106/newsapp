import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class NewsService {
	title = 'app';

  constructor(private http: Http) { }

    home() {
     return this.http
     .get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=54879931472846699a71aed1966a626d')
      .map(res=>res.json()
      );
}

    searchNewsMain( ){
  	return this.http
    .get('https://newsapi.org/v1/sources?language=en')
  	.map(res=>res.json()
  		);
  }
	searchNews(searchTerm: HTMLInputElement){
  	return this.http
  	.get('https://newsapi.org/v1/articles?source='+searchTerm.value+'&sortBy=top&apiKey=54879931472846699a71aed1966a626d')
  	.map(res=>res.json());
  }
  	
    add(fav) {
      console.log(fav)
      return this.http.post('http://localhost:3000/news',fav)
      .map(res=>res.json());
    }

    favorite() { 
      return this.http
      .get('http://localhost:3000/news')
      .map(res=>res.json());
    }

    delete(data: any) {
      console.log(data)
      return this.http.delete('http://localhost:3000/news/'+data._id)
      .map(res =>res.json())
    }
  
}

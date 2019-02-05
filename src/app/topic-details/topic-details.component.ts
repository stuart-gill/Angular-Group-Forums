import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { postsImport } from '../mock-posts';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {
  topicTitle: string;
  topicDescription: string;

  posts = postsImport;

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.topicTitle = params["title"];
      this.topicDescription = params["description"];
    })
  }

  ngOnInit() {
  }

  goToPostDetailPage(post) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "title": post.title,
        "body": post.body,
        "user": post.user,
        "id": post.id
      }
    };
    this.router.navigate(["post", post.id], navigationExtras)
  }
}
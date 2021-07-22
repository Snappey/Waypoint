import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LinksService } from 'src/app/services/links.service';
import { Link } from 'src/app/structures/links';

@Component({
  selector: 'app-link-grid',
  templateUrl: './link-grid.component.html',
  styleUrls: ['./link-grid.component.css']
})
export class LinkGridComponent implements OnInit {
  linkService: LinksService;
  links: Link[] = [];
  tags: string[] = [];


  searchControl: FormControl = new FormControl("");
  searchQuery: string = "";
  selectedTag: string = "";
  filtering: boolean = false;
  filtered: boolean = false;

  constructor(linkService: LinksService) {
    this.linkService = linkService;
  }

  ngOnInit(): void {
    this.links = this.linkService.getLinks();
    this.tags = this.linkService.getTags();

    this.searchControl.valueChanges
      .pipe(debounceTime(350), distinctUntilChanged())
      .subscribe(query => {
        this.filtering = true;

        if (query === "") {
          this.links = this.linkService.getLinks();
          this.filtered = false;
        }
        else {
          this.links = this.linkService.getLinks().filter(l => JSON.stringify(l).toLowerCase().includes(query.toLowerCase())); // Too lazy to implement proper searching
          this.filtered = true;
        }
        
        this.filtering = false;
        this.searchQuery = query;
      });
  }

  filterByTag(tag: string) {
    this.filtering = true;

    this.selectedTag = tag;
    this.filtered = tag !== "";
    this.links = tag !== "" ? this.linkService.getLinksByTag(tag) : this.linkService.getLinks();

    this.filtering = false;
  }
}

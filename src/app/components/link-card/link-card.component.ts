import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/structures/links';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.css']
})
export class LinkCardComponent implements OnInit {
  defaultImage: string = "https://wiki.guildwars2.com/images/d/d2/Waypoint_%28map_icon%29.png";

  @Input("data") data: Link = {
    title: "N/A",
    subtitle: "N/A",
    description: "...",
    image: "",
    urls: {},
    tags: []
  };
  constructor() { }

  ngOnInit(): void {
  }

  getChipColour(tag: string) {
    switch(tag) {
      case "PvE":
        return "#00FF00";
    }
    return ""
  }

  getUrlIcon(name: string) {
    switch(name) {
      default:
      case "Link":
        return "pi pi-external-link"
      case "Discord":
        return "pi pi-discord"
    }
  }

}

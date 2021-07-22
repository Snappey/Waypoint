import { Injectable } from '@angular/core';
import { Link, Links } from '../structures/links';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  linkData: Link[] = [];

  constructor() {
    this.linkData = Links;
  }

  getLinks() : Link[] {
    return this.linkData;
  }

  getLinksByTag(tag: string) {
    return this.linkData.filter(l => l.tags.includes(tag));
  }

  getTags() : string[] {
    let tags = this.linkData
      .map(l => l.tags)
      .reduce((t, cur ) => t.concat(cur));

    return [...new Set(tags)] // Abuse sets to filter duplicates out
  }

  getTagColour(tag: string) {
    switch(tag) {
      default:
        return "#dee2e6"
      case "PvE":
        return "#55efc4"
      case "PvP":
        return "#6c5ce7"
      case "WvW":
        return "#ff7675"
      case "Raids":
        return "#00b894"
      case "Fractals":
        return "#81ecec"
      case "Guild":
        return "#fdcb6e"
    }
  }
}

export class Content {
  type: string;
  text: string;
  url: string;

  constructor(type: string, text: string, url: string) {
    this.type = type;
    this.text = text;
    this.url = url;
  }
}
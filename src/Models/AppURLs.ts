export default class AppURLs {
  static baseUrl : string = import.meta.env.BASE_URL;
  static home : string =  this.baseUrl + "/";
  static gameList : string = this.baseUrl + "/gamelist";
  static pileofshame : string =  this.baseUrl + "/pileofshame";
  static about : string =  this.baseUrl + "/about";
  static login : string =  this.baseUrl + "/user/login";
  static signup : string =  this.baseUrl + "/user/signup";

}
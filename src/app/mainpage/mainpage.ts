import { Component } from '@angular/core';
import { Head } from "./head/head";
import { AboutMe } from "./about-me/about-me";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { Comments } from "./comments/comments";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-mainpage',
  imports: [Head, AboutMe, Skills, Projects, Comments, Contact],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})
export class Mainpage {

}

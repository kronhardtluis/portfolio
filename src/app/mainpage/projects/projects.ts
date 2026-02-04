import { Component } from '@angular/core';

interface projectFace {
  name: string;
  description: string;
  technologys: string;
  img: string
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})

export class Projects {
  project: projectFace[] = [
    {
      name: "El Pollo Loco (in progress)",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      technologys: "Angular | TypeScript | HTML | CSS | Firebase",
      img: '/assets/img/PolloLoco.png'
    },
    {
      name: "Join (in progress)",
      description: "Task manager inspired by Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      technologys: "Angular | TypeScript | HTML | CSS | Firebase",
      img: '/assets/img/join-laptop.png'
    }
  ]
}

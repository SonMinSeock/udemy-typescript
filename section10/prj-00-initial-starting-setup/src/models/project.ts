namespace App {
  // enum 타입 정의.
  export enum ProjectStatus {
    Active,
    Finished,
  }
  // Project 타입 정의.
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus.Active | ProjectStatus.Finished
    ) {}
  }
}

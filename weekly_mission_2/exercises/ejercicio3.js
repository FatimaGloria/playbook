//Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.
class repo {
    constructor (name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
     this.name = name
     this.author = author
     this.language = language
     this.numberOfCommits = numberOfCommits
     this.stars = stars
     this.forks = forks
     this.issues_open = issues_open
     this.issues_close = issues_close
    }
    
    getTotalIssues(){
      return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }

   const myRepo = new repo("LaunchX", "carlogilmar", "JavaScrit", 100, 199, 299, 10, 10)
   console.log(myRepo)
   console.log(myRepo.getTotalIssues())
   console.log(myRepo.getGeneralInfo())
   
   
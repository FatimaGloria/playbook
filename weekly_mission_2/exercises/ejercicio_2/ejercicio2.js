const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

// 2.1 Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("1: Imprimiendo los elementos nombre de una lista")
explorers.forEach(explorer => console.log(explorer.name))

// 2.2 Imprime el stack de cada explorer, usa FOR EACH
console.log("2: Imprimiendo el stack de cada explorer en la lista")
explorers.forEach(explorer => console.log(explorer.stack))

// 2.3 Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("3: Imprimiendo una nueva lista con las listas de stacks de cada explorer")
const stackLists = explorers.map(newStackList => (newStackList.stack))

// 2.4 Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log('4: Imprimiendo la lista de explorers que tengan en su stack "js"')
const stackJS = explorers.filter(explorerStack => explorerStack.stack.includes("js"))
console.log(stackJS)

//2.5 Busca el primer explorer que sea de la CDMX, usa FIND
console.log("5: Busca el primer explorer que sea de la CDMX")
const findExplorer = explorers.find(findCity => findCity.city === "CDMX")
console.log(findExplorer)

// 2.6 Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("6: Obtén la suma de todos los exercises_completed")
const totalExercises = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log(totalExercises)
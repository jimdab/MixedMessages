// Mixed Message - My first CodeAcademy portfolio project
// Jim Dabrowski
// 
// At launch it will generate a random lacrosse player. 
// Said player looks like: 
// Name: First Middle Last 
// Position: [Attack, Middie, LSM, Defense, Goalie]
// Number: [00 - 99]
// Name, position and number will all be randomly generated at each invocation. 
//

// Some arrays with our source data
const firstNames = ["Jacob","Michael","Joshua","Matthew","Daniel","Christopher","Andrew","Ethan","Joseph","William","Anthony","David","Alexander","Nicholas","Ryan","Tyler","James","John","Jonathan","Noah","Brandon","Christian","Dylan","Samuel","Benjamin","Nathan","Zachary","Logan","Justin","Gabriel","Jose","Austin","Kevin","Elijah","Caleb","Robert","Thomas","Jordan","Cameron","Jack","Hunter","Jackson","Angel","Isaiah","Evan","Isaac","Luke","Mason","Jayden","Jason","Gavin","Aaron","Connor","Aiden","Aidan","Kyle","Juan","Charles","Luis","Adam","Lucas","Brian","Eric","Adrian","Nathaniel","Sean","Alex","Carlos","Bryan","Ian","Owen","Jesus","Landon","Julian","Chase","Cole","Diego","Jeremiah","Steven","Sebastian","Xavier","Timothy","Carter","Wyatt","Brayden","Blake","Hayden","Devin","Cody","Richard","Seth","Dominic","Jaden","Antonio","Miguel","Liam","Patrick","Carson","Jesse","Tristan"];
const middleNames = ["Alejandro","Henry","Victor","Trevor","Bryce","Jake","Riley","Colin","Jared","Jeremy","Mark","Caden","Garrett","Parker","Marcus","Vincent","Kaleb","Kaden","Brady","Colton","Kenneth","Joel","Oscar","Josiah","Jorge","Ashton","Cooper","Tanner","Eduardo","Paul","Edward","Ivan","Preston","Maxwell","Alan","Levi","Stephen","Grant","Nicolas","Dakota","Omar","Alexis","George","Eli","Collin","Spencer","Gage","Max","Ricardo","Cristian","Derek","Micah","Brody","Francisco","Nolan","Ayden","Dalton","Shane","Peter","Damian","Jeffrey","Brendan","Travis","Fernando","Peyton","Conner","Andres","Javier","Giovanni","Shawn","Braden","Jonah","Bradley","Cesar","Emmanuel","Manuel","Edgar","Mario","Erik","Edwin","Johnathan","Devon","Erick","Wesley","Oliver","Trenton","Hector","Malachi","Jalen","Raymond","Gregory","Abraham","Elias","Leonardo","Sergio","Donovan","Colby","Marco","Bryson","Martin"];
const lastNames = ["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzales","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson","Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores","Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts","Gomez","Phillips","Evans","Turner","Diaz","Parker","Cruz","Edwards","Collins","Reyes","Stewart","Morris","Morales","Murphy","Cook","Rogers","Gutierrez","Ortiz","Morgan","Cooper","Peterson","Bailey","Reed","Kelly","Howard","Ramos","Kim","Cox","Ward","Richardson","Watson","Brooks","Chavez","Wood","James","Bennet","Gray","Mendoza","Ruiz","Hughes","Price","Alvarez","Castillo","Sanders","Patel","Myers","Long","Ross","Foster","Jimenez"];
const positions = ["Attack", "Middie", "LSM", "Defense", "Goalie"]; 

// Generates a single player
generatePlayer = () => {
    let first = firstNames[Math.floor(Math.random() * firstNames.length)]
    let middle = middleNames[Math.floor(Math.random() * middleNames.length)];
    let last = lastNames[Math.floor(Math.random() * lastNames.length)]; 
    let position = positions[Math.floor(Math.random() * positions.length)]; 
    let number = Math.floor(Math.random() * 99); 
    return `${first} ${middle} ${last}\nPosition: ${position}\nNumber: ${number}\n`;
}

console.log(generatePlayer());

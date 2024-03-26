//aici o sa avem logica pentru a ne extrage intr-un mod citibil data primita de la API (proprietatea dt de pe obiectul de la Open Weather API)

function getDayOfTheWeek(dateInUtc){
    //pentru ca data de API este in UTC format trebuie sa o transform folosind obiectul DAte din JS
    const date =  new Date(dateInUtc * 1000);
    const dayIndex = date.getDay();
    let day;
    switch(dayIndex) {
        case 0:
            day="Duminică";
            break;
        case 1:
            day="Luni";
            break;
        case 2:
            day="Marți";
            break;  
        case 3:
            day="Miercuri";
            break; 
        case 4:
            day="Joi";
            break;
         case 5:
             day="Vineri";
            break;
        case 6:
            day="Sâmbătă";
            break;
        default:
            //aruncam o eroare daca indexul nu este valid(teoretic nu ar trebui sa ajunga aici)
            throw new Error("Invalid day index");
    }
    return day;
}

function getHour(dateInUtc){
    const date = new Date(dateInUtc * 1000);
    //extragem ora folosind metoda getHours() a obiectului Date
    //daca ora este mai mica decat 10 o sa adaugam un 0 in fata
    let hours = date.getHours();
    if(hours < 10) {
        hours = `0${hours}`;
    }
    //extragem minutele folosind o metoda de pe obiectul date = getMinutes()
    let minutes = date.getMinutes();
    if(minutes < 10) {
        minutes = `0${minutes}`;
    }
    //returnam ora sub formatul dorit
    return `${hours}:${minutes}`;
}

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    },
]

let Input1 = document.getElementById("Input1")

let Input2 = document.getElementById("Input2")

let buttFind = document.getElementById("reSearch")

let buttRes = document.getElementById("reset")

buttFind.addEventListener("click", avviaRicerca);

let lavoroMin = "";
let posizioneMin = "";


function RicercaLavoro(lavoroMin, posizioneMin) {
    let results = [];
    for (let i = 0; i < jobs.length; i++) {
        let Filtrati = jobs[i];
        lavoroMin = Filtrati.title.toLowerCase()
        posizioneMin = Filtrati.location.toLowerCase()
        let Input1Min = Input1.value.toLowerCase();
        let Input2Min = Input2.value.toLowerCase();
        if (lavoroMin.includes(Input1Min) && posizioneMin.includes(Input2Min)) {
           
            results.push(Filtrati)

        }
      
    } return results


}

function avviaRicerca() {

    let ValoreJobInput = Input1.value
    let ValoreLocInput = Input2.value
    let ElemFin = RicercaLavoro(ValoreJobInput, ValoreLocInput);
    let ResultFin = ElemFin.length // numero lavori trovati

    let lavoriTrovati = document.createElement("p");
    lavoriTrovati.innerHTML = ResultFin + " " + "Lavori trovati"

    Input1.value = ""; // pulisco valore dentro l'input
    Input2.value = "";

    for (let i = 0; i < ElemFin.length; i++) {

        let listalavori = document.createElement("li")
        let listaluoghi = document.createElement("li")

        listalavori.innerHTML = (ElemFin[i].title)
        listaluoghi.innerHTML = (ElemFin[i].location)

        document.getElementById("lavoriTrovati").appendChild(lavoriTrovati);
        document.getElementById("listalavori").appendChild(listalavori)
        document.getElementById("listaluoghi").appendChild(listaluoghi)

    }

}
 
    function resetData (){
       let ResetData = RicercaLavoro()

       listalavori.innerHTML = ""
       listaluoghi.innerHTML = ""
       lavoriTrovati.innerHTML = "";

    }

    


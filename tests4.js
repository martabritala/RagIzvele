class Tests3 {
    constructor(id){
        this.konteiners=document.getElementById(id);
        this.saturs=document.createElement("div");
        this.saturs.setAttribute("class","container-fluid");
        this.saturarinda=document.createElement("div");
        this.saturarinda.setAttribute("class","row")
        this.divTabula=document.createElement("div");
        this.divTabula.setAttribute("class", "col-lg");
        this.divSkaidro=document.createElement("div");
        this.teksts=document.createElement("div");
        this.teksts.setAttribute("class","col-md sticky-top");
        this.divSkaidro.setAttribute("class","row sticky-top");
        this.divSkaits=document.createElement("div");
        this.divSkaits.setAttribute("class","skaidro");
        this.divSkaidro.appendChild(document.createElement("h1"));
        this.divSkaidro.appendChild(this.divSkaits);
        this.divSkaits.appendChild(document.createElement("h2"));
        this.divSkaits.childNodes[0].innerHTML="Pašlaik izvēlēto stundu skaits nedēļā katrā klasē:"
        this.divSkaits.appendChild(document.createElement("p"));
        this.divSkaits.appendChild(document.createElement("p"));
        this.divSkaits.appendChild(document.createElement("p"));
        this.divSkaits.appendChild(document.createElement("p"));
        this.stundas10=0;
        this.stundas11=0;
        this.stundas12=0;
        this.konteiners.appendChild(this.saturs);
        this.saturs.appendChild(this.saturarinda);
        this.saturarinda.appendChild(this.divTabula);
        this.saturarinda.appendChild(this.teksts);
        this.teksts.appendChild(this.divSkaidro);
        this.divSkaidro.appendChild(this.divSkaits);
        this.maziasinfo=document.createElement("div");
        this.maziasinfo.classList.add("absolute-bottom");
        this.maziasinfo.setAttribute("id","infovieta");
        this.divSkaidro.appendChild(this.maziasinfo);

        


        this.tabulaLiela=document.createElement("table");
        this.tabulaLiela.setAttribute("class","table table-sm table-hover");
        let head=this.tabulaLiela.createTHead();
        head.setAttribute("class","thead-dark")
        head.insertRow(0);
        head.rows[0].setAttribute("id","rinda0");
        for(let j=0; j<5; j++){
            head.rows[0].appendChild(document.createElement("th"));
            head.rows[0].children[j].setAttribute("scope","col");
        };
        let body=this.tabulaLiela.createTBody();
        for(let i=0; i<41; i++){
            let x = body.insertRow(i);
            x.setAttribute("class","table-info");
            x.setAttribute("id","rinda"+(i+1));
            for(let j=0; j<5; j++){
                x.insertCell(j);
            };
        };//Izveidota tabula

        this.pamattabula=[["","10.kl.","11.kl","12.kl"],["Obligātie kursi visiem Rīgas Angļu ģimnāzijas skolēniem","","",""],["Latviešu valoda I",3,3,""],["Angļu valoda I (B2)",3,3,""],
            ["2.svešvaloda (B1) <br />(krievu vai vācu valoda ar priekšazināšanām)",2,2,2],["Vēsture un sociālās zinātnes I",3,4,""],["Literatūra I",3,3,""],["Kultūras pamati",3,"",""],
            ["Matemātika I",5,7,3],["Datorika",2,"",""],["Sports un veselība",2,3,3],["Projekta darbs","","",2],["Iestājoties 10. klasē obligāti jāizvēlas:","","",""],
            ["Fizika I",4,3,""],["Ķīmija I",3,3,],["Bioloģija I",1,2,],["Ģeogrāfija I",2,1,],["Dabaszinības",4,4,1],["Eiropas kultūras telpa",2,,],
            ["3. svešvaloda (B1) <br />(franču vai vācu valoda bez priekšzināšanām)",4,3,2],["Kultūra un māksla I",,2,1],["10.klases beigās jāizvēlas:",,,],["Dizains un tehnoloģijas I",,2,4],["Programmēšana I",,2,4],
            ["Padziļinātie kursi (jāizvēlas 3 kursi līdz 11.klases vidum):",,,],["Matemātika II",,,8],["Angļu valoda II (C1)",,,6],
            ["Latviešu valoda un literatūra II",,,6],["Sociālās zinātnes II",,,6],["Programmēšana II",,,6],["Fizika II",,,6],["Ķīmija II",,,6],["Bioloģija II",,,6],
            ["Specializēto kursu piedāvājums (neobligāti):",,,],["Debates (vienu gadu)",2,2,2],["Angļu literatūra",,2,2],["Filozofijas pamati",,,2],["Publiskā uzstāšanās (vienu gadu)",2,2,2],
            ["Papildu angļu valoda 12.klasē",,,2],["Psiholoģijas pamati",,,2],["Robotika (vienu gadu)",2,2,2],["Krievu valoda (A2) (vienu gadu)",4,4,4]
        ];

        this.info="Kursu piedāvājumā iespējams izvēlēties, kuru no piedāvātajiem kursiem Jūs vēlaties un kuru nevēlaties mācīties vidusskolā. Treknrakstā izcelti tie Jūsu izvēlētie (vai neizvēlētie) kursi, kuri ietekmē rezultāta izvēli. Pārejot no viena piedāvājuma uz otru, rezultāts tiek parādīts pēc iespējas līdzīgāks iepriekšējam. Kad izvēlēti pamata un padziļinātie kursi, tad iespējams arī apskatīt speckursu piedāvājumu. Papildus informācija par dažādiem ierobežojumiem un izvēles iespējām pieejama pie konkrētajiem kursiem."
        this.maziasinfo.innerHTML=this.info;

        this.linijuInfo=[];
        this.linijuInfo[8]="Izvēloties mācīties padziļināto kursu \"Matemātika II\", 12. klasē vairs nav kursa \"Matemātika I\". Tiem, kas neizvēlās šo padziļināto kursu, jāturpina apgūt kurss \"Matemātika I\" arī 12. klasē.";
        this.linijuInfo[12]="Rīgas Angļu ģimnāzija skolēniem piedāvā un īsteno padziļināto kursu komplektus un atbilstošus pamatkursus katrā mācību jomā divos virzienos - Dabaszinātņu un Eiropas studiju virzienā, katrā no tiem piedāvājot divus apakšvirzienus un vairākas izvēles: <br /> Dabaszinātņu virzienā iespējams izvēlēties apakšvirzienu \"Dabaszinātnes A\", kurā apgūstami visi individuālie pamatkursi dabaszinātņu jomā, un nav ierobežojumu attiecībā uz padziļināto kursu izvēli. Vēl Dabaszinātņu virzienā pieejams apakšvirziens \"Dabaszinātnes B\", kurā iespējams specializēties tikai vienā no dabaszinātņu jomas kursiem, pārējo vielu apgūstot apvienotajā kursā \"Dabaszinības\".<br /> \"Eiropas studiju virzienā\" apakšvirzienu dalīšana ir saistīta ar 3.svešvalodas izvēli.";
        this.linijuInfo[17]="Vispārīgā līmeņa kurss \"Dabaszinības\" iekļauj mācību saturu no Fizikas, Ķīmijas, Bioloģijas un Ģeogrāfijas.";
        this.linijuInfo[18]="Specializētais kurss \"Eiropas studiju\" virziena izvēlē.";
        this.linijuInfo[20]="Vizuālā māksla vai Mūzika.";
        this.linijuInfo[21]="\"Dabaszinātņu\" virzienam viens no šiem tehnoloģiju jomas kursiem ir obligāti jāapgūst. \"Eiropas studiju\" virzienam iespējams arī šos abus kursus neizvēlēties, dodot priekšroku kādam no Rīgas Angļu ģimnāzijas piedāvātajiem specializētajiem kursiem.";
        this.linijuInfo[24]="Padziļināto kursu izvēle tiks apstiprināta 11.klases vidū, skatoties pēc skolēna sekmēm piermajos 3 semestros konkrētajā mācību priekšmetā, kuru padziļināti skolēns vēlēsies apgūt.";
        this.linijuInfo[29]="Lai apgūtu padziļināto kursu \"Programmēšana II\", obligāti 11.klasē ir jāizvēlās mācīties kurss\"Programmēšana I\".";
        this.linijuInfo[30]="Lai apgūtu padziļināto kursu \"Fizika II\", obligāti jāapgūst kurss\"Fizika I\", kā arī jāapgūst padziļinātais kurss \"Matemātika II\".";
        this.linijuInfo[31]="Lai apgūtu padziļināto kursu \"Ķīmija II\", obligāti jāapgūst kurss\"Ķīmija I\".";
        this.linijuInfo[32]="Lai apgūtu padziļināto kursu \"Bioloģija II\", obligāti jāapgūst kurss\"Bioloģija I\"";
        this.linijuInfo[33]="Specializētos kursus drīkst izvēlēties tik daudzus, lai mācību stundu skaits nedēļā nepārsniedz 36 stundas. Kopā pa visiem gadiem obligāti jābūt vismaz 96 stundām nedēļā. Tātad, ja stundu skaits ir nepietiekams, nepieciešams izvēlēties kādu specializēto kursu.";

        this.virzienuNosaukumi=["Vēl nav pabeigta izvēle","Dabaszinātnes A","Dabaszinātnes B", "Eiropas studijas ar 3. svešvalodu", "Eiropas studijas bez 3. svešvalodas"];
        this.izdaritaIzvele(0);

        for(let i=0; i<42; i++){ //Tabulas aizpildīšana ar tekstu.
            for(let j=0; j<4; j++){
                if(this.pamattabula[i][j]===undefined){continue};
                this.tabulaLiela.rows[i].cells[j].innerHTML=this.pamattabula[i][j];
            }
        }
                            
        for(let i=13; i<42; i++){
            let drpdwnIzvele = document.createElement("select");
            drpdwnIzvele.setAttribute("class","custom-select custom-select-sm bg-transparent shadow border-dark font-italic");
            drpdwnIzvele.appendChild(document.createElement("option"));
            drpdwnIzvele.appendChild(document.createElement("option"));
            drpdwnIzvele.appendChild(document.createElement("option"));
            drpdwnIzvele.options[0].text="Neesmu vēl izvēlējies";
            drpdwnIzvele.options[0].setAttribute("class","bg-warning text-light");
            drpdwnIzvele.options[1].text="Vēlos šo mācīties";
            drpdwnIzvele.options[1].setAttribute("class","bg-success text-light");
            drpdwnIzvele.options[2].text="Nevēlos šo mācīties";
            drpdwnIzvele.options[2].setAttribute("class","bg-danger text-light");
            drpdwnIzvele.options[0].selected=true;
            drpdwnIzvele.options[0].disabled=true;
            if(i>33){
            drpdwnIzvele.options[0].disabled=false;
            }
            if(i>39 || i==34 || i==37){
                drpdwnIzvele.appendChild(document.createElement("option"));
                drpdwnIzvele.appendChild(document.createElement("option"));
                drpdwnIzvele.options[1].text="Vēlos šo mācīties 10.klasē";
                drpdwnIzvele.options[1].setAttribute("class","bg-success text-light");
                drpdwnIzvele.options[2].text="Vēlos šo mācīties 11.klasē";
                drpdwnIzvele.options[2].setAttribute("class","bg-success text-light");
                drpdwnIzvele.options[3].text="Vēlos šo mācīties 12.klasē";
                drpdwnIzvele.options[3].setAttribute("class","bg-success text-light");
                drpdwnIzvele.options[4].text="Nevēlos šo mācīties";
                drpdwnIzvele.options[4].setAttribute("class","bg-danger text-light");
            }
            
            drpdwnIzvele.setAttribute("id","izvele"+i);
            drpdwnIzvele.autors=0;
            drpdwnIzvele.onchange = (evt) => {this.izmainuParbaude(i);
            };
            this.tabulaLiela.rows[i].cells[4].appendChild(drpdwnIzvele);
        };
        
        // this.tabulaLiela.rows[21].deleteCell(3);
        // this.tabulaLiela.rows[21].deleteCell(2);
        // this.tabulaLiela.rows[21].deleteCell(1);
        // this.tabulaLiela.rows[24].cells[4].innerHTML="";
        // this.tabulaLiela.rows[33].cells[4].innerHTML="";

        this.divTabula.appendChild(this.tabulaLiela);
        this.deleteCells(21);
        this.deleteCells(1);
        this.deleteCells(12);
        this.deleteCells(24);
        this.deleteCells(33);

        //papildu aprēķiniem mainīgie
        this.padzilinatoSkaits=0;
        this.padzilinatoNoSkaits=0;
        this.dabaszinibuYesSkaits=0;
        this.dabaszinibuNoSkaits=0;
        // this.ieprieksNospiestais=0;

        this.pareizieTeksti(13,42);
        let r=this.tabulaLiela.insertRow(42);
        r.setAttribute("class","table-primary")
        r.appendChild(document.createElement("th"))
        for(let j=1; j<5; j++){
            r.insertCell(j);
        };
        r.cells[0].innerHTML="Speckursu izvēlei palikušas stundas:";
        r.cells[1].innerHTML=36-this.stundas10;
        r.cells[2].innerHTML=36-this.stundas11;
        r.cells[3].innerHTML=36-(this.stundas12+6*(3-this.padzilinatoSkaits));

        this.infoIzveide();
    }

    infoIzveide(){
        for(let i in this.linijuInfo){
            this.tabulaLiela.rows[i].cells[0].innerHTML+="   <img id='img"+i+"' src=\".\\info_logo.png\">"
            document.getElementById("img"+i).style.height="1.5em";
            document.getElementById("img"+i).style.cursor="pointer";
            document.getElementById("img"+i).onmouseleave = () => this.resetInfo();
            document.getElementById("img"+i).onmouseover = (evt) => {
                this.raditInfo(i);
            }
            //console.log(this.linijuInfo[i]);
        }
    }

    resetInfo(){
        document.getElementById("infovieta").innerHTML=this.info;
    }

    raditInfo(nr){
        document.getElementById("infovieta").innerHTML=this.linijuInfo[nr];

        //console.log(nr);
    }

    deleteCells(nr){
        for(let i=4;i>0;i--){
            this.tabulaLiela.rows[nr].deleteCell(i);
        }
        this.tabulaLiela.rows[nr].cells[0].setAttribute("colspan",5);
        document.getElementById("rinda"+nr).setAttribute("class","table-secondary font-weight-bolder");
    }

    pareizieTeksti(sak,beidz){              //smukumi
        for(let i=sak;i<beidz;i++){
            if(document.getElementById("izvele"+i) && document.getElementById("izvele"+i).selectedIndex==0){
                document.getElementById("rinda"+i).setAttribute("class","table-warning");
                if(this.pamattabula[i][1]>=1){
                    this.tabulaLiela.rows[i].cells[1].innerHTML="0/"+this.pamattabula[i][1];
                }
                if(this.pamattabula[i][2]>=1){
                    this.tabulaLiela.rows[i].cells[2].innerHTML="0/"+this.pamattabula[i][2];
                }
                if(this.pamattabula[i][3]>=1){
                    this.tabulaLiela.rows[i].cells[3].innerHTML="0/"+this.pamattabula[i][3];
                }
            }
            if(document.getElementById("izvele"+i) && document.getElementById("izvele"+i).selectedIndex==1){
                document.getElementById("rinda"+i).setAttribute("class","table-success");
                for(let j=1; j<4; j++){
                    if(this.pamattabula[i][j]===undefined){continue};
                    this.tabulaLiela.rows[i].cells[j].innerHTML=this.pamattabula[i][j];
                }    
            }
            if(document.getElementById("izvele"+i) && document.getElementById("izvele"+i).selectedIndex==2){
                document.getElementById("rinda"+i).setAttribute("class","table-danger");
                for(let j=1; j<4; j++){
                    this.tabulaLiela.rows[i].cells[j].innerHTML="";
                }
            }
            if(document.getElementById("izvele"+i) && document.getElementById("izvele"+i).autors==1){
                document.getElementById("rinda"+i).classList.add("font-weight-bolder");
                // document.getElementById("rinda"+i).classList.remove("text-black-50");
            }
            if(i>39 || i==34 || i==37){
                if(document.getElementById("izvele"+i).selectedIndex==4){
                    document.getElementById("rinda"+i).setAttribute("class","table-danger");
                    for(let j=1; j<4; j++){
                        this.tabulaLiela.rows[i].cells[j].innerHTML="";
                    }
                }
                if(document.getElementById("izvele"+i).selectedIndex>0 && document.getElementById("izvele"+i).selectedIndex <4){
                    document.getElementById("rinda"+i).setAttribute("class","table-success");
                    for(let j=1; j<4; j++){
                        this.tabulaLiela.rows[i].cells[j].innerHTML="";
                    }
                    let k = document.getElementById("izvele"+i).selectedIndex;
                    this.tabulaLiela.rows[i].cells[k].innerHTML=this.pamattabula[i][k];  
                }    
            }
        }
        this.stunduSummesana();
    }

    stunduSummesana(){
        this.stundas10=0;
        this.stundas11=0;
        this.stundas12=0;
        for(let i=1; i<42; i++){
            if(!this.tabulaLiela.rows[i].cells[1]){
                continue;
            }
            if(!isNaN(parseInt(this.tabulaLiela.rows[i].cells[1].innerHTML))){
                this.stundas10+=parseInt(this.tabulaLiela.rows[i].cells[1].innerHTML);
            }
            if(!isNaN(parseInt(this.tabulaLiela.rows[i].cells[2].innerHTML))){
                this.stundas11+=parseInt(this.tabulaLiela.rows[i].cells[2].innerHTML);
            }
            if(!isNaN(parseInt(this.tabulaLiela.rows[i].cells[3].innerHTML))){
                this.stundas12+=parseInt(this.tabulaLiela.rows[i].cells[3].innerHTML);
            }
        }
        this.divSkaits.childNodes[1].innerHTML="10.klasē = "+this.stundas10+"/36 stundas"
        this.divSkaits.childNodes[2].innerHTML="11.klasē = "+this.stundas11+"/36 stundas"
        this.divSkaits.childNodes[3].innerHTML="12.klasē = "+this.stundas12+"/36 stundas"
        this.divSkaits.childNodes[4].innerHTML="Pa visiem gadiem kopā = "+(this.stundas12+this.stundas10+this.stundas11)+" stundas (minimālais skaits 96 stundas, maksimālais 108 stundas)"
    }

    dabaszinibuA(){
        this.nopeNr(17,21);
        this.dabaszinibuYesSkaits=4;
        this.dabaszinibuNoSkaits=0;
        this.yepNr(13,17);
        this.resetTD();
    }

    resetTD(){
        if(document.getElementById("izvele23").selectedIndex==2 && document.getElementById("izvele22").selectedIndex==2){
            if(document.getElementById("izvele23").autors==1 && document.getElementById("izvele22").autors==1){
                this.forceResetNr(22,24)
            } else{
                if(document.getElementById("izvele23").autors==1){
                    this.yepNr(22,23);
                } else {
                    this.yepNr(23,24);
                }
            }
        }
    }

    padzilinatoSkaitisana(){
        this.padzilinatoSkaits=0;
        this.padzilinatoNoSkaits=0;
        for(let i=25; i<33; i++){
            if(document.getElementById("izvele"+i).selectedIndex==1){
                this.padzilinatoSkaits++;
            }
            if(document.getElementById("izvele"+i).selectedIndex==2){
                this.padzilinatoNoSkaits++;
            }
        }
        //console.log("skaitisana:",this.padzilinatoSkaits,"yes", this.padzilinatoNoSkaits,"no");
    }
    dabaszinatnuSkaitisana(){
        this.dabaszinibuYesSkaits=0;
        this.dabaszinibuNoSkaits=0;
        for(let i=13; i<17; i++){
            if(document.getElementById("izvele"+i).selectedIndex==1){
                this.dabaszinibuYesSkaits++;
            }
            if(document.getElementById("izvele"+i).selectedIndex==2){
                this.dabaszinibuNoSkaits++;
            }
        }
    }

    forceResetNr(sak,beidz){
        for(let i=sak;i<beidz;i++){
            if(document.getElementById("izvele"+i)){
                document.getElementById("izvele"+i).selectedIndex=0;
                document.getElementById("izvele"+i).autors=0;
            }
        };
    }

    resetNr(sak,beidz){
        for(let i=sak;i<beidz;i++){
            if(document.getElementById("izvele"+i)&&document.getElementById("izvele"+i).autors==0){
                document.getElementById("izvele"+i).selectedIndex=0;
            }
        };
    }

    nopeNr(sak,beidz){
        for(let i=sak;i<beidz;i++){
            if(document.getElementById("izvele"+i)&&document.getElementById("izvele"+i).selectedIndex!=2){
                document.getElementById("izvele"+i).selectedIndex=2;
                document.getElementById("izvele"+i).autors=0;              
            }
        };
    }

    yepNr(sak,beidz){
        for(let i=sak;i<beidz;i++){
            if(document.getElementById("izvele"+i)&&document.getElementById("izvele"+i).selectedIndex!=1){
                document.getElementById("izvele"+i).selectedIndex=1;
                document.getElementById("izvele"+i).autors=0;              
            }
        };
    }

    izmainuParbaude(nr){
        if(nr<33){
            document.getElementById("izvele"+nr).autors=1;
        }
        if(nr<21){
            this.obligataIzvele(nr);
            this.obligatieUzPadzilinatiem();
            this.resetSpec();
            // console.log(document.getElementById("izvele"+(nr+17)).autors);
        }
        if(nr>21 && nr<24){
            this.programmesanaDunT(nr);
            this.obligatieUzPadzilinatiem();
            this.resetSpec();
        }
        if(nr>24 && nr<33){
            // console.log("pirms",this.padzilinatoSkaits,this.padzilinatoNoSkaits);
            this.padzilinatoIzvele(nr);
            // console.log("pēc",this.padzilinatoSkaits,this.padzilinatoNoSkaits);
            this.padzilinatieUzObligatiem();
            this.resetSpec();
        }
        // console.log(nr,document.getElementById("izvele"+nr).autors);
        // this.obligatieUzPadzilinatiem();
        // console.log("pēc vieteja, pirms liekas pārskaitīšanas:",this.padzilinatoSkaits,this.padzilinatoNoSkaits);
        this.padzilinatoSkaitisana();
        this.dabaszinatnuSkaitisana();
        //this.resetSpec();
        // console.log("pēc liekas pārskaitīšanas:",this.padzilinatoSkaits,this.padzilinatoNoSkaits);
//        this.padzilinatoSkaitisana();
        this.pareizieTeksti(13,42);
        this.speckursuSaraksts();
        this.izvelesParbaude();
        // this.ieprieksNospiestais=nr;
        // console.log("beigas",this.padzilinatoSkaits,this.padzilinatoNoSkaits);
    }

    izvelesParbaude(){
        for(let i=13; i<21; i++){
            if(document.getElementById("izvele"+i).selectedIndex==0){
                this.izdaritaIzvele(0);
                return;
            }
        }
        if(document.getElementById("izvele"+17).selectedIndex==2){
            this.izdaritaIzvele(1);
        } else if(document.getElementById("izvele"+19).selectedIndex==1){
            this.izdaritaIzvele(3);
        } else if(document.getElementById("izvele"+19).selectedIndex==2 && document.getElementById("izvele"+18).selectedIndex==1){
            this.izdaritaIzvele(4);
        } else {
            this.izdaritaIzvele(2);
        }
    }

    resetSpec(){
        for(let i=34; i<42; i++){
            for(let j=1; j<3; j++){
                if(document.getElementById("izvele"+i).options[j]){
                    document.getElementById("izvele"+i).options[1].disabled=false;
                    this.forceResetNr(i,i+1);
                }
            }
        }
    }

    speckursuSaraksts(){
        for(let i=34; i<42; i++){
            document.getElementById("izvele"+i).autors=0;
            console.log(i, document.getElementById("izvele"+i).autors)
            for(let j=1; j<4; j++){
                if(document.getElementById("izvele"+i).options[j]){
                    console.log(i,j);
                    document.getElementById("izvele"+i).options[j].disabled=false;
                }
            }
            
        }
        this.tabulaLiela.rows[42].cells[1].innerHTML=36-this.stundas10;
        this.tabulaLiela.rows[42].cells[2].innerHTML=36-this.stundas11;
        this.tabulaLiela.rows[42].cells[3].innerHTML=36-(this.stundas12+6*(3-this.padzilinatoSkaits));
        if(36-this.stundas10<2){
            for(let i=34; i<41; i++){
                if((i==34 || i>39 || i==37) && document.getElementById("izvele"+i).selectedIndex!=1){
                    this.tabulaLiela.rows[i].cells[1].innerHTML="";
                    document.getElementById("izvele"+i).options[1].disabled=true;
                    //document.getElementById("izvele"+i).options[1].setAttribute("class","bg-secondary text-light");
                }
            }
        }
        if(36-this.stundas10<4){
            if(document.getElementById("izvele41").selectedIndex!=1){
                this.tabulaLiela.rows[41].cells[1].innerHTML="";
                document.getElementById("izvele41").options[1].disabled=true;                
            }
            //document.getElementById("izvele41").options[1].setAttribute("class","bg-secondary text-light");
        }
        if(36-this.stundas11<2){
            for(let i=34; i<41; i++){
                if((i==35 && document.getElementById("izvele"+i).selectedIndex!=1)||((i==34 || i>39 || i==37) && document.getElementById("izvele"+i).selectedIndex!=2)){
                    this.tabulaLiela.rows[i].cells[2].innerHTML="";
                    if(i>39 || i==37 || i==34){
                        document.getElementById("izvele"+i).options[2].disabled=true;
                        //document.getElementById("izvele"+i).options[2].setAttribute("class","bg-secondary text-light");
                    }
                }
            }
            if(document.getElementById("izvele35").selectedIndex!=1){
                this.tabulaLiela.rows[35].cells[3].innerHTML="";
                document.getElementById("izvele35").options[1].disabled=true;
                //document.getElementById("izvele35").options[1].setAttribute("class","bg-secondary text-light");
            }
        }
        if(36-this.stundas11<4){
            if(document.getElementById("izvele41").selectedIndex!=1){
                this.tabulaLiela.rows[41].cells[2].innerHTML="";
                document.getElementById("izvele41").options[2].disabled=true;
                //document.getElementById("izvele41").options[2].setAttribute("class","bg-secondary text-light");
            }
        }
        if(36-(this.stundas12+6*(3-this.padzilinatoSkaits))<2){
            for(let i=34; i<41; i++){
                if(((i==35 || i==36 || i==38 || i==39) && document.getElementById("izvele"+i).selectedIndex!=1)||((i==34 || i>39 || i==37) && document.getElementById("izvele"+i).selectedIndex!=3)){
                    this.tabulaLiela.rows[i].cells[3].innerHTML="";
                    if(i>39 || i==37 || i==34){
                        document.getElementById("izvele"+i).options[3].disabled=true;
                    // document.getElementById("izvele"+i).options[3].setAttribute("class","bg-secondary text-light");
                    } else{
                        document.getElementById("izvele"+i).options[1].disabled=true;
                    //  document.getElementById("izvele"+i).options[1].setAttribute("class","bg-secondary text-light");
                    }
                }
            }
            if(document.getElementById("izvele35").selectedIndex==0){
                this.tabulaLiela.rows[35].cells[2].innerHTML="";
            }
        }
        if(36-(this.stundas12+6*(3-this.padzilinatoSkaits))<4){
            if(document.getElementById("izvele41").selectedIndex==0){
                this.tabulaLiela.rows[41].cells[3].innerHTML="";
                document.getElementById("izvele41").options[3].disabled=true;
            //   document.getElementById("izvele41").options[3].setAttribute("class","bg-secondary text-light");
            }
        }

        
    }

    obligatieUzPadzilinatiem(){
        let izmainitais=0;
        for(let i=13; i<16; i++){
            if(document.getElementById("izvele"+i).selectedIndex==2){
                if(document.getElementById("izvele"+(i+17)).selectedIndex!=2){
                    this.nopeNr(i+17,i+18);
                    izmainitais=i+17;
                }
            }
        }
        if(izmainitais!=0){
            this.padzilinatoSkaitisana();
            this.izmainuParbaude(izmainitais);
            document.getElementById("izvele"+(izmainitais)).autors=0;
        }
        if(document.getElementById("izvele23").selectedIndex==2){
            if(document.getElementById("izvele29").selectedIndex!=2){
                this.nopeNr(29,30);
                this.izmainuParbaude(29);
                document.getElementById("izvele29").autors=0;
            }
        }
    }

//     obligatieUzPadzilinatiem(){
//         for(let i=13; i<16; i++){
//             // console.log(document.getElementById("izvele"+i).selectedIndex,"izvele",document.getElementById("izvele"+i).autors,"autors",i,"i")
//             if(document.getElementById("izvele"+i).selectedIndex!=2){
//                 if(document.getElementById("izvele"+(i+17)).autors==0){
//                     this.resetNr(i+17,i+18);
//                     // console.log(i+17, "yes dators",document.getElementById("izvele"+(i+17)).selectedIndex);
//                 } //else {
//                 //     console.log(i+17, document.getElementById("izvele"+(i+17)).selectedIndex, "iet padzilinaatajos")
//                      //this.padzilinatoIzvele(i+17);
//                 //     console.log(i+17, document.getElementById("izvele"+(i+17)).selectedIndex, "ara no padzilinaatajos")
//                 //}
//             }
//             if(document.getElementById("izvele"+i).selectedIndex==2){
//                 // console.log(i,"no")
//                 if(document.getElementById("izvele"+(i+17)).selectedIndex==1){
//                 }
//                 if(document.getElementById("izvele"+(i+17)).selectedIndex!=2){
//                     this.nopeNr(i+17,i+18);
//                     // console.log(document.getElementById("izvele"+(i+17)).selectedIndex,this.padzilinatoSkaits,this.padzilinatoNoSkaits);
//                     this.padzilinatoIzvele(i+17);
//                     this.padzilinatoSkaitisana();    
//                 }
//             }
//         }
//         //Tālāk programmēšana
//         if(document.getElementById("izvele23").selectedIndex==2){
//             if(document.getElementById("izvele29").selectedIndex!=2){
//                 this.nopeNr(29,30);
//                 this.padzilinatoIzvele(29);
//             }
//         }
//         if(document.getElementById("izvele23").selectedIndex==1){
//             if(document.getElementById("izvele29").selectedIndex==2){
//                 this.resetNr(29,30);
//                 this.padzilinatoSkaitisana();
//             }
//         }
//         this.padzilinatoSkaitisana();
//         if(this.padzilinatoNoSkaits>5){
//             this.padzilinatoNoSkaits=0;
//             for(let i=25; i<33; i++){
//                 if(document.getElementById("izvele"+i).selectedIndex==2){
//                     document.getElementById("izvele"+i).autors=0;
//                     this.resetNr(i,i+1); 
//                 }
//             }
//             this.padzilinatoSkaitisana();
// //            console.log(this.padzilinatoNoSkaits);
//             this.obligatieUzPadzilinatiem();
// //            console.log(this.padzilinatoNoSkaits);
//         }
//         // console.log(this.padzilinatoSkaits,"yes",this.padzilinatoNoSkaits,"no")
//     }

    padzilinatieUzObligatiem(){
        let izmainitais=0;
        for(let i=30; i<33; i++){
            if(document.getElementById("izvele"+i).selectedIndex==1 && document.getElementById("izvele"+(i-17)).selectedIndex!=1){
                this.yepNr(i-17,i-16);
                izmainitais=i-17;
            }
        }
        if(izmainitais!=0){
            this.izmainuParbaude(izmainitais);
            document.getElementById("izvele"+(izmainitais)).autors=0;
        }
        if(document.getElementById("izvele29").selectedIndex==1 && document.getElementById("izvele23").selectedIndex!=1){
            this.yepNr(23,24);
            this.izmainuParbaude(23);
            document.getElementById("izvele23").autors=0;
        }

    }

    // padzilinatoPareizums(){
    //     this.padzilinatoSkaitisana();
    //     // for(let i=13;i<16;i++){
    //     //     if(document.getElementById("izvele"+i).selectedIndex==2){
    //     //         this.nopeNr(i+17,i+18);
    //     //         this.padzilinatoIzvele(i+17);
    //     //     }
    //     // }
    // }

    padzilinatoIzvele(nr){
        let previous =this.padzilinatoSkaits;
        if(document.getElementById("izvele"+nr).selectedIndex==1){
            console.log("iegaja jā", previous)
            if(this.padzilinatoSkaits==3){
                this.nopeNr(nr,nr+1);
                return;
            }
            this.padzilinatoSkaitisana();
            if(this.padzilinatoSkaits==3){
                for(let i=25; i<33; i++){
                    if(document.getElementById("izvele"+i).selectedIndex!=1){
                        this.nopeNr(i,i+1);
                    }
                }
                this.padzilinatoNoSkaits=5;
            }    
            if(nr==25){         //matematika
                this.tabulaLiela.rows[8].cells[3].innerHTML="";
                document.getElementById("rinda8").setAttribute("class","table-primary font-weight-bolder");
            }

            if(nr==30){ //Fizika
                let pirmsTamMatem=document.getElementById("izvele25").selectedIndex;
                this.yepNr(25,26);
                this.padzilinatoSkaitisana();
                if(this.padzilinatoSkaits==4){
                    this.resetNr(26,33);
                    this.padzilinatoSkaitisana();
                    if(this.padzilinatoSkaits==4){
                        for(let i=26; i<33; i++){
                            if(document.getElementById("izvele"+i).selectedIndex==1&&i!=30){
                                this.forceResetNr(i,i+1);
                            }
                        }
                        this.padzilinatoSkaitisana();
                    }

                }
                if(pirmsTamMatem!=1){
                    console.log("pirms",this.padzilinatoSkaits, pirmsTamMatem,document.getElementById("izvele25").selectedIndex)
                    this.padzilinatoSkaits--;
                    this.padzilinatoIzvele(25);
                    console.log("pec",pirmsTamMatem,document.getElementById("izvele25").selectedIndex)
                }
            }
            // this.yepNr(nr,nr+1);
        }
        if(document.getElementById("izvele"+nr).selectedIndex==2){
            console.log("iegaja nē")
            this.padzilinatoSkaitisana();
            if(previous==3){ //Šis paliek neizvēlēts, pārējie atverās
                for(let i=25; i<33; i++){
                    if(document.getElementById("izvele"+i).selectedIndex==2){
                        this.resetNr(i,i+1); 
                    }
                }
                this.padzilinatoSkaitisana();
                if(this.padzilinatoNoSkaits>4){
                    for(let i=25; i<33; i++){
                        if(document.getElementById("izvele"+i).selectedIndex==2){
                            this.forceResetNr(i,i+1); 
                        }
                    }    
                }
                this.nopeNr(nr,nr+1)
                document.getElementById("izvele"+nr).autors=1;
            }
            this.padzilinatoSkaitisana();
            if(nr==25){     //Ja matemātiku neņem
                // if(document.getElementById("izvele30").selectedIndex==1){ 
                //     this.padzilinatoSkaits--;
                // }
                this.padzilinatoSkaitisana();
                if(document.getElementById("izvele"+30).selectedIndex!=2){
                    this.nopeNr(30,31);
//                    this.padzilinatoIzvele(30);
                }
                this.tabulaLiela.rows[8].cells[3].innerHTML=3;
                document.getElementById("rinda8").setAttribute("class","table-info");
            }
            if(this.padzilinatoNoSkaits==5){
                for(let i=25;i<33; i++){
                    if(document.getElementById("izvele"+i).selectedIndex==0){
                        this.yepNr(i,i+1);
                        this.padzilinatoIzvele(i);
                    }
                }
            }
            if(this.padzilinatoNoSkaits>5){
                this.forceResetNr(26,33);
                this.padzilinatoSkaitisana();
                this.padzilinatoIzvele(25);
            }
        }
        this.padzilinatoSkaitisana();
        this.obligatieUzPadzilinatiem();
    }

    programmesanaDunT(nr){
        if(nr==22){
            if(document.getElementById("izvele"+nr).selectedIndex==1){
                this.nopeNr(23,24);
            }
            if(document.getElementById("izvele"+nr).selectedIndex==2){
                if(document.getElementById("izvele18").selectedIndex==2){
                    this.yepNr(23,24);
                }
            }
        }
        if(nr==23){
            if(document.getElementById("izvele"+nr).selectedIndex==1){
                this.nopeNr(22,23);
            }
            if(document.getElementById("izvele"+nr).selectedIndex==2){
                if(document.getElementById("izvele18").selectedIndex==2){
                    this.yepNr(22,23);
                }
            }
        }
    }

    izdaritaIzvele(nr){
        this.divSkaidro.childNodes[0].innerHTML="Jūs esat izvēlējušies programmu: <br />"+this.virzienuNosaukumi[nr];
    }

    obligataIzvele(nr){
        if(document.getElementById("izvele"+nr).selectedIndex==1){ //Ir izvēlēts kaut kas
            if(nr<17){ //dabaszinatnes A
                this.dabaszinatnuSkaitisana();
                if(this.dabaszinibuYesSkaits>1){
                    this.dabaszinibuA();
                }
                if(document.getElementById("izvele17").selectedIndex==1){
                    this.yepNr(20,21);
                    this.dabaszinibuNoSkaits=3;
                    this.nopeNr(13,17);
                    this.yepNr(nr,nr+1);
                    document.getElementById("izvele"+nr).autors=1;
                    this.nopeNr(18,20);
                    this.resetTD();
                }
            }
            if(nr==17){
                this.yepNr(20,21);
                if (this.dabaszinibuYesSkaits==1){
                    for(let i=13; i<17; i++){
                        if(!(document.getElementById("izvele"+i).selectedIndex==1)){
                            this.nopeNr(i,i+1);
                        }
                    }
                    this.dabaszinibuNoSkaits=3;
                    this.nopeNr(18,20);
                    this.resetTD();
                }
                if(this.dabaszinibuYesSkaits>1){
                    this.dabaszinibuYesSkaits=0;
                    this.dabaszinibuNoSkaits=0;
                    for(let i=13; i<17; i++){
                        document.getElementById("izvele"+i).autors=0;
                    }
                    this.resetNr(13,17);
                    this.resetNr(18,20);
                }
            }
            if(nr==18){ //Eiropas kultūras telpa
                this.dabaszinibuYesSkaits=0;
                this.dabaszinibuNoSkaits=4;
                this.nopeNr(13,17);
                this.yepNr(17,19);
                this.yepNr(20,21);
            }
            if(nr==19){//3.svesvaloda
                this.dabaszinibuYesSkaits=0;
                this.dabaszinibuNoSkaits=4;
                this.nopeNr(13,17);
                this.yepNr(17,21);
            }
            if(nr==20){//Kultura un maksla
                if(this.dabaszinibuSkaits==1){
                    this.yepNr(17,18);
                    this.obligataIzvele(17);
                    return;
                }
                this.dabaszinibuYesSkaits=0;
                for(let i=13; i<17; i++){
                    document.getElementById("izvele"+i).autors=0;
                }
                this.resetNr(13,20);
                this.yepNr(17,18);
            }
        }
        if(document.getElementById("izvele"+nr).selectedIndex==2){ //Ir neizvēlēts kaut kas
            if(nr<17){
                this.dabaszinatnuSkaitisana();
                this.yepNr(17,18);
                this.yepNr(20,21);
                if(this.dabaszinibuYesSkaits>1){
                    this.dabaszinibuYesSkaits=0;
                    for(let i=13; i<17; i++){
                        document.getElementById("izvele"+i).autors=0;
                    }
                    this.resetNr(13,17);
                    this.nopeNr(nr,nr+1);
                    document.getElementById("izvele"+nr).autors=1;
                    this.yepNr(17,18);
                    this.yepNr(20,21); 
                }
                if(this.dabaszinibuYesSkaits==1){
                    this.obligataIzvele(17);
                }
                if(this.dabaszinibuNoSkaits==4){
                    this.dabaszinibuYesSkaits=0;
                    this.yepNr(18,19);
                    this.obligataIzvele(18);
                }
            }
            if(nr==17){
                this.dabaszinibuA();
            }
            if(nr==18){
                if(this.dabaszinibuNoSkaits==4){
                    this.resetNr(13,17);
                    this.dabaszinatnuSkaitisana();
                    this.resetTD();
                }
                this.nopeNr(19,20);
            }
            if(nr==20){
                this.dabaszinibuA();
            }
        }
    }

}

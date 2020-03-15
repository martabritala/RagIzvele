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
        this.stundas10=0;
        this.stundas11=0;
        this.stundas12=0;
        this.konteiners.appendChild(this.saturs);
        this.saturs.appendChild(this.saturarinda);
        this.saturarinda.appendChild(this.divTabula);
        this.saturarinda.appendChild(this.teksts);
        this.teksts.appendChild(this.divSkaidro);
        this.divSkaidro.appendChild(this.divSkaits);
        


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

        this.pamattabula=[["","10.kl.","11.kl","12.kl"],["Visiem RAG obligātie kursi","","",""],["Latviešu valoda",3,3,""],["Angļu valoda",3,3,""],
            ["2.svešvaloda*",2,2,2],["Vēsture un soc.zin.",3,4,""],["Literatūra",3,3,""],["Kultūras pamati",3,"",""],
            ["Matemātika",5,7,3],["Datorika",2,"",""],["Sports un veselība",2,3,3],["Pētniecība","","",2],["Pirms stāšanās obligāti jāizvēlas:","","",""],
            ["Fizika",4,3,""],["Ķīmija",3,3,],["Bioloģija",1,2,],["Ģeogrāfija",2,1,],["Dabaszinības",4,4,1],["Eiropas kultūras telpa",2,,],
            ["3. svešvaloda",3,3,3],["Kultūra un māksla",,2,1],["10.klases beigās jāizvēlas:",,,],["Dizains un tehnoloģijas",,2,4],["Programmēšana",,2,4],
            ["Padziļinātie kursi (jāizvēlas 3 kursi līdz 11.klases vidum):",,,],["Matemātika un analīze",,,8],["Angļu valoda",,,6],
            ["Latviešu valoda",,,6],["Sociālās zinības",,,6],["Programmēšana",,,6],["Fizika",,,6],["Ķīmija",,,6],["Bioloģija",,,6],
            ["Speckursu piedāvājums (neobligāti):",,,],["Debates (vienu gadu)",2,2,2],["Angļu literatūra",,2,2],["Filozofija",,,2],["Publiskā runa (vienu gadu)",2,2,2],
            ["Papildu angļu valoda 12.klasē",,,2],["Psiholoģija",,,2],["Robotika (vienu gadu)",2,2,2],["Krievu valoda bez priekšzināšanām <br /> (vienu gadu)",4,4,4]
        ];

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
                drpdwnIzvele.classList.add("d-none");
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
        this.dabaszinibuYesSkaits=0;
        this.dabaszinibuNoSkaits=0;
        this.ieprieksNospiestais=0;

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
        r.cells[3].innerHTML=36-this.stundas12;
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
                document.getElementById("izvele23").autors=0 
                document.getElementById("izvele22").autors=0
                this.resetNr(22,24);
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
        document.getElementById("izvele"+nr).autors=1;
        if(nr<21){
            this.obligataIzvele(nr);
            this.obligatieUzPadzilinatiem();
        }
        if(nr>21 && nr<24){
            this.programmesanaDunT(nr);
            this.obligatieUzPadzilinatiem();
        }
        if(nr>24 && nr<33){
            this.padzilinatoIzvele(nr);
            this.padzilinatieUzObligatiem();
        }
        this.padzilinatoSkaitisana();
        this.dabaszinatnuSkaitisana();
        this.padzilinatoPareizums();
        this.padzilinatoSkaitisana();
        this.pareizieTeksti(13,42);
        this.speckursuSaraksts();
        this.izvelesParbaude();
        this.ieprieksNospiestais=nr;
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

    speckursuSaraksts(){
        this.tabulaLiela.rows[42].cells[1].innerHTML=36-this.stundas10;
        this.tabulaLiela.rows[42].cells[2].innerHTML=36-this.stundas11;
        this.tabulaLiela.rows[42].cells[3].innerHTML=36-this.stundas12;
        if(36-this.stundas10<2){
            for(let i=34; i<41; i++){
                this.tabulaLiela.rows[i].cells[1].innerHTML="";
            }
        }
        if(36-this.stundas10<4){
            this.tabulaLiela.rows[41].cells[1].innerHTML="";
        }
        if(36-this.stundas11<2){
            for(let i=34; i<41; i++){
                this.tabulaLiela.rows[i].cells[2].innerHTML="";
            }
            this.tabulaLiela.rows[35].cells[3].innerHTML="";
        }
        if(36-this.stundas11<4){
            this.tabulaLiela.rows[41].cells[2].innerHTML="";
        }
        if(36-this.stundas12<2){
            for(let i=34; i<41; i++){
                this.tabulaLiela.rows[i].cells[3].innerHTML="";
            }
            this.tabulaLiela.rows[35].cells[2].innerHTML="";
        }
        if(36-this.stundas12<4){
            this.tabulaLiela.rows[41].cells[3].innerHTML="";
        }

        
    }

    obligatieUzPadzilinatiem(){
        for(let i=13; i<16; i++){
            // console.log(document.getElementById("izvele"+i).selectedIndex,"izvele",document.getElementById("izvele"+i).autors,"autors",i,"i")
            if(document.getElementById("izvele"+i).selectedIndex!=2){
                if(document.getElementById("izvele"+(i+17)).autors==0){
                    this.resetNr(i+17,i+18);
                    // console.log(i+17, "yes dators",document.getElementById("izvele"+(i+17)).selectedIndex);
                } //else {
                //     console.log(i+17, document.getElementById("izvele"+(i+17)).selectedIndex, "iet padzilinaatajos")
                //     this.padzilinatoIzvele(i+17);
                //     console.log(i+17, document.getElementById("izvele"+(i+17)).selectedIndex, "ara no padzilinaatajos")
                // }
            }
            if(document.getElementById("izvele"+i).selectedIndex==2){
                // console.log(i,"no")
                if(document.getElementById("izvele"+(i+17)).selectedIndex==1){
                }
                if(document.getElementById("izvele"+(i+17)).selectedIndex!=2){
                    this.nopeNr(i+17,i+18);
                    // console.log(document.getElementById("izvele"+(i+17)).selectedIndex,this.padzilinatoSkaits,this.padzilinatoNoSkaits);
                    this.padzilinatoIzvele(i+17);
                    this.padzilinatoSkaitisana();    
                }
            }
        }
        //Tālāk programmēšana
        if(document.getElementById("izvele23").selectedIndex==2){
            if(document.getElementById("izvele29").selectedIndex!=2){
                this.nopeNr(29,30);
                this.padzilinatoIzvele(29);
            }
        }
        if(document.getElementById("izvele23").selectedIndex==1){
            if(document.getElementById("izvele29").selectedIndex==2){
                this.resetNr(29,30);
                this.padzilinatoSkaitisana();
            }
        }
        this.padzilinatoSkaitisana();
        // console.log(this.padzilinatoSkaits,"yes",this.padzilinatoNoSkaits,"no")
    }

    padzilinatieUzObligatiem(){
        for(let i=30; i<33; i++){
            if(document.getElementById("izvele"+i).selectedIndex==1 && document.getElementById("izvele"+(i-17)).selectedIndex!=1){
                this.yepNr(i-17,i-16);
                this.obligataIzvele(i-17);
            }
        }
        if(document.getElementById("izvele29").selectedIndex==1 && document.getElementById("izvele23").selectedIndex!=1){
            this.yepNr(23,24);
            this.programmesanaDunT(23);
        }

    }

    padzilinatoPareizums(){
        this.padzilinatoSkaitisana();
        if(this.padzilinatoSkaits==3){
            for(let i=25; i<33; i++){
                if(document.getElementById("izvele"+i).selectedIndex!=1){
                    this.nopeNr(i,i+1);
                }
            }
            return;
        }
        for(let i=13;i<16;i++){
            if(document.getElementById("izvele"+i).selectedIndex==2){
                this.nopeNr(i+17,i+18);
                this.padzilinatoIzvele(i+17);
            }
        }
    }

    padzilinatoIzvele(nr){
        if(document.getElementById("izvele"+nr).selectedIndex==1){
            if(this.padzilinatoSkaits==3){
                this.nopeNr(nr,nr+1);
                return;
            }
            this.padzilinatoSkaits++;
            if(nr==25){         //matematika
                this.tabulaLiela.rows[8].cells[3].innerHTML="";
                document.getElementById("rinda8").setAttribute("class","bg-primary text-light");
            }
            if(this.padzilinatoSkaits==3){
                for(let i=25; i<33; i++){
                    if(document.getElementById("izvele"+i).selectedIndex!=1){
                        this.nopeNr(i,i+1);
                    }
                }
            }

            if(nr==30){ //Fizika
                if(document.getElementById("izvele25").selectedIndex!=1){
                    this.yepNr(25,26);
                    this.padzilinatoIzvele(25);                
                }
                if(document.getElementById("izvele25").selectedIndex!=1){
                    for(let i=25; i<33; i++){
                        document.getElementById("izvele"+i).autors=0;
                    }
                    this.resetNr(25,33);
                    this.padzilinatoSkaits=0;
                    this.yepNr(30,31);
                    document.getElementById("izvele30").autors=1;
                    this.padzilinatoIzvele(30);
                }
            }
            this.yepNr(nr,nr+1);
        }
        if(document.getElementById("izvele"+nr).selectedIndex==2){
            let previous=this.padzilinatoSkaits;
            this.padzilinatoSkaitisana();
            if(this.padzilinatoSkaits==2 && previous==3){ //Šis paliek neizvēlēts, pārējie atverās
                for(let i=25; i<33; i++){
                    if(document.getElementById("izvele"+i).selectedIndex==2){
                        this.resetNr(i,i+1); 
                    }
                }
                document.getElementById("izvele"+nr).selectedIndex=2;
            }
            if(this.padzilinatoNoSkaits==5){
                for(let i=25;i<33; i++){
                    if(document.getElementById("izvele"+i).selectedIndex!=2){
                        this.yepNr(i,i+1);
                        this.padzilinatoIzvele(i);
                    }
                }
            }
            if(nr==25){     //Ja matemātiku neņem
                // if(document.getElementById("izvele30").selectedIndex==1){ 
                //     this.padzilinatoSkaits--;
                // }
                this.nopeNr(30,31);
                this.padzilinatoIzvele(30);
                this.tabulaLiela.rows[8].cells[3].innerHTML=3;
                document.getElementById("rinda8").setAttribute("class","table-info");
            }
        }
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
                this.dabaszinibuYesSkaits++;
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
                }
            }
            if(nr==20){
                this.dabaszinibuA();
            }
        }
    }

}
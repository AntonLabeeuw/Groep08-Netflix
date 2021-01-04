     function printAllUsers() {
         var users = [];
         $.getJSON("JSON/users.json", function (jsonfile) {
             allusers = jsonfile.users;
             allusers.forEach(GetUsers);

             function GetUsers(item, index) {
                 users[index] = item;
             }
             //console.log(users[0]);
             users.forEach(addToTable);

             function addToTable(user, idex) {
                 //console.log(user);
                 var y = document.createElement("TR");
                 y.setAttribute("id", "user_" + user["id"]);
                 document.getElementById("tbody").appendChild(y);

                 var checkboxtd = document.createElement("TD");
                 checkboxtd.setAttribute("class", "tdW100 text-center");

                 var checkbox = document.createElement("INPUT");
                 checkbox.type = "checkbox";
                 checkboxtd.appendChild(checkbox);
                 document.getElementById("user_" + user["id"]).appendChild(checkboxtd);

                 var idtd = document.createElement("TD");
                 idtd.setAttribute("class", "tdW100");
                 idtd.setAttribute("data-label", "Id");
                 idtd.innerHTML = user["id"];
                 document.getElementById("user_" + user["id"]).appendChild(idtd);

                 var emailtd = document.createElement("TD");
                 emailtd.setAttribute("class", "tdW100");
                 emailtd.setAttribute("data-label", "Email");
                 emailtd.innerHTML = user["email"];
                 document.getElementById("user_" + user["id"]).appendChild(emailtd);

                 var typeabonneetd = document.createElement("TD");
                 typeabonneetd.setAttribute("class", "tdW100");
                 typeabonneetd.setAttribute("data-label", "Type");
                 typeabonneetd.innerHTML = user["typeabonnee"];
                 document
                     .getElementById("user_" + user["id"])
                     .appendChild(typeabonneetd);

                 var aangemaakttd = document.createElement("TD");
                 aangemaakttd.setAttribute("class", "tdW100");
                 aangemaakttd.setAttribute("data-label", "Aangemaakt");
                 aangemaakttd.innerHTML = user["aangemaakt"];
                 document
                     .getElementById("user_" + user["id"])
                     .appendChild(aangemaakttd);

                 var laatstelogintd = document.createElement("TD");
                 laatstelogintd.setAttribute("class", "tdW100");
                 laatstelogintd.setAttribute("data-label", "Laatste login");
                 laatstelogintd.innerHTML = user["laatstelogin"];
                 document
                     .getElementById("user_" + user["id"])
                     .appendChild(laatstelogintd);

                 var profielentd = document.createElement("TD");
                 profielentd.setAttribute("class", "tdW100");
                 profielentd.setAttribute("data-label", "Profielen");
                 profielentd.innerHTML = user["profielen"].length;
                 document.getElementById("user_" + user["id"]).appendChild(profielentd);

                 var Icons = document.createElement("TD");
                 Icons.setAttribute("class", "tdW100");
                 var editIcon = document.createElement("A");
                 editIcon.setAttribute("href", "gebruikersbeheer_detail_edit.html");
                 editIcon.setAttribute("onclick", "localStorage.setItem('user_id', " + user["id"] + ")");
                 editIcon.className = "fas fa-pen col-5";
                 Icons.appendChild(editIcon);
                 var deleteIcon = document.createElement("I");
                 deleteIcon.className = "fas fa-times col-5";
                 Icons.appendChild(deleteIcon);
                 document.getElementById("user_" + user["id"]).appendChild(Icons);
             }
         });
     }

     function printAllArchivedUsers() {
         console.log("archive loaded");
         var archiveUsers = [];
         $.getJSON("JSON/archive_users.json", function (jsonfile) {
             allArchivedUsers = jsonfile.archived_users;
             allArchivedUsers.forEach(GetUsers);

             function GetUsers(item, index) {
                 archiveUsers[index] = item;
             }
             //console.log(archiveUsers[0]);
             archiveUsers.forEach(addToTable);

             function addToTable(archiveUser, idex) {
                 //console.log(archiveUsers);
                 var y = document.createElement("TR");
                 y.setAttribute("id", "user_" + archiveUser["id"]);
                 document.getElementById("tbody").appendChild(y);

                 var checkboxtd = document.createElement("TD");
                 checkboxtd.setAttribute("class", "tdW100 text-center");

                 var checkbox = document.createElement("INPUT");
                 checkbox.type = "checkbox";
                 checkboxtd.appendChild(checkbox);
                 document.getElementById("user_" + archiveUser["id"]).appendChild(checkboxtd);

                 var idtd = document.createElement("TD");
                 idtd.setAttribute("class", "tdW100");
                 idtd.setAttribute("data-label", "Id");
                 idtd.innerHTML = archiveUser["id"];
                 document.getElementById("user_" + archiveUser["id"]).appendChild(idtd);

                 var emailtd = document.createElement("TD");
                 emailtd.setAttribute("class", "tdW100");
                 emailtd.setAttribute("data-label", "Email");
                 emailtd.innerHTML = archiveUser["email"];
                 document.getElementById("user_" + archiveUser["id"]).appendChild(emailtd);

                 var typeabonneetd = document.createElement("TD");
                 typeabonneetd.setAttribute("class", "tdW100");
                 typeabonneetd.setAttribute("data-label", "Type");
                 typeabonneetd.innerHTML = archiveUser["typeabonnee"];
                 document
                     .getElementById("user_" + archiveUser["id"])
                     .appendChild(typeabonneetd);

                 var aangemaakttd = document.createElement("TD");
                 aangemaakttd.setAttribute("class", "tdW100");
                 aangemaakttd.setAttribute("data-label", "Aangemaakt");
                 aangemaakttd.innerHTML = archiveUser["aangemaakt"];
                 document
                     .getElementById("user_" + archiveUser["id"])
                     .appendChild(aangemaakttd);

                 var gearchiveerdtd = document.createElement("TD");
                 gearchiveerdtd.setAttribute("class", "tdW100");
                 gearchiveerdtd.setAttribute("data-label", "Gearchiveerdtd");
                 gearchiveerdtd.innerHTML = archiveUser["gearchiveerd"];
                 document
                     .getElementById("user_" + archiveUser["id"])
                     .appendChild(gearchiveerdtd);

                 var profielentd = document.createElement("TD");
                 profielentd.setAttribute("class", "tdW100");
                 profielentd.setAttribute("data-label", "Profielen");
                 profielentd.innerHTML = archiveUser["profielen"].length;
                 document.getElementById("user_" + archiveUser["id"]).appendChild(profielentd);

                 var Icons = document.createElement("TD");
                 var addIcon = document.createElement("I");
                 Icons.setAttribute("class", "tdW100 iconbox");
                 addIcon.className = "fas fa-plus col-12";
                 Icons.appendChild(addIcon);
                 document.getElementById("user_" + archiveUser["id"]).appendChild(Icons);
             }
         });
     }

     function toggleProfiles() {
         var x = document.getElementById("dropprofielen");
         if (x.style.display === "none") {
             x.style.display = "block";
         } else {
             x.style.display = "none";
         }
     }

     function clickAble(buttonId, divId) {
         $("#" + divId + " a").click(function () {
             $("#" + buttonId + " .selection").text($(this).text());
         });
     }
     function getUser(user_id){
        var users = [];
        var selectedUser =[];
         $.getJSON("JSON/users.json", function (jsonfile) {
             allusers = jsonfile.users;
             allusers.forEach(GetUsers);

             function GetUsers(item, index) {
                 users[index] = item;
                 //console.log(users[index]);
                 if(users[index].id == user_id){
                    selectedUser = users[index];
                 }
             }
             //console.log(selectedUser);
             if(selectedUser.length != 0){
                 document.getElementById("user").innerHTML= "Gebruikersgegevens van user '"+ selectedUser.id+"'";
                document.getElementsByName("naam")[0].value = selectedUser.naam;
                document.getElementsByName("voornaam")[0].value = selectedUser.voornaam;
                document.getElementsByName("gebruikersnaam")[0].value = selectedUser.gebruikersnaam;
                document.getElementsByName("email")[0].value = selectedUser.email;
                document.getElementsByName("geboortedatum")[0].value = selectedUser.geboortedatum;
                document.getElementsByName("adres")[0].value = selectedUser.adres.straat;
                document.getElementsByName("stad")[0].value = selectedUser.adres.stad;
                document.getElementsByName("postcode")[0].value = selectedUser.adres.postcode;
                document.getElementsByName("land")[0].value = selectedUser.adres.land;
                var mobiel = selectedUser.telefoonnummer[0].nummer;
                mobiel = mobiel.replace(/\s+/g, '');
                document.getElementsByName("mobiel")[0].value = mobiel;
                var telefoon = selectedUser.telefoonnummer[1].nummer;
                telefoon = telefoon.replace(/\s+/g, '');
                document.getElementsByName("telefoon")[0].value = telefoon;
                document.getElementById("betaalmethode").getElementsByTagName("span")[0].innerHTML= selectedUser.betaalmethode;
                document.getElementById("type").getElementsByTagName("span")[0].innerHTML= selectedUser.typeabonnee;
                document.getElementsByName("profielnaam0")[0].value = selectedUser.profielen[0].profielnaam;
                document.getElementsByName("leeftdijcategorie0")[0].value = selectedUser.profielen[0].leeftijdcategorie;
                document.getElementsByName("profielnaam1")[0].value = selectedUser.profielen[1].profielnaam;
                document.getElementsByName("leeftdijcategorie1")[0].value = selectedUser.profielen[1].leeftijdcategorie;
             }
             else{
                //nothing ejh
             }
         });
     }
     function show_hide_column(id,col_no) {
        var tbl = document.getElementById("tablePreview");
        var rows = tbl.getElementsByTagName('tr');
        var checkBox = document.getElementById(id);
        console.log(checkBox.checked);  
        
        for (var row = 0; row < rows.length; row++) {
            var cols = rows[row].children;
            if (col_no >= 0 && col_no < cols.length) {
                var cell = cols[col_no];
                if (cell.tagName == 'TD') cell.style.display = checkBox.checked ? 'table-cell' : 'none';
                if (cell.tagName == 'TH') cell.style.display = checkBox.checked ? 'table-cell' : 'none';
            }
        }
    }
    //Van internet
     function sortTable(tableClass, n) {
         var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

         table = document.getElementById(tableClass);
         switching = true;
         dir = "asc";
         while (switching) {
             switching = false;
             rows = table.getElementsByTagName("TR");
             for (i = 1; i < (rows.length - 1); i++) {
                 shouldSwitch = false;
                 x = rows[i].getElementsByTagName("TD")[n];
                 y = rows[i + 1].getElementsByTagName("TD")[n];
                 var cmpX = isNaN(parseInt(x.innerHTML)) ? x.innerHTML.toLowerCase() : parseInt(x.innerHTML);
                 var cmpY = isNaN(parseInt(y.innerHTML)) ? y.innerHTML.toLowerCase() : parseInt(y.innerHTML);
                 cmpX = (cmpX == '-') ? 0 : cmpX;
                 cmpY = (cmpY == '-') ? 0 : cmpY;
                 if (dir == "asc") {
                     if (cmpX > cmpY) {
                         shouldSwitch = true;
                         break;
                     }
                 } else if (dir == "desc") {
                     if (cmpX < cmpY) {
                         shouldSwitch = true;
                         break;
                     }
                 }
             }
             if (shouldSwitch) {
                 rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                 switching = true;
                 switchcount++;
             } else {
                 if (switchcount == 0 && dir == "asc") {
                     dir = "desc";
                     switching = true;
                 }
             }
         }
     }
     //
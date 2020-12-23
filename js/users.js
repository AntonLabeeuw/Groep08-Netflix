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
                 y.setAttribute("id", "myTr" + user["id"]);
                 document.getElementById("tbody").appendChild(y);

                 var checkboxtd = document.createElement("TD");
                 checkboxtd.setAttribute("class", "tdW100 text-center");

                 var checkbox = document.createElement("INPUT");
                 checkbox.type = "checkbox";
                 checkboxtd.appendChild(checkbox);
                 document.getElementById("myTr" + user["id"]).appendChild(checkboxtd);

                 var idtd = document.createElement("TD");
                 idtd.setAttribute("class", "tdW100");
                 idtd.setAttribute("data-label", "Id");
                 idtd.innerHTML = user["id"];
                 document.getElementById("myTr" + user["id"]).appendChild(idtd);

                 var emailtd = document.createElement("TD");
                 emailtd.setAttribute("class", "tdW100");
                 emailtd.setAttribute("data-label", "Email");
                 emailtd.innerHTML = user["email"];
                 document.getElementById("myTr" + user["id"]).appendChild(emailtd);

                 var typeabonneetd = document.createElement("TD");
                 typeabonneetd.setAttribute("class", "tdW100");
                 typeabonneetd.setAttribute("data-label", "Type");
                 typeabonneetd.innerHTML = user["typeabonnee"];
                 document
                     .getElementById("myTr" + user["id"])
                     .appendChild(typeabonneetd);

                 var aangemaakttd = document.createElement("TD");
                 aangemaakttd.setAttribute("class", "tdW100");
                 aangemaakttd.setAttribute("data-label", "Aangemaakt");
                 aangemaakttd.innerHTML = user["aangemaakt"];
                 document
                     .getElementById("myTr" + user["id"])
                     .appendChild(aangemaakttd);

                 var laatstelogintd = document.createElement("TD");
                 laatstelogintd.setAttribute("class", "tdW100");
                 laatstelogintd.setAttribute("data-label", "Laatste login");
                 laatstelogintd.innerHTML = user["laatstelogin"];
                 document
                     .getElementById("myTr" + user["id"])
                     .appendChild(laatstelogintd);

                 var profielentd = document.createElement("TD");
                 profielentd.setAttribute("class", "tdW100");
                 profielentd.setAttribute("data-label", "Profielen");
                 profielentd.innerHTML = user["profielen"].length;
                 document.getElementById("myTr" + user["id"]).appendChild(profielentd);

                 var Icons = document.createElement("TD");
                 var editIcon = document.createElement("I");
                 Icons.setAttribute("class", "tdW100");
                 editIcon.className = "fas fa-pen col-6";
                 Icons.appendChild(editIcon);
                 var deleteIcon = document.createElement("I");
                 deleteIcon.className = "fas fa-times col-6";
                 Icons.appendChild(deleteIcon);
                 document.getElementById("myTr" + user["id"]).appendChild(Icons);
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
                y.setAttribute("id", "myTr" + archiveUser["id"]);
                document.getElementById("tbody").appendChild(y);

                var checkboxtd = document.createElement("TD");
                checkboxtd.setAttribute("class", "tdW100 text-center");

                var checkbox = document.createElement("INPUT");
                checkbox.type = "checkbox";
                checkboxtd.appendChild(checkbox);
                document.getElementById("myTr" + archiveUser["id"]).appendChild(checkboxtd);

                var idtd = document.createElement("TD");
                idtd.setAttribute("class", "tdW100");
                idtd.setAttribute("data-label", "Id");
                idtd.innerHTML = archiveUser["id"];
                document.getElementById("myTr" + archiveUser["id"]).appendChild(idtd);

                var emailtd = document.createElement("TD");
                emailtd.setAttribute("class", "tdW100");
                emailtd.setAttribute("data-label", "Email");
                emailtd.innerHTML = archiveUser["email"];
                document.getElementById("myTr" + archiveUser["id"]).appendChild(emailtd);

                var typeabonneetd = document.createElement("TD");
                typeabonneetd.setAttribute("class", "tdW100");
                typeabonneetd.setAttribute("data-label", "Type");
                typeabonneetd.innerHTML = archiveUser["typeabonnee"];
                document
                    .getElementById("myTr" + archiveUser["id"])
                    .appendChild(typeabonneetd);

                var aangemaakttd = document.createElement("TD");
                aangemaakttd.setAttribute("class", "tdW100");
                aangemaakttd.setAttribute("data-label", "Aangemaakt");
                aangemaakttd.innerHTML = archiveUser["aangemaakt"];
                document
                    .getElementById("myTr" + archiveUser["id"])
                    .appendChild(aangemaakttd);

                var gearchiveerdtd = document.createElement("TD");
                gearchiveerdtd.setAttribute("class", "tdW100");
                gearchiveerdtd.setAttribute("data-label", "Gearchiveerdtd");
                gearchiveerdtd.innerHTML = archiveUser["gearchiveerd"];
                document
                    .getElementById("myTr" + archiveUser["id"])
                    .appendChild(gearchiveerdtd);

                var profielentd = document.createElement("TD");
                profielentd.setAttribute("class", "tdW100");
                profielentd.setAttribute("data-label", "Profielen");
                profielentd.innerHTML = archiveUser["profielen"].length;
                document.getElementById("myTr" + archiveUser["id"]).appendChild(profielentd);

                var Icons = document.createElement("TD");
                var addIcon = document.createElement("I");
                Icons.setAttribute("class", "tdW100");
                addIcon.className = "fas fa-plus col-12";
                Icons.appendChild(addIcon);
                document.getElementById("myTr" + archiveUser["id"]).appendChild(Icons);
            }
        });
    }
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
     function toggleProfiles() {
        var x = document.getElementById("dropprofielen");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
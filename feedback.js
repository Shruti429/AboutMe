
    var id = 1;
    function sub_data(){
       var comment = document.getElementById('comment').value;
       var res = document.getElementById("res").value;
       var first_name = document.getElementById("first_name").value;
       var last_name =document.getElementById("last_name").value;
 
         if(comment == "" || res == "" || first_name == "" || last_name == ""){
              alert("Please Fill Mandatory Field");
         }else{
             var table = document.getElementById("add_comment");
             var row = table.insertRow();
             var cell1 = row.insertCell(0);
             var cell2 = row.insertCell(1);
             var cell3 = row.insertCell(2);
             cell1.innerHTML = id;
             cell2.innerHTML = res+"&nbsp;"+first_name+"&nbsp;"+last_name;
             cell3.innerHTML = comment;
             id = id+1;
            //  alert("Record Insert Successfully");
             document.getElementById('comment').value ="";
             document.getElementById("res").value="0";
             document.getElementById("first_name").value = "";
             document.getElementById("last_name").value="";
         }
 
 
     }
async function loadUsers() {
    const response = await fetch('https://api.github.com/users/VigneshGIT18');
    const users = await response.json();


    return users;
    
  }

  document.addEventListener("DOMContentLoaded", async () => {
      let users = [];

      try {
          users = await loadUsers();
      } catch (e) {
          console.log("ERROR!");
          console.log(e);
      }

      console.log(users);
  });

  var table=document.createElement('table');
  table.setAttribute('class','table');
  //<table class="table"></table>
  
  
  var thead=document.createElement('thead');
  thead.setAttribute('class','thead-dark');
  
  
  
  var tr=document.createElement('tr');
  var th1=createelement('th','first');
  var th2=createelement('th','last');
  tr.append(th1,th2);
  thead.append(tr);
  
  var tbody=document.createElement('tbody');
  var tr=document.createElement('tr');
  var td1=createelement('td','fork count');
  var td2=createelement('td','stars count');
  
  tr.append(td1,td2);
  tbody.append(tr);
  table.append(thead,tbody); 
  
  
  
  
  
  
  
  function createelement(elename,value=""){
      var element=document.createElement(elename);
      element.innerHTML=value;
      console.log(element);
      {/* <th>First</th>*/}
      return element;
  }
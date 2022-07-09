let newmenu = document.querySelector('.menu-list')



function startmenu() {
   newmenu.innerHTML = `<div menu-list id="newmenu">
      <div class="link2">Home</div>
      <div class="link2">Buy</div>
      <div class="link2">Sale</div>
      <div class="link2"onclick="exitmenu()">Sair</div>  
   </div>`;
   
}

function exitmenu() {
    newmenu.innerHTML = `<div class="menu-list">
    <img src="menu.png" alt="" height="54px" onclick="startmenu()"></img>
    </div>`
}


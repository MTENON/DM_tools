function addNPCCard(nom, local, com) {
    document.querySelector("#NPC-tracker").innerHTML += `
            <div class="NPC-tracker-NPC">
                <div class="NPC-tracker-NPC-info">
                    <div class="NPC-tracker-NPC-info-haut">
                        <div>
                            <p class="NPC-tracker-NPC-info-haut-name">${nom}</p>
                            <input class="NPC-tracker-NPC-info-haut-name-input" style="display: none" type="text">
                            <p class="NPC-tracker-NPC-info-haut-localisation">${local}</p>
                            <input class="NPC-tracker-NPC-info-haut-localisation-input" style="display: none"
                                type="text">
                        </div>
                    </div>
                    <div class="NPC-tracker-NPC-info-bas">
                        <p class="NPC-tracker-NPC-info-bas-comment">${com}</p>
                        <input class="NPC-tracker-NPC-info-bas-comment-input" style="display: none" type="text">
                    </div>
                </div>
                
                <div class="NPC-tracker-stats">
                    <div class="NPC-tracker-stats-strenght NPC-tracker-stats-rows">
                        <i class="fa-solid fa-hand-fist"></i>
                        <input class="stats-input" type="number">
                    </div>
                    <div class="NPC-tracker-stats-agility NPC-tracker-stats-rows">
                        <i class="fa-solid fa-person-running"></i>
                        <input class="stats-input" type="number">

                    </div>
                    <div class="NPC-tracker-stats-willpower NPC-tracker-stats-rows">
                        <i class="fa-solid fa-brain"></i>
                        <input class="stats-input" type="number">
                    </div>
                </div>
                
                <div class="NPC-tracker-NPC-boutons">
                    <div class="deathdiv">
                        <p>Mort?</p>
                        <input class="deathbox" type="checkbox">
                    </div>
                    <i class="fa-solid fa-feather"></i>
                    <i class="fa-solid fa-trash-can" style="width: 40px;"></i>
                </div>
            </div>`
};

function cleanNPCTrackerAddNPC() { }

function initiateListeners() {
    addNPC();
    modifyNPC();
    deleteNPC();
}

function addNPC() {
    document.querySelector("#addButton").addEventListener('click', function () {
        const nom = document.querySelector('#NPC-tracker-addNPC-name').value;
        const local = document.querySelector('#NPC-tracker-addNPC-localisation').value;
        const com = document.querySelector('#NPC-tracker-addNPC-text').value;
        addNPCCard(nom, local, com);
        initiateListeners();
    });
}

function modifyNPC() {
    for (let i = 0; i < document.querySelectorAll(".fa-feather").length; i++) {
        document.querySelectorAll(".fa-feather")[i].addEventListener('click', function () {
            console.log('click feather');
            //Définir les variables pour simplifier les comparaisons
            let name = this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-name-input").style.display
            let local = this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-localisation-input").style.display
            let comment = this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-bas-comment-input").style.display

            if (name === "none" || local === "none" || comment === "none") {
                //dans le cas ou les modifs ne sont pas affichées, afficher les barres
                //Définir le contenu des inputs pour simplifier les modifications.
                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-name-input").value = this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-name").textContent;
                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-localisation-input").value = this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-localisation").textContent;
                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-bas-comment-input").value = this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-bas-comment").textContent;


                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-name-input").style.display = "block";
                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-localisation-input").style.display = "block";
                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-bas-comment-input").style.display = "block";

            } else {
                //dans le cas ou les barres sont affichées, les cacher et accepter les changements
                //lors de l'affichage mettre le contenu dans les input
                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-name").textContent = this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-name-input").value;
                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-name-input").style.display = "none";

                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-localisation").textContent = this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-localisation-input").value;
                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-haut-localisation-input").style.display = "none";

                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-bas-comment").textContent = this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-bas-comment-input").value;
                this.parentNode.parentNode.querySelector(".NPC-tracker-NPC-info-bas-comment-input").style.display = "none";
            }


        });
    };
}

function deleteNPC() {
    for (let i = 0; i < document.querySelectorAll(".fa-trash-can").length; i++) {
        document.querySelectorAll(".fa-trash-can")[i].addEventListener('click', function () {
            this.parentNode.parentNode.remove()
        });
    };
}

initiateListeners();
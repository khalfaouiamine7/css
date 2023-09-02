function valider_formulaire() {
    
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var age = document.getElementById("age").value;
    var localite = document.getElementById("localite").value;
    var telephone = document.getElementById("numero telephone").value;
    var email = document.getElementById("Address").value;
    var probleme = document.getElementById("Probleme").value;
    var adresse = document.getElementById("adresse").value;
    
   
    if (nom == "" || prenom == "" || age == "" || localite == "" || telephone == "" || email == "" || probleme == "" || adresse == "") {
      alert("Tous les champs doivent être remplis !");
      return false;
    }
    
    
    var regexAlphabetique = /^[a-zA-Z]+$/;
    if (!regexAlphabetique.test(nom) || !regexAlphabetique.test(prenom) || !regexAlphabetique.test(localite)) {
      alert("Les champs nom, prénom et localité ne doivent contenir que des lettres !");
      return false;
    }
    
    
    var ageInt = parseInt(age);
    if (isNaN(ageInt) || ageInt < 10 || ageInt > 100) {
      alert("Le champ âge doit être un entier entre 10 et 100 !");
      return false;
    }
    
    
    var regexNumerique = /^[0-9]+$/;
    if (!regexNumerique.test(telephone)) {
      alert("Le champ téléphone doit contenir que des chiffres !");
      return false;
    }
    
    
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      alert("L'adresse email n'est pas valide !");
      return false;
    }
    
    
    alert("Formulaire envoyé avec succès !");
    return true;
  }
  
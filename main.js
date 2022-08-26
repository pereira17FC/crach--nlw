const LinksRedeSocial = {   
    github : 'pereira17FC',
    youtube : 'channel/UC-WnEiVNEsUkV_QSqmViHQw',
    instagram : 'leo.sp.17',
    twitter : 'Leosp1705',
    facebook : 'profile.php?id=100004935392098' ,

}

function AbrirLinksRedeSocial(){
   for (let li of SocialLinks.children){
      const social = li.getAttribute ('class')
     li.children[0].href = `https://${social}.com/${LinksRedeSocial[social]}`
     


      
   }        
}
AbrirLinksRedeSocial()

//pegando informações de usuario do github
function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksRedeSocial.github}`
    
    fetch (url)
    .then(response => response.json())
    .then(data => {   
        Name.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        imagePerfil.src = data.avatar_url
        userLogin.textContent = data.login

    })

    
    
}
getGitHubProfileInfos()
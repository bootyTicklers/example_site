
class NavBar {

    constructor() {
    
        this.nav = document.createElement('nav');
        this.nav.classList = 'navbar navbar-dark bg-dark';

        this.home = document.createElement('a');
        this.home.href = '#home';
        this.home.innerHTML = 'Home';
        this.home.style.color = 'white';
        this.nav.appendChild(this.home);

        this.about = document.createElement('a');
        this.about.href = '#about';
        this.about.innerHTML = 'About';
        this.about.style.color = 'white';
        this.nav.appendChild(this.about);
        
        this.login = document.createElement('a');
        this.login.onclick = () => console.log('login pressed');
        this.login.innerHTML = 'Login';
        this.login.style.color = 'white';
        this.nav.appendChild(this.login);

        $('#header').append(this.nav);
        
    }

}

export {NavBar}



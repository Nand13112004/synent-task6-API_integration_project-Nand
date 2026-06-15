/* Select Elements */
const usernameInput =
document.getElementById('username');

const searchBtn =
document.getElementById('searchBtn');

const loading =
document.getElementById('loading');

const error =
document.getElementById('error');

const profile =
document.getElementById('profile');

/* Profile Elements */
const avatar =
document.getElementById('avatar');

const nameEl =
document.getElementById('name');

const bio =
document.getElementById('bio');

const followers =
document.getElementById('followers');

const following =
document.getElementById('following');

const repos =
document.getElementById('repos');

const profileLink =
document.getElementById('profileLink');

/* Fetch Profile */
async function fetchGitHubProfile(){

    const username =
    usernameInput.value.trim();

    if(username === ''){
        showError('Please enter username');
        return;
    }

    /* Show Loading */
    loading.classList.remove('hidden');

    /* Hide Previous */
    error.classList.add('hidden');
    profile.classList.add('hidden');

    try{

        const response =
        await fetch(
        `https://api.github.com/users/${username}`
        );

        if(!response.ok){
            throw new Error('User not found');
        }

        const data =
        await response.json();

        /* Fill Data */
        avatar.src = data.avatar_url;

        nameEl.innerText =
        data.name || data.login;

        bio.innerText =
        data.bio || 'No bio available';

        followers.innerText =
        data.followers;

        following.innerText =
        data.following;

        repos.innerText =
        data.public_repos;

        profileLink.href =
        data.html_url;

        /* Show Profile */
        profile.classList.remove('hidden');

    }
    catch(err){

        showError(err.message);
    }
    finally{

        loading.classList.add('hidden');
    }
}

/* Show Error */
function showError(message){

    error.innerText = message;

    error.classList.remove('hidden');
}

/* Search Button */
searchBtn.addEventListener(
'click',
fetchGitHubProfile
);

/* Enter Key Support */
usernameInput.addEventListener(
'keypress',
(e) => {

    if(e.key === 'Enter'){
        fetchGitHubProfile();
    }
});
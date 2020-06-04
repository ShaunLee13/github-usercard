/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cardholder = document.querySelector('.cards')
//Data stored at result.data
axios.get('https://api.github.com/users/ShaunLee13')
  .then(result => {
    console.log(`Here is your data: ${result.data}`)
    
    const newCard = userMaker(result.data)
    cardholder.appendChild(newCard)
  })
  .catch(error => {
    debugger
    console.log(`This is your error: ${error}`)
  })
  .finally( () => {
    console.log('done')
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'ShaunLee13',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
  'leachcoding'
]


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
  function userMaker(user){
    const {avatar_url, bio, followers, following, html_url, location, login, name} = user

    //Declare Components
    const card = document.createElement('div')
    const imagePull = document.createElement('img')
    const cardInfo = document.createElement('div')
    const namePull = document.createElement('h3')
    const usernamePull = document.createElement('p')
    const locationPull = document.createElement('p')
    const profile = document.createElement('p')
    const profileLinkPull = document.createElement('a')
    const followersPull = document.createElement('p')
    const followingPull = document.createElement('p')
    const bioPull = document.createElement('p')

    //Assign Necessary Classes & Attrs
    card.classList.add('card')
    cardInfo.classList.add('card-info')
    namePull.classList.add('name')
    usernamePull.classList.add('username')
    profileLinkPull.href = html_url
    imagePull.src = `${avatar_url}`

    //Attach TextContent
    namePull.textContent = name
    usernamePull.textContent = login
    locationPull.textContent = `Location: ${location}`
    profile.textContent = `Profile: `
    profileLinkPull.textContent = html_url
    followersPull.textContent = `Followers: ${followers}`
    followingPull.textContent = `Following: ${following}`
    bioPull.textContent = `Bio: ${bio}`

    //Basic Skeleton
    card.appendChild(imagePull)
    card.appendChild(cardInfo)
    cardInfo.appendChild(namePull)
    cardInfo.appendChild(usernamePull)
    cardInfo.appendChild(locationPull)
    cardInfo.appendChild(profile)
    profile.appendChild(profileLinkPull)
    cardInfo.appendChild(followersPull)
    cardInfo.appendChild(followingPull)
    cardInfo.appendChild(bioPull)

    return card
  }

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

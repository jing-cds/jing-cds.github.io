(function(){const cookieName='guest_favorites';function getFavorites(){const cookie=document.cookie.split('; ').find(row=>row.startsWith(cookieName+'='));return cookie?JSON.parse(decodeURIComponent(cookie.split('=')[1])):[]}
function setFavorites(favorites){document.cookie=`${cookieName}=${encodeURIComponent(JSON.stringify(favorites))}; path=/; max-age=31536000`}
function toggleFavorite(postId){let favorites=getFavorites();let isFavorited=!1;if(favorites.includes(postId)){favorites=favorites.filter(id=>id!==postId)}else{favorites.push(postId);isFavorited=!0}
setFavorites(favorites);updateUI(postId,isFavorited)}
function updateUI(postId,isFavorited){const btn=document.querySelector(`[data-fav-id="${postId}"]`);if(btn){btn.classList.toggle('favorited',isFavorited)}}
window.toggleFavorite=toggleFavorite;document.addEventListener('DOMContentLoaded',()=>{const favs=getFavorites();document.querySelectorAll('[data-fav-id]').forEach(btn=>{const id=parseInt(btn.dataset.favId);updateUI(id,favs.includes(id));btn.addEventListener('click',()=>toggleFavorite(id))})})})()
;
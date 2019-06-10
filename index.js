var cardContainer = $('.card-container');
var submit = $('.submit-btn');
submit.on("click",createNewUser);

function createNewUser() {
  var bucketList = $('.name').val();

  appendNewBucketList(bucketList);
  $('.name').val("");
}

function appendNewBucketList (bucketList) {
  cardContainer.append (`
    <div class= "bucket-list-card">
      <p class= "newCard">${bucketList}</p>
      <input type="checkbox" class="checkbox">
    </div>
`);
var checkbox = $('.checkbox');
checkbox.on('click',remove);
}

function remove() {
  event.target.parentNode.remove();
}

function submitNewItem(event) {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let listItem = $('#shopping-list-entry').val();
        if (listItem !== "") {
          return $('.shopping-list').append(
            $(`<li>
                <span class="shopping-item">${listItem}</span>
                <div class="shopping-item-controls">
                  <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                  </button>
                  <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                  </button>
                </div>
              </li>`));
        };
    }); 
};

function itemDelete(event) {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest("li").remove("li");
    });
}

function itemCheck(event) {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest("li").find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

$(itemCheck);
$(itemDelete);
$(submitNewItem);
console.log('files loaded');
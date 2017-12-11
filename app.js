(function($){
    var selList = [];

    var banquet = [];
    var administration = [];
    
    var currentList;
    var currentHook;

    if(!currentList) {
        $('.list').hide();
    }
    // populate list
    var checkboxes = $('.checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        var val = checkbox.parentNode.innerText;

        selList.push(val);
    }


    // Change current list
    var changecurrentList = function(list) {
        $('.list').show();
        currentList = list;
        unceckAllCheckboxes();
        checkSelectedCheckboxes(list);
    }

    var checkSelectedCheckboxes = function(list) {
        var checkboxes = $('.checkbox');
        for (let i = 0; i < checkboxes.length; i++) {
            const checkbox = checkboxes[i];
            var val = checkbox.parentNode.innerText;

            var index = list.indexOf(val);
            console.log(index)
            if(index > -1) {
                checkbox.checked = true;
            }
        }
    }

    var unceckAllCheckboxes = function() {
        var checkboxes = $('.checkbox');
        checkboxes.prop('checked', false)
    }
    
    var changeCurrentHook = function(hook) {
        currentHook = hook;
    }

    $('.input').click(function(){
        var variable = $(this).attr('data-var');
        var hook = $(this).find('.hook');
        $('.current-heading').text($(this).prev().prev().text())
        changeCurrentHook(hook);
        
        if(variable=='banquet') {
            changecurrentList(banquet);
        } else if (variable == 'administration') {
            changecurrentList(administration);
        }
    })

    $('.checkbox').change(function(e){
        var selectedValue = ($(this).parent()[0]).innerText;
        if($(this).is(':checked')) {
            currentList.push(selectedValue)
        } else {
            var index = currentList.indexOf(selectedValue)
            currentList.splice(index, 1);
        }

        
        currentHook.html('');
        for (let i = 0; i < currentList.length; i++) {
            const el = currentList[i];

            currentHook.append('<p>' + el + '</p>');
            
        }
    });

    var showList = function(list) {

    }

    $('#export').click(function(e){
        $(document).googoose({
            area: '#page-content',
            filename: 'demo.doc'
        });
    })
})(jQuery)
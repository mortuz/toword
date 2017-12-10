(function($){
    var data = [];

    $('.checkbox').change(function(e){
        var selectedValue = ($(this).parent()[0]).innerText;
        if($(this).is(':checked')) {
            data.push(selectedValue)
        } else {
            var index = data.indexOf(selectedValue)
            data.splice(index, 1);
        }
        
        $('.hook').html('');
        for (let i = 0; i < data.length; i++) {
            const el = data[i];

            $('.hook').append('<li>' + el + '</li>');
            
        }
    })

    $('#export').click(function(e){
        $(document).googoose({
            area: '#page-content',
            filename: 'demo.doc'
        });
    })
})(jQuery)
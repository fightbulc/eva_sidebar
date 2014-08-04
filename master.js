(function ()
{
    $('.pin-button').click(function ()
    {
        $('#eva-matrix').toggleClass('pinned');
    });

    $('.subgroup .name').click(function ()
    {
        $(this).parent().toggleClass('expand');
    });
})();
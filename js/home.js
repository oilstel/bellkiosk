// Bell Tabing

jQuery(document).ready(function() {
  jQuery('nav a').on('click', function(e)  {
    var currentAttrValue = jQuery(this).attr('href');
    // Show/Hide Tabs
    console.log(currentAttrValue);
    jQuery('section ' + currentAttrValue).show().siblings().hide();
    // Change/remove current tab to active
    jQuery(this).addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });
});

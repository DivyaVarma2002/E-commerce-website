$(document).ready(function() {
    // Function to update product details
    function updateProductDetails() {
        var activeItem = $('#productCarousel .carousel-item.active');
        var name = activeItem.data('name');
        var price = activeItem.data('price');
        var description = activeItem.data('description');
        var reviews = activeItem.data('reviews');

        $('#productName').text(name);
        $('#productPrice').text('Price: ' + price);
        $('#productDescription').text('Description: ' + description);
        $('#productReviews').text('Reviews: ' + reviews);
    }

    // Initial update of product details
    updateProductDetails();

    // Update product details on carousel slide
    $('#productCarousel').on('slide.bs.carousel', function() {
        setTimeout(updateProductDetails, 600); // Delay to ensure the slide transition completes
    });

    // Handle order submission
    $('#submitOrder').click(function() {
        // Add any necessary form validation here

        // Show confirmation modal
        $('#orderModal').modal('show');
    });
});
$('#productCarousel').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var name = $e.data('name');
    var price = $e.data('price');
    var description = $e.data('description');
    var reviews = $e.data('reviews');
    
    $('#productName').text(name);
    $('#productPrice').text('Price: ' + price);
    $('#productDescription').text('Description: ' + description);
    $('#productReviews').text('Reviews: ' + reviews);
});

$('#addToCartButton').click(function () {
    $('#addToCartModal').modal('show');
});

$('#submitOrder').click(function () {
    $('#orderModal').modal('show');
});
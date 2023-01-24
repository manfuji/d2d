$(function() {

    $(".login").click(function() {

        var email = $(".email").val();
        var password = $(".password").val();

        if (email == "" || password == "") {

            swal("Info", "Enter the email and password", "info");
            return;
        } 
        // else {

        //     $("#loader").show();

        //     $.post("users_checklogin.php", {
        //         email: email,
        //         password: password
        //     }, function(result) {
        //         $("#loader").hide();

        //         if (result.trim() == "success") {
        //             window.location.href = "../user/admin_dashboard.php";
        //         } else {
        //             swal("Error", "email or password could be wrong", "error");
        //             $("#loader").hide();
        //         }
        //     });


        // }

    })

})
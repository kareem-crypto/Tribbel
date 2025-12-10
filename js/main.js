        // Toggle the navigation menu on mobile
        function toggleMenu() {
            var links = document.getElementById("links");
            var closeMenu = document.querySelector(".close_menu");
            if (links.style.display === "block") {
                links.style.display = "none";
                closeMenu.style.display = "none";
            } else {
                links.style.display = "block";
                closeMenu.style.display = "block";
            }
        }

        // Show the edit profile form
        function showEditForm() {
            document.getElementById('editProfileForm').style.display = 'block';
        }

        // Update the profile information
        function updateProfile() {
            var newName = document.getElementById('newName').value;
            var newBio = document.getElementById('newBio').value;
            var newPhoto = document.getElementById('newPhoto').files[0];

            // Update profile display
            if (newName) document.getElementById('username').textContent = newName;
            if (newBio) document.getElementById('bio').textContent = newBio;

            if (newPhoto) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('profile-pic').src = e.target.result;
                };
                reader.readAsDataURL(newPhoto);
            }

            // Hide the form
            document.getElementById('editProfileForm').style.display = 'none';
        }
$(document).ready(function() {
    // Initially show the first step
    showStep(1);

    // Click event for step buttons
    $(".step-btn").click(function() {
        var stepId = $(this).data("step");
        showStep(stepId);
    });

    // Click event for tools button
    $("#tools-btn").click(function() {
        window.location.href = "tools.html"; // Navigate to tools page
    });

    // Click event for feedback button
    $("#feedback-btn").click(function() {
        window.location.href = "feedback.html"; // Navigate to feedback page
    });

    // Click event for steps button
    $("#steps-btn").click(function() {
        window.location.href = "index.html"; // Navigate to steps page
    });

      $("#docs-btn").click(function() {
        window.location.href = "docs.html"; // Navigate to steps page
    });

    $("#ai-help-btn").click(function() {
        window.location.href = "ai.html";
        ///alert("navigating to chatgpt..");
        //window.location.href = "https://chatgpt.com/g/g-67b703fe6d0c8191aa32f4bfc3cd9c90-ai-help-for-v80-90-18-20mw-repair-kit-5271802h"; // Navigate to steps page
    ///window.open('https://chatgpt.com/g/g-67b703fe6d0c8191aa32f4bfc3cd9c90-ai-help-for-v80-90-18-20mw-repair-kit-5271802h', '_blank');
    });

    

    // Click event for online help button
    $("#online-help-btn").click(function() {
        window.location.href = "support.html"; // Navigate to steps page//alert("Online Help is currently unavailable!"); // Placeholder for online help
    });


    // Function to display the selected step
    function showStep(stepId) {
        $(".step-btn").removeClass("active");
        $(".step-btn[data-step='" + stepId + "']").addClass("active");

        var stepTitle = "Step " + stepId;
        var stepDescription = "Placeholder text for step " + stepId + " content.";
        var imageSrc = "img/img_" + stepId + ".jpg";
switch (stepId) {
    case 1:
        stepTitle = "Step 1: Preparation";
        stepDescription = `
            <ul>
                <li>Demount the positioning sensor and mount the drain hose.</li>
                <li>On the rod, measure the length of the protruding thread or count the shims, depending on the type of link bearing head.</li>
                <li>Detach using the special tools accordingly.</li>
            </ul>
        `;
        break;
    case 2:
        stepTitle = "Step 2: Gland Removal";
        stepDescription = `
            <ul>
                <li>Mount the nylon plug according to the type of gland.</li>
                <li>Detach using the special tools.</li>
            </ul>
        `;
        break;
    case 3:
        stepTitle = "Step 3: Inspection";
        stepDescription = `
            <ul>
                <li>Inspect the tube for damages, paying special attention to longitudinal scratches.</li>
                <li>If damaged, replace with a completely new cylinder.</li>
            </ul>
        `;
        break;
    case 4:
        stepTitle = "Step 4: Installation";
        stepDescription = `
            <ul>
                <li>Grease/oil all threads and mating surfaces.</li>
                <li>Mount the Uptower Repair Kit into the tube, ensuring not to damage the seals when passing through the internal threads.</li>
                <li>Tighten with 950Nm.</li>
            </ul>
        `;
        break;
    case 5:
        stepTitle = "Step 5: Testing";
        stepDescription = `
            <ul>
                <li>After remounting the complete pitch system, drive the cylinder from 0° to 85° five times to bleed out air.</li>
                <li>Perform a pressure test and check for leaks.</li>
            </ul>
        `;
        break;
}


        // Update content with new title and description
        $("#step-title").html(stepTitle);
        $("#step-description").html(stepDescription);
        $("#step-image").attr("src", imageSrc);
    }
});

$(document).ready(function() {
    // Function to display the description in the popup
    window.showDescription = function(toolName, description) {
        // Set the content for the popup
        document.getElementById('popupTitle').innerText = toolName;
        document.getElementById('popupDescription').innerText = description;

        // Display the popup modal
        document.getElementById('descriptionPopup').style.display = "flex";
    };

    // Function to close the popup
    window.closePopup = function() {
        document.getElementById('descriptionPopup').style.display = "none";
    };
});




    



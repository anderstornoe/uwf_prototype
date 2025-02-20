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
        showToolsPage();
    });

    // Click event for feedback button
    $("#feedback-btn").click(function() {
        showFeedbackPage();
    });

       $("#steps-btn").click(function() {
        showStepsPage();
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
                stepDescription = "Demount the positioning sensor and mount the drain hose.<br>On the rod, measure the length of the protruding thread or count the shims, depending on the type of link bearing head. <br>Detach using the special tools accordingly.";
                break;
            case 2:
                stepTitle = "Step 2: Gland Removal";
                stepDescription = "Mount the nylon plug according to the type of gland. <br>Detach using the special tools.";
                break;
            case 3:
                stepTitle = "Step 3: Inspection";
                stepDescription = "Inspect the tube for damages, paying special attention to longitudinal scratches. <br>If damaged, replace with a completely new cylinder.";
                break;
            case 4:
                stepTitle = "Step 4: Installation";
                stepDescription = "Grease/oil all threads and mating surfaces, then mount the Uptower Repair Kit into the tube, ensuring not to damage the seals when passing through the internal threads. <br>Tighten with 950Nm.";
                break;
            case 5:
                stepTitle = "Step 5: Testing";
                stepDescription = "After remounting the complete pitch system, drive the cylinder from 0° to 85° five times to bleed out air. <br>Perform a pressure test and check for leaks.";
                break;
        }

        // Update content with new title and description
        $("#step-title").html(stepTitle);
        $("#step-description").html(stepDescription);
        $("#step-image").attr("src", imageSrc);
    }

    // Function to show the Tools page
    function showToolsPage() {
        window.location.href = "tools.html"; // Navigate to tools page
    }

    // Function to show the Feedback page
    function showFeedbackPage() {
        window.location.href = "feedback.html"; // Navigate to feedback page
    }

       function showStepsPage() {
        window.location.href = "index.html"; // Navigate to feedback page
    }
});

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon-32x32.png">
    <link rel="stylesheet" href="../assets/dist/css/main.css">
    <script src="../assets/js/crew.js"></script>
    <title>Frontend Mentor | Space tourism website</title>
</head>

<body id="crew">
<?php include './partials/header.html' ?>

    <main class="crew">
        <section class="crew-member">
            <h5><span>02</span> Meet your crew</h5>
            <section class="crew-member__details">
                <h4 id="crew-title"></h4>
                <h3 id="crew-name"></h3>
                <p id="crew-bio"></p>
            </section>
            <section class="crew-member__choices">

                <div id="0" class="active"></div>
                <div id="1"></div>
                <div id="2"></div>
                <div id="3"></div>
            </section>
        </section>
        <figure class="crew-member__image">
            <img id="crew-image" src="">
        </figure>
    </main>
</body>

</html>
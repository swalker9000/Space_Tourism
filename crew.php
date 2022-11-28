<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon-32x32.png">
    <link rel="stylesheet" href="../assets/dist/css/main.css">
    <script src="../assets/js/app.js"></script>
    <script src="../assets/js/crew.js"></script>
    <title>Frontend Mentor | Space tourism website</title>
</head>

<body id="crew">
    <header>
        <section class="nav-bar">
            <figure>
                <img src="./assets/img/shared/logo.svg" alt="logo">
            </figure>
            <hr>
            <nav id="main-nav">
                <a href="/"><strong>00</strong> Home</a>
                <a href="/destination.php"><strong>01</strong> Destination</a>
                <a href="/crew.php" class="active"><strong>02</strong> Crew</a>
                <a href="/technology.php"><strong>03</strong> Technology</a>
            </nav>
        </section>
    </header>
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
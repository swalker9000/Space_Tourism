<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon-32x32.png">
    <link rel="stylesheet" href="../assets/dist/css/main.css">
        <script src="../assets/js/app.js"></script>
        <script src="../assets/js/technology.js"></script>
        <title>Frontend Mentor | Space tourism website</title>
</head>

<body id="technology">

    <header>
        <section class="nav-bar">
            <figure>
                <img src="./assets/img/shared/logo.svg" alt="logo">
            </figure>
            <hr>
            <nav id="main-nav">
                <a href="/"><strong>00</strong> Home</a>
                <a href="/destination.php"><strong>01</strong> Destination</a>
                <a href="/crew.php"><strong>02</strong> Crew</a>
                <a href="/technology.php" class="active"><strong>03</strong> Technology</a>
            </nav>
        </section>
    </header>
    <main class="technology">
        <h5><span>03</span> Space launch 101</h5>
        <section class="launch">
            <section class="launch-steps">
                <section class="launch-steps__choices">
                    <div id="0" class="active">1</div>
                    <div id="1">2</div>
                    <div id="2">3</div>
                </section>
                <section class="launch-steps__terminology">
                    <p class="subtitle">The terminology...</p>
                    <h3 id="name"></h3>
                    <p id="description"></p>
                </section>
            </section>
            <figure class="launch-image">
                <img id="image" src="">
            </figure>
        </section>
    </main>
</body>

</html>
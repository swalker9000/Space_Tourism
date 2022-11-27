<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon-32x32.png">
  <link rel="stylesheet" href="../assets/dist/css/main.css">
  <script src="../assets/js/app.js"></script>
  <title>Frontend Mentor | Space tourism website</title>
</head>
<body id="destination">
<header>
<section class="nav-bar">
  <figure>
    <img src="./assets/img/shared/logo.svg" alt="logo">
  </figure>
  <hr>
  <nav id="main-nav">
    <a href="/"><strong>00</strong> Home</a>
    <a href="/destination.php" class="active"><strong>01</strong> Destination</a>
    <a href="/crew.php"><strong>02</strong> Crew</a>
    <a href="/technology.php"><strong>03</strong> Technology</a>
  </nav>
</section>
</header>     <main class="destination">
        <h5><span>01</span> Pick your destination</h5>
        <section class="destination-details">
            <section class="destination-details__image">
                <figure">
                    <img src="./assets/img/destination/image-moon.webp" alt="moon">
                    </figure>
            </section>

            <section class="destination-details__facts">
                <ul class="destination-details__facts-choices">
                    <li class="active" id="0">Moon</li>
                    <li id="1">Mars</li>
                    <li id="2">Europa</li>
                    <li id="3">Titan</li>
                </ul>
                <h2>Moon</h2>
                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                    regain perspective and come back refreshed. While you’re there, take in some history
                    by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <hr>
                <section class="destination-details__stats">
                    <article>
                        <p class="subheading2">Avg. distance</p>
                        <p class="subheading1"> 384,400 km</p>
                    </article>
                    <article>
                        <p class="subheading2">Est. travel time</p>
                        <p class="subheading1">3 days</p>
                    </article>
                </section>
            </section>
        </section>
    </main>
</body>

</html>
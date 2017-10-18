<?php
  $loi = array("Un robot ne peut porter atteinte à un être humain, ni, restant passif, permettre qu'un être humain soit exposé au danger.",
               "Un robot doit obéir aux ordres que lui donne un être humain, sauf si de tels ordres entrent en conflit avec la Première loi.",
               "Un robot doit protéger son existence tant que cette protection n'entre pas en conflit avec la Première ou la Deuxième loi.");
  $l=$_POST["l"];
  echo "<u>Loi de la robotique N° ".$l."</u><br><br>";
  echo "<b>".$loi[$l-1]."</b>";
?>

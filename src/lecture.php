<?php
  try {
    $base = new PDO('mysql:host=localhost; dbname=basephp', 'root', '');
  }    
  catch(exception $e) {
    die('Erreur '.$e->getMessage());
  }
  $retour = $base->query('SELECT * FROM tablephp');
  echo "<table>
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Compteur Visite</th>
              <th>Dernière Visite</th>
            </tr>
          </thead>
          <tbody>";
  while ($data = $retour->fetch()){
    echo "<tr>
            <td>".$data['prenom']."</td>
            <td>".$data['nom']."</td>
            <td>".$data['compteurvisite']."</td>
            <td>".$data['dernierevisite']."</td>
          </tr>";
  }
  echo "</tbody></table>";
  $base = null;
?>

<?php get_header(); ?>

  <?php
    $hero_image = get_theme_mod( 'hero_image', '' );
    $hero_style = $hero_image ? ' style="background-image: url(' . esc_url( $hero_image ) . ')"' : '';
  ?>
  <section class="hero"<?php echo $hero_style; ?>>
    <div class="hero-contenu">
      <span class="hero-badge">BAC +1 &mdash; Formation professionnelle</span>
      <h1>Une formation sp&eacute;cialis&eacute;e au service du num&eacute;rique</h1>
      <p>Le CS SNO forme des professionnels comp&eacute;tents et rigoureux, capables de r&eacute;pondre aux besoins num&eacute;riques des organisations d&rsquo;aujourd&rsquo;hui et de demain.</p>
      <div class="hero-boutons">
        <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'presentation-de-la-formation' ) ) ); ?>" class="bouton">D&eacute;couvrir la formation</a>
        <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="bouton bouton-outline">Nous contacter</a>
      </div>
    </div>
  </section>

  <section class="formation-apercu">
    <h2>La formation</h2>
    <p>Le CS SNO forme des spécialistes capables de créer et gérer la présence en ligne des organisations.</p>
    <p>Vous apprendrez à créer des sites web sous WordPress, analyser les besoins d'un client et travailler en mode projet professionnel.</p>
    <h2>Ce que vous apprendrez</h2>
    <ul>
      <li>Créer et gérer un site web WordPress</li>
      <li>Analyser les besoins d'un client</li>
      <li>Concevoir l'architecture d'un site (wireframes, arborescence)</li>
      <li>Respecter le RGPD et le droit à l'image</li>
      <li>Travailler en mode projet collaboratif</li>
    </ul>
  </section>

  <section class="actu">
    <h2>Actualités</h2>
    <p>Les dernières sorties scolaires et événements.</p>
    <?php
      $url_actu = get_permalink( get_option( 'page_for_posts' ) );
      if ( ! $url_actu ) {
          $url_actu = home_url( '/actualites/' );
      }
    ?>
    <a href="<?php echo esc_url( $url_actu ); ?>" class="bouton">Voir les actualités</a>
  </section>

<?php get_footer(); ?>

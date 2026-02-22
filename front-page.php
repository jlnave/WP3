<?php get_header(); ?>

  <?php
    $hero_image = get_theme_mod( 'hero_image', '' );
    $hero_style = $hero_image ? ' style="background-image: url(' . esc_url( $hero_image ) . ')"' : '';
  ?>
  <section class="hero"<?php echo $hero_style; ?>>
    <div class="hero-contenu">
            <span class="hero-badge" data-i18n="hero.badge">BAC +1 &mdash; Formation professionnelle</span>
      <h1 data-i18n="hero.title">Une formation sp&eacute;cialis&eacute;e au service du num&eacute;rique</h1>
      <p data-i18n="hero.desc">Le CS SNO forme des professionnels comp&eacute;tents et rigoureux, capables de r&eacute;pondre aux besoins num&eacute;riques des organisations d&rsquo;aujourd&rsquo;hui et de demain.</p>
      <div class="hero-boutons">
        <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'presentation-de-la-formation' ) ) ); ?>" class="bouton" data-i18n="btn.discover">D&eacute;couvrir la formation</a>
        <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" class="bouton bouton-outline" data-i18n="btn.contact">Nous contacter</a>
      </div>
    </div>
  </section>

  <div class="chiffres-cles">
    <div class="chiffres-grille">
      <div class="chiffre-item">
        <span class="chiffre-nombre">576h</span>
        <span class="chiffre-label" data-i18n="stat.training">de formation</span>
      </div>
      <div class="chiffre-item">
        <span class="chiffre-nombre">12</span>
        <span class="chiffre-label" data-i18n="stat.internship">semaines de stage</span>
      </div>
      <div class="chiffre-item">
        <span class="chiffre-nombre">5</span>
        <span class="chiffre-label" data-i18n="stat.subjects">mati&egrave;res</span>
      </div>
      <div class="chiffre-item">
        <span class="chiffre-nombre">BAC+1</span>
        <span class="chiffre-label" data-i18n="stat.certified">niveau certifi&eacute;</span>
      </div>
    </div>
  </div>

  <section class="formation-apercu">
    <div class="formation-apercu-inner">
      <div class="formation-apercu-texte">
        <h2 data-i18n="home.form.title">La formation CS SNO</h2>
        <p data-i18n="home.form.p1">Le Certificat de Sp&eacute;cialisation Service aux Organisations est une formation professionnelle qui pr&eacute;pare concr&egrave;tement aux r&eacute;alit&eacute;s du monde du travail dans le domaine des services aux organisations.</p>
        <p data-i18n="home.form.p2">Vous apprendrez &agrave; cr&eacute;er des sites web sous WordPress, analyser les besoins d&rsquo;un client et travailler en mode projet professionnel &agrave; travers des &eacute;tudes de cas concr&egrave;tes.</p>
        <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'presentation-de-la-formation' ) ) ); ?>" class="bouton bouton-bleu" style="margin-top:12px;" data-i18n="home.form.btn">En savoir plus</a>
      </div>
      <div class="formation-apercu-liste">
        <h3 data-i18n="home.list.title">Ce que vous apprendrez</h3>
        <ul>
          <li data-i18n="home.li.1">Cr&eacute;er et g&eacute;rer un site web WordPress</li>
          <li data-i18n="home.li.2">Analyser les besoins d&rsquo;un client</li>
          <li data-i18n="home.li.3">Concevoir l&rsquo;architecture d&rsquo;un site (wireframes, arborescence)</li>
          <li data-i18n="home.li.4">Respecter le RGPD et le droit &agrave; l&rsquo;image</li>
          <li data-i18n="home.li.5">Travailler en mode projet collaboratif</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="points-forts">
    <div class="points-forts-titre">
      <h2 data-i18n="points.title">Pourquoi choisir cette formation&nbsp;?</h2>
    </div>
    <div class="points-forts-grille">
      <div class="point">
        <span class="point-icone">&#127891;</span>
        <h3 data-i18n="point1.title">Formation certifi&eacute;e</h3>
        <p data-i18n="point1.desc">Un dipl&ocirc;me reconnu par l&rsquo;&Eacute;tat qui ouvre les portes du march&eacute; du travail et des formations sup&eacute;rieures.</p>
      </div>
      <div class="point">
        <span class="point-icone">&#128187;</span>
        <h3 data-i18n="point2.title">100&nbsp;% pratique</h3>
        <p data-i18n="point2.desc">Des projets concrets, des &eacute;tudes de cas r&eacute;els et 12 semaines de stage en entreprise pour une exp&eacute;rience directement valorisable.</p>
      </div>
      <div class="point">
        <span class="point-icone">&#127760;</span>
        <h3 data-i18n="point3.title">Tourn&eacute;e vers l&rsquo;avenir</h3>
        <p data-i18n="point3.desc">Num&eacute;rique, cybers&eacute;curit&eacute; et communication digitale au c&oelig;ur du programme pour r&eacute;pondre aux besoins d&rsquo;aujourd&rsquo;hui.</p>
      </div>
    </div>
  </section>

  <section class="actu">
    <h2 data-i18n="actu.title">Actualit&eacute;s</h2>
    <p data-i18n="actu.desc">Suivez les derni&egrave;res sorties scolaires, &eacute;v&eacute;nements et nouveaut&eacute;s de la formation.</p>
    <?php
      $url_actu = get_permalink( get_option( 'page_for_posts' ) );
      if ( ! $url_actu ) {
          $url_actu = home_url( '/actualites/' );
      }
    ?>
    <a href="<?php echo esc_url( $url_actu ); ?>" class="bouton" data-i18n="actu.btn">Voir les actualit&eacute;s</a>
  </section>

<?php get_footer(); ?>

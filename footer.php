  <footer>

    <div class="footer-gauche">
      <div class="logo-footer">
        <?php if ( has_custom_logo() ) : ?>
          <?php the_custom_logo(); ?>
        <?php else : ?>
          LOGO
        <?php endif; ?>
      </div>
      <h2><?php bloginfo( 'name' ); ?></h2>
      <h3><?php bloginfo( 'description' ); ?></h3>
    </div>

    <div class="footer-milieu">
      <?php wp_nav_menu( [
        'theme_location' => 'footer',
        'container'      => false,
        'fallback_cb'    => false,
      ] ); ?>
      <?php if ( ! has_nav_menu( 'footer' ) ) : ?>
        <ul>
          <li><a href="<?php echo esc_url( get_permalink( get_page_by_path( 'mentions-legales' ) ) ); ?>">Mentions l&eacute;gales</a></li>
          <li><a href="<?php echo esc_url( get_permalink( get_page_by_path( 'politique-de-confidentialite' ) ) ); ?>">Politique de confidentialit&eacute;</a></li>
          <li><a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>">Contact</a></li>
        </ul>
      <?php endif; ?>
    </div>

    <div class="footer-droite">
      <p>Adresse&nbsp;: [Adresse]</p>
      <p>T&eacute;l&nbsp;: [Num&eacute;ro]</p>
      <p>Mail&nbsp;: [Email]</p>
      <div class="reseaux-sociaux">
        <a href="#" aria-label="Facebook"> Facebook</a>
        <a href="#" aria-label="Instagram"> Instagram</a>
      </div>
    </div>

    <div class="copyright">
      <p>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. Tous droits r&eacute;serv&eacute;s.</p>
    </div>

  </footer>

<?php wp_footer(); ?>
</body>
</html>

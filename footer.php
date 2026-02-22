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
          <li><a href="<?php echo esc_url( get_permalink( get_page_by_path( 'mentions-legales' ) ) ); ?>" data-i18n="footer.mentions">Mentions l&eacute;gales</a></li>
          <li><a href="<?php echo esc_url( get_permalink( get_page_by_path( 'politique-de-confidentialite' ) ) ); ?>" data-i18n="footer.politique">Politique de confidentialit&eacute;</a></li>
          <li><a href="<?php echo esc_url( get_permalink( get_page_by_path( 'contact' ) ) ); ?>" data-i18n="footer.contact">Contact</a></li>
        </ul>
      <?php endif; ?>
    </div>

    <div class="footer-droite">
      <p><span data-i18n="footer.adresse">Adresse&nbsp;:</span> [Adresse]</p>
      <p><span data-i18n="footer.tel">T&eacute;l&nbsp;:</span> [Num&eacute;ro]</p>
      <p><span data-i18n="footer.mail">Mail&nbsp;:</span> [Email]</p>
      <div class="reseaux-sociaux">
        <a href="#" aria-label="Facebook"> Facebook</a>
        <a href="#" aria-label="Instagram"> Instagram</a>
      </div>
    </div>

    <div class="copyright">
      <p>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. <span data-i18n="footer.rights">Tous droits r&eacute;serv&eacute;s.</span></p>
    </div>

  </footer>

<?php wp_footer(); ?>
</body>
</html>

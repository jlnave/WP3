<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <header>

    <div class="logo">
      <?php if ( has_custom_logo() ) : ?>
        <?php the_custom_logo(); ?>
      <?php else : ?>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">LOGO</a>
      <?php endif; ?>
    </div>

    <nav>
      <?php wp_nav_menu( [
        'theme_location' => 'primary',
        'container'      => false,
        'fallback_cb'    => 'wp_page_menu',
      ] ); ?>
    </nav>

    <div id="lang-switcher" class="lang-switcher">
      <button id="lang-toggle" class="lang-btn" aria-label="Changer de langue">
        &#127760; <span id="lang-current">FR</span> <span class="lang-arrow">&#9662;</span>
      </button>
      <div class="lang-dropdown" role="menu">
        <button class="lang-option active" data-lang="fr" role="menuitem">
          &#127467;&#127479; Fran&ccedil;ais
        </button>
        <button class="lang-option" data-lang="en" role="menuitem">
          &#127468;&#127463; English
        </button>
      </div>
    </div>

    <button id="dark-mode-toggle" class="dark-toggle" aria-label="Passer en mode sombre" title="Mode sombre">&#9790;</button>

  </header>

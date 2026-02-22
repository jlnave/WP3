<?php

/**
 * Thème wp3 — Fonctions principales
 */

// --- Chargement du style principal ---
function wp3_enqueue_styles() {
    wp_enqueue_style( 'wp3-style', get_stylesheet_uri(), [], '1.6' );
    wp_enqueue_script( 'wp3-dark-mode', get_template_directory_uri() . '/dark-mode.js', [], '1.6', true );
    wp_enqueue_script( 'wp3-lang', get_template_directory_uri() . '/lang-switcher.js', [], '1.6', true );
}
add_action( 'wp_enqueue_scripts', 'wp3_enqueue_styles' );

// --- Script anti-flash dark mode (chargé avant le rendu de la page) ---
function wp3_dark_mode_head_script() {
    echo "<script>if(localStorage.getItem('darkMode')==='on'){document.documentElement.classList.add('dark-mode');}</script>\n";
}
add_action( 'wp_head', 'wp3_dark_mode_head_script', 1 );


// --- Configuration du thème ---
function wp3_setup() {

    // Gestion du titre dynamique par WordPress
    add_theme_support( 'title-tag' );

    // Support des images mises en avant (miniatures)
    add_theme_support( 'post-thumbnails' );

    // Support du logo personnalisé (Apparence > Personnaliser > Identité du site)
    add_theme_support( 'custom-logo' );

    // Support du HTML5 pour les formulaires et la galerie
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ] );

    // Enregistrement des menus de navigation
    register_nav_menus( [
        'primary' => __( 'Menu principal', 'wp3' ),
        'footer'  => __( 'Menu pied de page', 'wp3' ),
    ] );
}
add_action( 'after_setup_theme', 'wp3_setup' );


// --- Image hero accueil (Apparence > Personnaliser > Image hero) ---
function wp3_customize_register( $wp_customize ) {

    $wp_customize->add_section( 'wp3_hero', [
        'title'    => 'Image hero — Accueil',
        'priority' => 30,
    ] );

    $wp_customize->add_setting( 'hero_image', [ 'default' => '' ] );

    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'hero_image', [
        'label'    => 'Image de fond de la bannière',
        'section'  => 'wp3_hero',
        'settings' => 'hero_image',
    ] ) );
}
add_action( 'customize_register', 'wp3_customize_register' );

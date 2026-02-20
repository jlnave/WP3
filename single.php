<?php get_header(); ?>

  <main class="contenu">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

      <article>
        <h1><?php the_title(); ?></h1>
        <p class="meta">Publié le <?php echo esc_html( get_the_date() ); ?></p>

        <div class="contenu-article">
          <?php the_content(); ?>
        </div>

        <a href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ); ?>" class="bouton">&larr; Retour aux actualités</a>
      </article>

    <?php endwhile; endif; ?>

  </main>

<?php get_footer(); ?>

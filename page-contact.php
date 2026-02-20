<?php get_header(); ?>

<main class="contenu">

  <h1>Contact</h1>
  <p>Vous avez une question ? Remplissez le formulaire ci-dessous, nous vous répondrons dans les plus brefs délais.</p>

  <?php
  $message_envoye = false;
  $erreurs = [];

  if (isset($_POST['contact_nonce']) && wp_verify_nonce($_POST['contact_nonce'], 'envoi_contact')) {

    $nom     = sanitize_text_field($_POST['nom'] ?? '');
    $email   = sanitize_email($_POST['email'] ?? '');
    $sujet   = sanitize_text_field($_POST['sujet'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');

    if (empty($nom))
      $erreurs[] = 'Le champ Nom est obligatoire.';
    if (empty($email) || ! is_email($email))
      $erreurs[] = 'Veuillez saisir une adresse e-mail valide.';
    if (empty($sujet))
      $erreurs[] = 'Le champ Sujet est obligatoire.';
    if (empty($message))
      $erreurs[] = 'Le champ Message est obligatoire.';

    if (empty($erreurs)) {
      $destinataire = get_option('admin_email');
      $titre_mail   = '[CS SNO] ' . $sujet;
      $corps_mail   = "Nom : $nom\nEmail : $email\n\nMessage :\n$message";
      $headers      = array(
        'Content-Type: text/plain; charset=UTF-8',
        'Reply-To: ' . $nom . ' <' . $email . '>',
      );

      wp_mail($destinataire, $titre_mail, $corps_mail, $headers);
      $message_envoye = true;
    }
  }
  ?>

  <?php if ($message_envoye) : ?>

    <p class="contact-succes">Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.</p>

  <?php else : ?>

    <?php if (! empty($erreurs)) : ?>
      <ul class="contact-erreurs">
        <?php foreach ($erreurs as $erreur) : ?>
          <li><?php echo esc_html($erreur); ?></li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>

    <form class="formulaire-contact" method="post" action="">
      <?php wp_nonce_field('envoi_contact', 'contact_nonce'); ?>

      <div class="champ">
        <label for="nom">Nom <span class="obligatoire">*</span></label>
        <input type="text" id="nom" name="nom" value="<?php echo esc_attr($_POST['nom'] ?? ''); ?>" required>
      </div>

      <div class="champ">
        <label for="email">Adresse e-mail <span class="obligatoire">*</span></label>
        <input type="email" id="email" name="email" value="<?php echo esc_attr($_POST['email'] ?? ''); ?>" required>
      </div>

      <div class="champ">
        <label for="sujet">Sujet <span class="obligatoire">*</span></label>
        <input type="text" id="sujet" name="sujet" value="<?php echo esc_attr($_POST['sujet'] ?? ''); ?>" required>
      </div>

      <div class="champ">
        <label for="message">Message <span class="obligatoire">*</span></label>
        <textarea id="message" name="message" rows="6" required><?php echo esc_textarea($_POST['message'] ?? ''); ?></textarea>
      </div>

      <button type="submit" class="bouton">Envoyer le message</button>

    </form>

  <?php endif; ?>

</main>

<?php get_footer(); ?>